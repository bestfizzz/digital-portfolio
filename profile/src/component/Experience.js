const Experience = ({ title, company, duration, description }) => {
    return (
      <div className="experience-container">
        <h2>Experience</h2>
        <h3>{title}</h3>
        <p>{company}</p>
        <p>{duration}</p>
        <p>{description}</p>
      </div>
    );
  };
export default Experience