function WorkCard({ onDelete, onEdit, workArray, buttonValue, toggleButton }) {
  return (
    <div className="work-card">
      {workArray.map((exp) => (
        <div key={exp.id} className="card">
          <span className="text">{exp.company}</span>

          <div className="container-btn-edit">
            <button
              className="edit"
              onClick={() => {
                onEdit(exp.id);
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
              onClick={() => onDelete(exp.id)}
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

export default WorkCard;
