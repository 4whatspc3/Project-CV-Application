import { useState } from "react";
import Education from "./components/content/education/Education";
import EducationList from "./components/content/education/infoElements/EducationList";
import Personal from "./components/content/personalDetails/Personal";
import Work from "./components/content/workExperience/Work";

function App() {
  const [educationArray, setEducationArray] = useState([]);

  function handleEducationArray(param, newItem, indexToUpdate) {
    if (param === "save") {
      setEducationArray((prev) => [...prev, newItem]);
    }

    if (param === "edit") {
      setEducationArray((prev) => {
        const newArray = [...prev];
        newArray[indexToUpdate] = newItem;
        return newArray;
      });
    }

    if (param === "delete") {
      setEducationArray(newItem);
    }
  }

  return (
    <>
      <Personal />
      <Education
        educationArray={educationArray}
        handleEducationArray={handleEducationArray}
      />
      <EducationList educationArray={educationArray} />
      <Work />
    </>
  );
}

export default App;
