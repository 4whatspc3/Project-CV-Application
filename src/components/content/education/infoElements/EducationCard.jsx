function EducationCard({ onDelete, educationArray }) {
  return (
    <div className="education-info">
      {educationArray.map((edc) => (
        <ol key={edc.id}>
          <li>
            <span className="text">{edc.school}</span>
            <button className="delete" onClick={() => onDelete(edc.id)}>
              Delete
            </button>
          </li>
        </ol>
      ))}
    </div>
  );
}

export default EducationCard;
