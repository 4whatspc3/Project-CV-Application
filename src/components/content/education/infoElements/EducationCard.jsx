function EducationCard({ onDelete, valueOfEdit, changeValue, educationArray }) {
  return (
    <div className="education-info">
      {educationArray.map((edc) => (
        <ol key={edc.id}>
          <li>
            <span className="text">{edc.school}</span>

            <button
              className="edit"
              onClick={() => {
                changeValue();
                valueOfEdit();
              }}
            >
              Edit
            </button>

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
