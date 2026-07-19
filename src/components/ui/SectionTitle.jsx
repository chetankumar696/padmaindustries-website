function SectionTitle({ title, heading, description }) {
  return (
    <div className="text-center mb-5">

      <h5 className="section-title">
        {title}
      </h5>

      <h2 className="section-heading">
        {heading}
      </h2>

      {description && (
        <p className="section-subtitle">
          {description}
        </p>
      )}

    </div>
  );
}

export default SectionTitle;