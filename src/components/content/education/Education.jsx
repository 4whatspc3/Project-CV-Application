import { useState } from "react";
import EducationForm from "./inputElements/EducationForm";
import EducationCard from "./infoElements/EducationCard";

function toggleState(setAnyValue) {
  setAnyValue((prev) => (prev ? 0 : 1));
}

function Education({ educationArray, handleEducationArray }) {
  const [value, setValue] = useState(0);
  const [valueOfEdit, setValueOfEdit] = useState(0);
  const [buttonValue, setButtonValue] = useState(0);
  const [toEdit, setToEdit] = useState(null);

  function displayInputs(value) {
    if (value === 1) {
      return (
        <EducationForm
          toEdit={toEdit}
          valueOfEdit={valueOfEdit}
          onSave={handleSave}
          handleCancel={handleCancel}
          changeValueOfEdit={() => toggleState(setValueOfEdit)}
        />
      );
    } else {
      return null;
    }
  }

  function handleSave(newEducation) {
    if (toEdit !== null) {
      const indexToUpdate = educationArray.findIndex(
        (objSaved) => objSaved.id === toEdit.id
      );

      handleEducationArray("edit", newEducation, indexToUpdate);

      setToEdit(null);

      setValueOfEdit(0);

      toggleState(setButtonValue);
    } else {
      handleEducationArray("save", newEducation);

      if (buttonValue === 1) {
        setButtonValue(0);
      }
    }
  }

  function handleEdit(objOfId) {
    const objToEdit = educationArray.find(
      (objSaved) => objSaved.id === objOfId
    );

    setToEdit(objToEdit);

    toggleState(setValueOfEdit);
  }

  function toggleEdit() {
    toEdit !== null ? setToEdit((prev) => null) : null;
  }

  function deleteSave(objOfId) {
    const updatedEdcArr = educationArray.filter(
      (objSaved) => objSaved.id !== objOfId
    );
    handleEducationArray("delete", updatedEdcArr);
  }

  function handleCancel() {
    toggleState(setValue);

    toggleEdit();

    if (valueOfEdit === 1) {
      setValueOfEdit(0);
    }

    if (buttonValue === 1) {
      setButtonValue(0);
    }
  }

  return (
    <div className="container-education">
      <h2>Education</h2>
      <div className="container-btn-addInfo">
        <button
          className="information"
          onClick={() => toggleState(setValue)}
          disabled={value === 1 ? buttonValue : null}
        >
          Add Information
        </button>
      </div>
      {displayInputs(value)}

      <EducationCard
        educationArray={educationArray}
        changeValue={() => toggleState(setValue)}
        onEdit={handleEdit}
        onDelete={deleteSave}
        buttonValue={buttonValue}
        toggleButton={() => toggleState(setButtonValue)}
      />
    </div>
  );
}

export default Education;
