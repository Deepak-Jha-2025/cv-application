import "../../styles/ExperienceInfo.css";

export default function ExperienceInfo({ info }) {
  const { companyName, positionTitle, description, location, startDate, endDate } = info;

  return (
    <div className="experience-info">
      <div className="experience-info-group">
        <p className="dates">
          {startDate}
          {startDate && endDate && <span> – </span>}
          {endDate}
        </p>
        <p>{location}</p>
      </div>

      <div className="experience-info-group">
        <p className="experience-info-companyName">{companyName}</p>
        <p className="experience-info-positionTitle">{positionTitle}</p>
        <p className="experience-info-description">{description}</p>
      </div>
    </div>
  )
}
