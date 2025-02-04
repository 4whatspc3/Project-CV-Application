import { useState } from "react";

import {
  SchoolInput,
  DegreeInput,
  StartDateInput,
  EndDateInput,
  LocationInput,
} from "./inputElements/inputElements";

import {
  SchoolInfo,
  DegreeInfo,
  StartDateInfo,
  EndDateInfo,
  LocationInfo,
} from "./infoElements/infoElements";

function GatherEdcElements() {
  const [educationArray, setEducationArray] = useState([]);
  const [textSchool, setTextSchool] = useState("");
  const [textDegree, setTextDegree] = useState("");
  const [textStart, setTextStart] = useState("");
  const [textEnd, setTextEnd] = useState("");
  const [textLocation, setTextLocation] = useState("");

  function saveEducation(e) {
    e.preventDefault();

    const obj = {
      id: crypto.randomUUID(),
      school: textSchool,
      degree: textDegree,
      start: textStart,
      end: textEnd,
      location: textLocation,
    };

    if (textSchool.trim() !== "") {
      setEducationArray((edc) => [...edc, obj]);

      setTextSchool("");
      setTextDegree("");
      setTextStart("");
      setTextEnd("");
      setTextLocation("");
    }
  }

  return (
    <>
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
          <button className="Save" onClick={saveEducation}>
            Save
          </button>
        </div>
      </form>

      <div className="education-info">
        <h2>Education</h2>
        {educationArray.map((edc) => (
          <ol key={edc.id}>
            <li>
              <span className="text">{edc.school}</span>
            </li>
            <li>
              <span className="text">{edc.degree}</span>
            </li>
            <li>
              <span className="text">{edc.start}</span>
            </li>
            <li>
              <span className="text">{edc.end}</span>
            </li>
            <li>
              <span className="text">{edc.location}</span>
            </li>
          </ol>
        ))}
      </div>
    </>
  );
}

export default GatherEdcElements;
