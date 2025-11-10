import { configData } from '../data';

export default function HomePage() {
  return (
    <section>
      <h1 className="page-title">{configData.name}</h1>
      <h2 className="page-subtitle">{configData.role}</h2>
      
      <p className="body-text-lg">
        Bem-vindo à minha documentação profissional. Esta página serve como um hub central para explorar meu trabalho, experiência e o conjunto de tecnologias que utilizo para construir aplicações escaláveis.
      </p>
      <p className="body-text-lg">
        Minha principal paixão reside em transformar requisitos complexos em código limpo, eficiente e de fácil manutenção, abrangendo desde a infraestrutura de back-end até a experiência final do usuário no front-end.
      </p>
      
      <h3 className="section-title">Missão</h3>
      <p className="body-text-lg">
        Garantir a entrega de soluções com alta qualidade técnica, utilizando metodologias ágeis e promovendo a colaboração contínua dentro da equipe de desenvolvimento.
      </p>
    </section>
  );
}