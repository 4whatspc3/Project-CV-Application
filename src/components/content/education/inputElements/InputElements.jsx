const SchoolInput = ({ value, handleChange }) => {
  return (
    <>
      <label htmlFor="school">School: </label>
      <input
        name="school"
        id="school"
        type="text"
        placeholder="Enter school / University"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

const DegreeInput = ({ value, handleChange }) => {
  return (
    <>
      <label htmlFor="degree">Degree: </label>
      <input
        name="degree"
        id="degree"
        type="text"
        placeholder="Enter degree / Field of Study"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

const StartDateInput = ({ value, handleChange }) => {
  return (
    <>
      <label htmlFor="startDate">Start Date: </label>
      <input
        name="startDate"
        id="startDate"
        type="text"
        placeholder="DD/MM/YYYY"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

const EndDateInput = ({ value, handleChange }) => {
  return (
    <>
      <label htmlFor="endDate">End Date: </label>
      <input
        name="endDate"
        id="endDate"
        type="text"
        placeholder="DD/MM/YYYY"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

const LocationInput = ({ value, handleChange }) => {
  return (
    <>
      <label htmlFor="location">Location: </label>
      <input
        name="location"
        id="location"
        type="text"
        placeholder="City, Country"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export {
  SchoolInput,
  DegreeInput,
  StartDateInput,
  EndDateInput,
  LocationInput,
};
