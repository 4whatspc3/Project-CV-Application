import { useState } from "react";

import {
  SchoolInput,
  DegreeInput,
  StartDateInput,
  EndDateInput,
  LocationInput,
} from "./inputElements";

function EducationForm({
  onSave,
  changeValue,
  toEdit,
  valueOfEdit,
  changeValueOfEdit,
}) {
  const [textSchool, setTextSchool] = useState("");
  const [textDegree, setTextDegree] = useState("");
  const [textStart, setTextStart] = useState("");
  const [textEnd, setTextEnd] = useState("");
  const [textLocation, setTextLocation] = useState("");

  function handleSave(e) {
    e.preventDefault();

    const obj = {
      id: crypto.randomUUID(),
      school: textSchool,
      degree: textDegree,
      start: textStart,
      end: textEnd,
      location: textLocation,
    };

    onSave(obj);

    setTextSchool("");
    setTextDegree("");
    setTextStart("");
    setTextEnd("");
    setTextLocation("");
  }

  function handleChange(num, e) {
    if (valueOfEdit !== false) {
      setTextSchool(toEdit.school);
      setTextDegree(toEdit.degree);
      setTextStart(toEdit.start);
      setTextEnd(toEdit.end);
      setTextLocation(toEdit.location);

      changeValueOfEdit();
    } else {
      switch (num) {
        case 0:
          setTextSchool(e.target.value);
          break;
        case 1:
          setTextDegree(e.target.value);
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
      }
    }
  }

  return (
    <form className="education-form">
      <SchoolInput
        value={textSchool}
        handleChange={(e) => handleChange(0, e)}
      />
      <DegreeInput
        value={textDegree}
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
      <div>
        <button className="Save" onClick={handleSave}>
          Save
        </button>
      </div>

      <div>
        <button className="cancel" onClick={changeValue}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EducationForm;
