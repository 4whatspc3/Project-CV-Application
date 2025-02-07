import { useState } from "react";

function EducationCard({
  onDelete,
  onEdit,
  educationArray,
  buttonValue,
  toggleButton,
}) {
  return (
    <div className="education-info">
      {educationArray.map((edc) => (
        <ol key={edc.id}>
          <li>
            <span className="text">{edc.school}</span>

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

            <button
              className="delete"
              onClick={() => onDelete(edc.id)}
              disabled={buttonValue}
            >
              Delete
            </button>
          </li>
        </ol>
      ))}
    </div>
  );
}

export default EducationCard;
