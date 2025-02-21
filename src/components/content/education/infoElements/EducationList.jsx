function EducationList({ educationArray }) {
  return (
    <div className="education-info">
      <h2>Education</h2>
      {educationArray.map((edc) => (
        <ul key={edc.id}>
          <div>
            <li>
              <span className="text">{edc.school}</span>
            </li>
            <li>
              <span className="text">{edc.degree}</span>
            </li>
          </div>
          <div>
            <li>
              <span className="text">{edc.start}</span>
            </li>
            <li>—</li>
            <li>
              <span className="text">{edc.end}</span>
            </li>
          </div>
          <li>
            <span className="text">{edc.location}</span>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default EducationList;
