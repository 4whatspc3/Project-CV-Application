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
  const [textSchool, setTextSchool] = useState("");
  const [textDegree, setTextDegree] = useState("");
  const [textStart, setTextStart] = useState("");
  const [textEnd, setTextEnd] = useState("");
  const [textLocation, setTextLocation] = useState("");

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
      </form>

      <div className="education-info">
        <SchoolInfo value={textSchool} />
        <DegreeInfo value={textDegree} />
        <StartDateInfo value={textStart} />
        <EndDateInfo value={textEnd} />
        <LocationInfo value={textLocation} />
      </div>
    </>
  );
}

export default GatherEdcElements;
