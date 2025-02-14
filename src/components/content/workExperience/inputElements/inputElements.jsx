const CompanyNameInput = ({ value, handleChange }) => {
  return (
    <>
      <label htmlFor="company">Company name: </label>
      <input
        name="company"
        id="company"
        type="text"
        placeholder="Enter company name"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

const PositionTitleInput = ({ value, handleChange }) => {
  return (
    <>
      <label htmlFor="title">Position title: </label>
      <input
        name="title"
        id="title"
        type="text"
        placeholder="Enter position title"
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
        placeholder="DD/MM/YYYY"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

const DescriptionInput = ({ value, handleChange }) => {
  return (
    <>
      <label htmlFor="description">description: </label>
      <textarea
        name="description"
        id="description"
        type="text"
        placeholder="Enter description"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export {
  CompanyNameInput,
  PositionTitleInput,
  StartDateInput,
  EndDateInput,
  LocationInput,
  DescriptionInput,
};
