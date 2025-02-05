import { useState } from "react";

import {
  SchoolInput,
  DegreeInput,
  StartDateInput,
  EndDateInput,
  LocationInput,
} from "./inputElements";

function EducationForm({ onSave, changeValue }) {
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

  return (
    <form className="education-form">
      <SchoolInput
        value={textSchool}
        handleChange={(e) => setTextSchool(e.target.value)}
      />
      <DegreeInput
        value={textDegree}
        handleChange={(e) => setTextDegree(e.target.value)}
      />
      <StartDateInput
        value={textStart}
        handleChange={(e) => setTextStart(e.target.value)}
      />
      <EndDateInput
        value={textEnd}
        handleChange={(e) => setTextEnd(e.target.value)}
      />
      <LocationInput
        value={textLocation}
        handleChange={(e) => setTextLocation(e.target.value)}
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
