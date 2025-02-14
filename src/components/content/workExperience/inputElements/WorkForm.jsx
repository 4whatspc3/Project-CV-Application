import { useState } from "react";

import {
  CompanyNameInput,
  PositionTitleInput,
  StartDateInput,
  EndDateInput,
  LocationInput,
  DescriptionInput,
} from "./InputElements";

function WorkForm({
  onSave,
  toEdit,
  valueOfEdit,
  handleCancel,
  changeValueOfEdit,
}) {
  const [textCompany, setTextCompany] = useState("");
  const [textTitle, setTextTitle] = useState("");
  const [textStart, setTextStart] = useState("");
  const [textEnd, setTextEnd] = useState("");
  const [textLocation, setTextLocation] = useState("");
  const [textDescription, setTextDescription] = useState("");

  function handleSave(e) {
    e.preventDefault();

    const obj = {
      id: crypto.randomUUID(),
      company: textCompany,
      title: textTitle,
      start: textStart,
      end: textEnd,
      location: textLocation,
      description: textDescription,
    };

    onSave(obj);

    setTextCompany("");
    setTextTitle("");
    setTextStart("");
    setTextEnd("");
    setTextLocation("");
    setTextDescription("");
  }

  function handleChange(num, e) {
    if (valueOfEdit === 1) {
      setTextCompany(toEdit.company);
      setTextTitle(toEdit.title);
      setTextStart(toEdit.start);
      setTextEnd(toEdit.end);
      setTextLocation(toEdit.location);
      setTextDescription(toEdit.description);

      changeValueOfEdit();
    }

    switch (num) {
      case 0:
        setTextCompany(e.target.value);
        break;
      case 1:
        setTextTitle(e.target.value);
        break;
      case 2:
        setTextStart(e.target.value);
        break;
      case 3:
        setTextEnd(e.target.value);
        break;
      case 4:
        setTextLocation(e.target.value);
        break;
      case 5:
        setTextDescription(e.target.value);
        break;
    }
  }

  return (
    <form className="work-form">
      <CompanyNameInput
        value={textCompany}
        handleChange={(e) => handleChange(0, e)}
      />
      <PositionTitleInput
        value={textTitle}
        handleChange={(e) => handleChange(1, e)}
      />
      <StartDateInput
        value={textStart}
        handleChange={(e) => handleChange(2, e)}
      />
      <EndDateInput value={textEnd} handleChange={(e) => handleChange(3, e)} />
      <LocationInput
        value={textLocation}
        handleChange={(e) => handleChange(4, e)}
      />
      <DescriptionInput
        value={textDescription}
        handleChange={(e) => handleChange(5, e)}
      />
      <div className="container-btn-save">
        <button className="Save" onClick={handleSave}>
          Save
        </button>
      </div>

      <div className="container-btn-cancel">
        <button className="cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default WorkForm;
