import { aboutData } from '../../data';
import { MdCode, MdStorage, MdCheckCircle} from 'react-icons/md';

const iconMap = {
    'code': MdCode,
    'database': MdStorage, 
};

const getIconComponent = (name) => {
    return iconMap[name] || MdCheckCircle;
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="page-title">Sobre Mim</h1>
      <h2 className="page-subtitle">Abordagem e Filosofia de Desenvolvimento</h2>
      
      <p className="body-text-lg">
        {aboutData.description}
      </p>
      
      <p className="body-text-lg">
        Acredito firmemente que a melhor arquitetura é aquela que se adapta, priorizando a legibilidade, os testes automatizados e a capacidade de evoluir sem causar "breaking changes". Sou um defensor do Javascript e de padrões de design sólidos.
      </p>

      <h3 className="section-title">Minha Stack Principal</h3>
      
      <div className="grid-tech">
        {aboutData.technologies.map((tech) => {
            const IconComponent = getIconComponent(tech.icon);
            return (
                <div key={tech.name} className="card-base tech-item">
                    <IconComponent size={32} className="tech-icon" style={{ display: 'block', margin: '0 auto 0.5rem' }} />
                    <p className="tech-name">{tech.name}</p>
                    <p className="tech-category">{tech.category}</p>
                </div>
            );
        })}
      </div>
    </section>
  );
}