import { useState } from "react";
import EducationForm from "./inputElements/EducationForm";
import EducationList from "./infoElements/EducationList";
import EducationCard from "./infoElements/EducationCard";

function Education() {
  const [value, setValue] = useState(0);
  const [toEdit, setToEdit] = useState(null);
  const [valueOfEdit, setValueOfEdit] = useState(false);
  const [educationArray, setEducationArray] = useState([]);
  const [buttonValue, setButtonValue] = useState(false);

  function displayInputs(value) {
    if (value === 1) {
      return (
        <EducationForm
          toEdit={toEdit}
          valueOfEdit={valueOfEdit}
          onSave={handleSave}
          handleCancel={handleCancel}
          changeValueOfEdit={changeValueOfEdit}
        />
      );
    } else {
      return null;
    }
  }

  function handleButtonClick() {
    value === 0
      ? setValue((previousState) => 1)
      : setValue((previousState) => 0);
  }

  function toggleButton() {
    buttonValue === false
      ? setButtonValue((previousState) => true)
      : setButtonValue((previousState) => false);
  }

  function handleSave(newEducation) {
    if (toEdit !== null) {
      const indexToUpdate = educationArray.findIndex(
        (objSaved) => objSaved.id === toEdit.id
      );

      setEducationArray((prev) => {
        const newArray = [...prev];
        newArray[indexToUpdate] = newEducation;
        return newArray;
      });

      setToEdit(null);

      setValueOfEdit(false);

      toggleButton();
    } else {
      setEducationArray((prev) => [...prev, newEducation]);

      if (buttonValue === true) {
        toggleButton();
      }
    }
  }

  function handleEdit(objOfId) {
    const objToEdit = educationArray.find(
      (objSaved) => objSaved.id === objOfId
    );

    setToEdit(objToEdit);

    changeValueOfEdit();
  }

  function changeValueOfEdit() {
    valueOfEdit === false
      ? setValueOfEdit((prev) => true)
      : setValueOfEdit((prev) => false);
  }

  function toggleEdit() {
    toEdit !== null ? setToEdit((prev) => null) : null;
  }

  function deleteSave(objOfId) {
    const updatedEdcArr = educationArray.filter(
      (objSaved) => objSaved.id !== objOfId
    );
    setEducationArray(updatedEdcArr);
  }

  function handleCancel() {
    handleButtonClick();

    toggleEdit();

    if (valueOfEdit === true) {
      changeValueOfEdit();
    }

    if (buttonValue === true) {
      toggleButton();
    }
  }

  return (
    <>
      <h2>Education</h2>
      <div>
        <button
          className="information"
          onClick={handleButtonClick}
          disabled={value === 1 ? buttonValue : null}
        >
          Add Information
        </button>
      </div>
      {displayInputs(value)}

      <EducationCard
        educationArray={educationArray}
        changeValue={handleButtonClick}
        onEdit={handleEdit}
        onDelete={deleteSave}
        buttonValue={buttonValue}
        toggleButton={toggleButton}
      />
      <EducationList educationArray={educationArray} />
    </>
  );
}

export default Education;
