import React from 'react';
import Button from 'material-ui/Button';

const Controls = (props) => {
  return (
    <div>
      <Button raised onClick={props.saveQuest}>
        Save
      </Button>
    </div>
  )
};

export default Controls;
