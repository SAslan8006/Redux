import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, selectButton } from "./actions/Noteactions";
import "./style.css";

function Notehere() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  const lastClickedButton = useSelector((state) => state.lastClickedButton);

  const handleClick = (buttonId) => {
    dispatch(selectButton(buttonId));
  };

  const handleAddNote = () => {
    dispatch(
      addNote({
        text: noteText,
        color: getColorForButton(lastClickedButton),
      })
    );
    setNoteText("");
  };

  const getColorForButton = (buttonId) => {
    switch (buttonId) {
      case 1:
        return "#F06292";
      case 2:
        return "#BA68C8";
      case 3:
        return "#FFD54F";
      case 4:
        return "#4FC3F7";
      case 5:
        return "#AED581";
      default:
        return "#44C767";
    }
  };

  const [noteText, setNoteText] = useState("");

  return (
    <>
    <div className="Not">
        
      <textarea
        id="subject"
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "250px",
          margin: "3rem auto",
          resize: "none",
          display: "block",
        }}
        placeholder="Enter your note here..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      ></textarea>
<div className="all-buttons">
      <button className="eklebuton"
        onClick={handleAddNote}
        style={{
          backgroundColor: "#44C767",
          borderRadius: "155px",
          width: "125px",
          height: "55px",
          border: "0",
          color: "white",
          // marginLeft: "-175px",
          paddingTop: "5px",
          fontSize: "25px",
          // position: "relative",
          top: "-66px",
        }}
      >
        EKLE
      </button>
      <div className="button-div">
        {[0, 1, 2, 3, 4, 5].map((buttonId) => (
          <button
            key={buttonId}
            onClick={() => handleClick(buttonId)}
            className="myButton"
            style={{
              backgroundColor: getColorForButton(buttonId),
              borderRadius: "140px",
              width: "50px",
              // marginLeft: "-710px",
              border: "0",
              height: "50px",
              // position: "relative",
              top: "-79px",
              color: "white",
              marginRight: "5px",
            }}
          >
            {lastClickedButton === buttonId ? <span>&#10003;</span> : null}
          </button>
        ))}
        
      </div>
      </div>
    </div>

<div className="notcard">
{notes.map((note, index) => (
  <div
    key={index}
    className="card"
    style={{ marginBottom: "25px", backgroundColor: note.color }}
  >
    {note.text}
  </div>
))}</div></>
  );
}

export default Notehere;
