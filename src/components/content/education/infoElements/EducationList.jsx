function EducationList({ educationArray }) {
  return (
    <div className="education-info">
      <h2>Education</h2>
      {educationArray.map((edc) => (
        <ul key={edc.id}>
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
        </ul>
      ))}
    </div>
  );
}

export default EducationList;
