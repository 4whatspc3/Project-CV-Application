import { useState } from "react";
import GatherEdcElements from "./GatherEdcElements";

function Education() {
  const [value, setValue] = useState(0);

  function handleButtonClick() {
    if (value === 0) {
      setValue((previousState) => 1);
    } else {
      setValue((previousState) => 0);
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
        <button onClick={handleButtonClick}>Add Information</button>
      </div>
      <div>{getInputs(value)}</div>
    </>
  );
}

export default Education;
