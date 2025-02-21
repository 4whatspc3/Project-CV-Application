function WorkList({ workArray }) {
  return (
    <div className="work-info">
      <h2>Work</h2>
      {workArray.map((exp) => (
        <ul key={exp.id}>
          <div>
            <li>
              <span className="text">{exp.company}</span>
            </li>

            <li>
              <span className="text">{exp.title}</span>
            </li>
          </div>
          <div>
            <li>
              <span className="text">{exp.start}</span>
            </li>
            <li>
              <span className="text">{exp.end}</span>
            </li>
          </div>
          <li>
            <span className="text">{exp.location}</span>
          </li>
          <li>
            <span className="text">{exp.description}</span>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default WorkList;
