function EducationCard({
  onDelete,
  onEdit,
  educationArray,
  buttonValue,
  toggleButton,
}) {
  return (
    <div className="education-card">
      {educationArray.map((edc) => (
        <div key={edc.id} className="card">
          <span className="text">{edc.school}</span>

          <div className="container-btn-edit">
            <button
              className="edit"
              onClick={() => {
                onEdit(edc.id);
                toggleButton();
              }}
              disabled={buttonValue}
            >
              Edit
            </button>
          </div>

          <div className="container-btn-delete">
            <button
              className="delete"
              onClick={() => onDelete(edc.id)}
              disabled={buttonValue}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EducationCard;
