import React from "react";
import Button from "material-ui/Button";

const Controls = (props) => {
  return (
    <div>
      <Button className="button" raised onClick={props.saveQuest}>
        Save Quest
      </Button>
      <Button className="button" raised onClick={props.deleteQuest}>
        Delete Quest
      </Button>
    </div>
  )
};

export default Controls;
