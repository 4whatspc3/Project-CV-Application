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

const arr = [];

function GatherEdcElements() {
  const [textSchool, setTextSchool] = useState("");
  const [textDegree, setTextDegree] = useState("");
  const [textStart, setTextStart] = useState("");
  const [textEnd, setTextEnd] = useState("");
  const [textLocation, setTextLocation] = useState("");
  const [arrEducation, setArrEducation] = useState(arr);

  function handleSubmit(e) {
    e.preventDefault();

    const obj = {
      school: textSchool,
      degree: textDegree,
      start: textStart,
      end: textEnd,
      location: textLocation,
    };

    setTextSchool((prev) => "");
    setTextDegree((prev) => "");
    setTextStart((prev) => "");
    setTextEnd((prev) => "");
    setTextLocation((prev) => "");

    return setArrEducation((arrEducation) => arr.push(obj));
  }

  return (
    <>
      <form className="education-form" onSubmit={handleSubmit}>
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
          <button className="Delete">Delete</button>
        </div>
        <div>
          <button className="Cancel">Cancel</button>
        </div>
        <div>
          <button type="submit" className="Save">
            Save
          </button>
        </div>
      </form>

      <div className="education-info">
        <SchoolInfo value={textSchool} />
        <DegreeInfo value={textDegree} />
        <StartDateInfo value={textStart} />
        <EndDateInfo value={textEnd} />
        <LocationInfo value={textLocation} />
      </div>

      {console.log(arrEducation)}
    </>
  );
}

export default GatherEdcElements;
