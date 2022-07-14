import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles({
  root: {
    background: "#f5ba13",
  },
});

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const clasess = useStyles();

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function changeExpand() {
    setExpanded(true);
  }

  function changeNote(event) {
    setNote((prevNote) => {
      return {
        ...note,
        [event.target.name]: event.target.value,
      };
    });
  }

  function addSumbit(event) {
    props.addNote(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            onChange={changeNote}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        ) : null}
        <textarea
          onClick={changeExpand}
          onChange={changeNote}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={note.content}
        />
        <Zoom in={isExpanded ? true : false}>
          <Fab onClick={addSumbit} className={clasess.root}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
