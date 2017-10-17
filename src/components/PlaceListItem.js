import React from "react";
import { ListItem, ListItemText } from "material-ui/List";
import TextField from "material-ui/TextField";
import IconButton from "material-ui/IconButton";
import ModeEdit from "material-ui-icons/ModeEdit";
import Delete from "material-ui-icons/Delete";
import Save from "material-ui-icons/Save";

class PlaceListItem extends React.Component {
  constructor() {
    super();
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.state = {
      name: "",
      isEditing: false,
    };
  }

  handleTextInput(event) {
    this.setState({
      name: event.target.value,
    })
  }

  toggleEditMode() {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  render() {
    if (this.state.isEditing) {
      return (
        <ListItem divider>
          <TextField
            defaultValue={this.props.element}
            value={this.state.text}
            onChange={this.handleTextInput}
            onBlur={() => {
              this.toggleEditMode();
              this.props.editPlace(this.props.index, this.state.name)
            }}
          />
          <IconButton onClick={this.toggleEditMode}>
          <Save />
        </IconButton>
        
        </ListItem>
      )
    }
    return (
      <ListItem divider>
        <ListItemText primary={this.props.element} />
        <IconButton onClick={this.toggleEditMode}>
          <ModeEdit />
        </IconButton>
        <IconButton onClick={this.props.removePlace}>
          <Delete />
        </IconButton>
      </ListItem>
    )
  }
};

export default PlaceListItem;
