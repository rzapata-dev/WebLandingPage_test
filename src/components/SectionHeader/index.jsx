import "./style.css";

function SectionHeader({ subtitle, title, description }) {
  return (
    <header className="section-header">
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="section-description">{description}</p>}
    </header>
  );
}

export default SectionHeader;