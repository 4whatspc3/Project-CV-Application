import { useState } from "react";
import EducationForm from "./inputElements/EducationForm";
import EducationList from "./infoElements/EducationList";
import EducationCard from "./infoElements/EducationCard";

function Education() {
  const [value, setValue] = useState(0);
  const [educationArray, setEducationArray] = useState([]);

  function handleButtonClick() {
    value === 0
      ? setValue((previousState) => 1)
      : setValue((previousState) => 0);
  }

  function displayInputs(value) {
    if (value === 1) {
      return (
        <EducationForm onSave={handleSave} changeValue={handleButtonClick} />
      );
    } else {
      return null;
    }
  }

  function handleSave(newEducation) {
    setEducationArray((prev) => [...prev, newEducation]);
  }

  function deleteSave(objOfId) {
    const updatedEdcArr = educationArray.filter(
      (objSaved) => objSaved.id !== objOfId
    );
    setEducationArray(updatedEdcArr);
  }

  return (
    <>
      <h2>Education</h2>
      <div>
        <button className="information" onClick={handleButtonClick}>
          Add Information
        </button>
      </div>
      {displayInputs(value)}

      <EducationCard educationArray={educationArray} onDelete={deleteSave} />
      <EducationList educationArray={educationArray} />
    </>
  );
}

export default Education;
