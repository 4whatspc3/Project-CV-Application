import { useState } from "react";
import Education from "./components/content/education/Education";
import EducationList from "./components/content/education/infoElements/EducationList";
import Personal from "./components/content/personalDetails/Personal";
import PersonalList from "./components/content/personalDetails/PersonalList";
import Work from "./components/content/workExperience/Work";
import WorkList from "./components/content/workExperience/infoElements/WorkList";

function App() {
  const [educationArray, setEducationArray] = useState([]);
  const [workArray, setWorkArray] = useState([]);
  const [personalData, setpersonalData] = useState({
    id: crypto.randomUUID(),
    textName: "",
    textEmail: "",
    textPhone: "",
    textAddress: "",
  });

  function handleChangePersonal(property, value) {
    setpersonalData((prev) => ({
      ...prev,
      [property]: value,
    }));
  }

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

  function handleWorkArray(param, newItem, indexToUpdate) {
    if (param === "save") {
      setWorkArray((prev) => [...prev, newItem]);
    }

    if (param === "edit") {
      setWorkArray((prev) => {
        const newArray = [...prev];
        newArray[indexToUpdate] = newItem;
        return newArray;
      });
    }

    if (param === "delete") {
      setWorkArray(newItem);
    }
  }

  return (
    <>
      <Personal
        personalData={personalData}
        handleChangePersonal={handleChangePersonal}
      />
      <PersonalList personalData={personalData} />
      <Education
        educationArray={educationArray}
        handleEducationArray={handleEducationArray}
      />
      <EducationList educationArray={educationArray} />
      <Work workArray={workArray} handleWorkArray={handleWorkArray} />
      <WorkList workArray={workArray} />
    </>
  );
}

export default App;
