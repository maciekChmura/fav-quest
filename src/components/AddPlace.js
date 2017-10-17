import React from "react";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (text) => {
    dispatch({
      type: "ADD_PLACE",
      place: text
    })
  },
});

class AddPlace extends React.Component {
  constructor() {
    super();
    this.handleTextInput = this.handleTextInput.bind(this);
    this.state = {
      text: ""
    };
  }

  handleTextInput(event) {
    this.setState({
      text: event.target.value,
    })
  }

  render() {
    return (
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          this.props.onSubmit(this.state.text);
          this.setState({
            text: "",
          });
        }}>
        <TextField
          placeholder="Add place"
          value={this.state.text}
          onChange={this.handleTextInput}
        />
        <Button className="button" raised type="submit">Add</Button>
      </form>
    )
  }
};

export default connect(null, mapDispatchToProps)(AddPlace);
