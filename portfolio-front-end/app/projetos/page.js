"use client";

import React, { useState, useEffect } from 'react';
import { MdCode, MdOutlineOpenInNew, MdLoop } from 'react-icons/md';
import { AiOutlineFork } from 'react-icons/ai';
import { configData } from '../../data';

export default function ProjectsPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const username = configData.githubUser;

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=9&type=owner`);
        
        if (response.status === 404) {
             throw new Error(`Usuário do GitHub "${username}" não encontrado.`);
        }
        if (!response.ok) {
          throw new Error(`Erro na API: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        const relevantRepos = data
          .filter(repo => !repo.fork)
          .slice(0, 9);
          
        setRepos(relevantRepos);
      } catch (err) {
        console.error("Erro ao buscar repositórios:", err);
        setError(`Não foi possível carregar os projetos de ${username}. Ocorreu um erro na requisição.`);
        setRepos([
          { id: 101, name: "Sistema de Auth Serverless (Mock)", description: "Implementação de autenticação JWT em arquitetura Lambda/Node.js.", html_url: "#", language: "Node.js", updated_at: new Date().toISOString(), stargazers_count: 42 },
          { id: 102, name: "Portal Admin React (Mock)", description: "Dashboard administrativo com componentes modulares e Zustand.", html_url: "#", language: "React", updated_at: new Date(Date.now() - 86400000).toISOString(), stargazers_count: 28 }
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, [username]);

  return (
    <section>
      <h1 className="page-title">Projetos</h1>
      <h2 className="page-subtitle">Repositórios de Destaque no GitHub</h2>
      
      <p className="body-text-lg">
        Estes são alguns dos projetos mais relevantes do meu GitHub. Eles demonstram minha aplicação prática das tecnologias listadas e minha capacidade de entrega de software.
      </p>

      {loading && (
        <div className="flex-center loading-container">
          <MdLoop size={32} />
          <span>Carregando projetos de {username}...</span>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>{error}</p>
          <p style={{ marginTop: '0.25rem', fontSize: '0.9rem' }}>Exibindo projetos de exemplo.</p>
        </div>
      )}

      <div className="grid-projects">
        {repos.map((repo) => (
          <div key={repo.id} className="card-base project-card">
            <div>
              <h4>{repo.name}</h4>
              <p className="project-description">
                {repo.description || "Descrição não fornecida."} 
              </p>
            </div>
            
            <div className="project-footer">
              <div className="project-meta">
                <span className="project-language">
                  <MdCode size={14} /> 
                  {repo.language || 'N/A'}
                </span>
                <span className="project-updated">
                  <AiOutlineFork size={14} style={{ marginRight: '0.25rem' }} />
                  Atualizado: {new Date(repo.updated_at).toLocaleDateString('pt-BR')}
                </span>
              </div>
              <a 
                href={repo.html_url || "#"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                Ver Código no GitHub <MdOutlineOpenInNew size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}