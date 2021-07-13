import { useState } from "react";
import "./styles.css";

var showDB = [
  "How I Met Your Mother",
  "Friends",
  "Mr. Robot",
  "Silicon Valley",
  "Brooklyn Nine-Nine",
  "The Arrow",
  "Titans"
];

var showRating = [
  "9/10",
  "9.5/10",
  "9.2/10",
  "8/10",
  "9.3/10",
  "9.4/10",
  "8/10"
];

var musicDB = ["One love", "Oh, death", "Thrill of it", "Masakali"];
var musicArtist = ["Blue", "Steven Suptic", "Conro", "Mohit Chauhan"];

export default function App() {
  var [toggle, setToggle] = useState("");

  const musicList = () => {
    toggle = musicDB.map((item, value) => (
      <div key={value} className="listPlace">
        <h3>{item} </h3> <p> {musicArtist[value]} </p>
      </div>
    ));
    setToggle(toggle);
  };

  const showList = () => {
    toggle = showDB.map((item, value) => (
      <div key={value} className="listPlace">
        <h3> {item} </h3> <p> {showRating[value]} </p>
      </div>
    ));
    setToggle(toggle);
  };

  return (
    <div className="App">
      <h2 className="Heading">
        {" "}
        <span role="img" aria-label="idea emoji">
          {" "}
          💡
        </span>{" "}
        Recommendations
      </h2>
      <small> Some of my recommendations </small>
      <div>
        <button onClick={musicList}> Music </button>
        <button onClick={showList}> TV Shows </button>
      </div>
      <hr></hr>
      {toggle}
    </div>
  );
}
