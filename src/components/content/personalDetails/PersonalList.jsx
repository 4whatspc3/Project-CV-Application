function PersonalList({ personalData }) {
  return (
    <div className="personal-info">
      <ul key={personalData.id}>
        <li>
          <span className="text">{personalData.textName}</span>
        </li>
        <li>
          <span className="text">{personalData.textEmail}</span>
        </li>
        <li>
          <span className="text">{personalData.textPhone}</span>
        </li>
        <li>
          <span className="text">{personalData.textAddress}</span>
        </li>
      </ul>
    </div>
  );
}

export default PersonalList;
