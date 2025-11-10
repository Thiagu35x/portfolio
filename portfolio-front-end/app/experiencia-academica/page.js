import { ExperienceCard } from '../../components/ExperienceCard';
import { experienceData } from '../../data';

export default function AcademicExperiencePage() {
  const academicExperience = experienceData.filter(item => item.type === 'academic');

  return (
    <section>
      <h1 className="page-title">Experiência Acadêmica</h1>
      <h2 className="page-subtitle">Formação e Especialização Técnica</h2>
      
      <p className="body-text-lg">
        Minha formação acadêmica me forneceu a base teórica e de pesquisa necessária para lidar com desafios complexos de Desenvolvimento e Arquitetura de sistemas.
      </p>
      
      {academicExperience.map((item, index) => (
        <ExperienceCard
          key={index}
          type={item.type}
          title={item.title}
          institution={item.institution}
          period={item.period}
          details={item.details}
        />
      ))}
    </section>
  );
}