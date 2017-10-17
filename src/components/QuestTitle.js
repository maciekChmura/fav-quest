import React from "react";
import { connect } from "react-redux";
import Typography from "material-ui/Typography";
import TextField from "material-ui/TextField";

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (text) => {
    dispatch({
      type: "SET_NAME",
      name: text
    })
  },
});

class QuestTitle extends React.Component {
  constructor() {
    super();
    this.handleTextInput = this.handleTextInput.bind(this);
    this.state = {
      name: ""
    };
  }

  handleTextInput(event) {
    this.setState({
      name: event.target.value,
    })
  }
  render() {
    if (this.props.name === "") {
      return (
        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
            this.props.onSubmit(this.state.name);
            this.setState({
              text: "",
            });
          }}>
          <TextField
            placeholder="Quest name"
            value={this.state.text}
            onChange={this.handleTextInput}
            onBlur={() => this.props.onSubmit(this.state.name)}
          />
        </form>
      )
    }
    return (
      <Typography type="title">
        {this.props.name}
      </Typography>
    )
  }
}

export default connect(null, mapDispatchToProps)(QuestTitle);
