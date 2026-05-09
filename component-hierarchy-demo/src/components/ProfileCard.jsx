function ProfileCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Course: {props.course}</p>
      <p>Section: {props.section}</p>
    </div>
  );
}

export default ProfileCard;