import { ExperienceCard } from '../../components/ExperienceCard';
import { experienceData } from '../../data';

export default function ProfessionalExperiencePage() {
  const professionalExperience = experienceData.filter(item => item.type === 'professional');

  return (
    <section>
      <h1 className="page-title">Experiência Profissional</h1>
      <h2 className="page-subtitle">Histórico de Contribuições no Mercado</h2>
      
      <p className="body-text-lg">
        Abaixo estão listados meus principais papéis e contribuições em empresas, destacando a responsabilidade técnica e os resultados alcançados.
      </p>
      
      {professionalExperience.map((item, index) => (
        <ExperienceCard
          key={index}
          type={item.type}
          title={item.title}
          institution={item.company}
          period={item.period}
          details={item.details}
        />
      ))}
    </section>
  );
}