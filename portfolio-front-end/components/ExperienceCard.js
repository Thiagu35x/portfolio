import { MdWork, MdSchool } from 'react-icons/md';

export function ExperienceCard({ type, title, institution, period, details }) {
  const isProfessional = type === 'professional';
  const IconComponent = isProfessional ? MdWork : MdSchool;
  const roleLabel = isProfessional ? 'Empresa' : 'Instituição';
  const roleValue = isProfessional ? institution : institution;

  return (
    <div className="card-base">
      <div className="flex-gap-1">
        <IconComponent size={20} className="card-title" />
        <h3 className="card-title">{title}</h3>
      </div>
      <p className="card-subtitle">
        <span style={{ color: 'var(--color-accent)', fontWeight: '600' }}>{roleLabel}:</span> {roleValue} | {period}
      </p>
      
      {details && details.length > 0 && (
        <ul className="detail-list">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
}