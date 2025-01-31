import { useState } from "react";
import GatherEdcElements from "./GatherEdcElements";

function Education() {
  const [value, setValue] = useState(0);

  function handleButtonClick(e) {
    {
      e.target.className === "information"
        ? value === 0
          ? setValue((previousState) => 1)
          : setValue((previousState) => 0)
        : null;
    }
  }

  function getInputs(value) {
    if (value === 1) {
      return <GatherEdcElements />;
    } else {
      return null;
    }
  }

  return (
    <>
      <h2>Education</h2>
      <div>
        <button className="information" onClick={handleButtonClick}>
          Add Information
        </button>
      </div>
      <div>{getInputs(value)}</div>
    </>
  );
}

export default Education;
