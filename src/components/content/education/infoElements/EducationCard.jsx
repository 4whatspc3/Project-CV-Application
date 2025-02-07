import { useState } from "react";

function EducationCard({ onDelete, onEdit, educationArray }) {
  const [buttonValue, setButtonValue] = useState(false);

  function disableButton() {
    setButtonValue((prev) => true);
  }

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
                disableButton();
              }}
              disabled={buttonValue}
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
