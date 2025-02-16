import { useState } from "react";
import WorkForm from "./inputElements/WorkForm";
import WorkCard from "./infoElements/WorkCard";

function toggleState(setAnyValue) {
  setAnyValue((prev) => (prev ? 0 : 1));
}

function Work({ workArray, handleWorkArray }) {
  const [value, setValue] = useState(0);
  const [valueOfEdit, setValueOfEdit] = useState(0);
  const [buttonValue, setButtonValue] = useState(0);
  const [toEdit, setToEdit] = useState(null);

  function displayInputs(value) {
    if (value === 1) {
      return (
        <WorkForm
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

  function handleSave(newWork) {
    if (toEdit !== null) {
      const indexToUpdate = workArray.findIndex(
        (objSaved) => objSaved.id === toEdit.id
      );

      handleWorkArray("edit", newWork, indexToUpdate);

      setToEdit(null);

      setValueOfEdit(0);

      toggleState(setButtonValue);
    } else {
      handleWorkArray("save", newWork);

      if (buttonValue === 1) {
        setButtonValue(0);
      }
    }
  }

  function handleEdit(objOfId) {
    const objToEdit = workArray.find((objSaved) => objSaved.id === objOfId);

    setToEdit(objToEdit);

    toggleState(setValueOfEdit);
  }

  function toggleEdit() {
    toEdit !== null ? setToEdit((prev) => null) : null;
  }

  function deleteSave(objOfId) {
    const updatedWrkArr = workArray.filter(
      (objSaved) => objSaved.id !== objOfId
    );
    handleWorkArray("delete", updatedWrkArr);
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
    <>
      <h2>Work Experience</h2>

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

      <WorkCard
        workArray={workArray}
        changeValue={() => toggleState(setValue)}
        onEdit={handleEdit}
        onDelete={deleteSave}
        buttonValue={buttonValue}
        toggleButton={() => toggleState(setButtonValue)}
      />
    </>
  );
}

export default Work;
