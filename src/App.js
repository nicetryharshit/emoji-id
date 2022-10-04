import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🙂": "Smile",
  "😆": "Laugh",
  "😒": "Unamused",
  "🥵": "Hot",
  "🥶": "Cold"
};

export default function App() {
  //[varToUpdate, functionTheVarRespondsTo] = useState("defaultValue")
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function onEmojiClick(emoji) {
    var meaning = emojiDictionary[emoji];
    setEmojiMeaning(meaning);
  }

  function onEmojiInputChange(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (userInput !== "") {
      if (meaning === undefined) {
        meaning = "Meaning not found in our database";
      }
    } else {
      meaning = "";
    }
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Inside out </h1>
      <input onChange={onEmojiInputChange}></input>
      <h2>{emojiMeaning}</h2>
      <h3>Our emoji database</h3>
      {Object.keys(emojiDictionary).map(function (item) {
        return (
          <span
            onClick={() => onEmojiClick(item)}
            className="emoji-list"
            key={item}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}

//Notes:

//onclick use arrow function to prevent too many render errors?
//https://stackoverflow.com/questions/59304283/error-too-many-re-renders-react-limits-the-number-of-renders-to-prevent-an-in
