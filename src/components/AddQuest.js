import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { addQuest } from '../actions'

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (text) => {
    dispatch(addQuest(text))
  },
});

class AddQuest extends React.Component {
  constructor() {
    super();
    this.handleTextInput = this.handleTextInput.bind(this);
    this.state = {
      text: ''
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
            text: '',
          });
        }}>
        <TextField
          placeholder="Enter quest"
          value={this.state.text}
          onChange={this.handleTextInput}
        />
        <Button raised type="submit">add Quest</Button>
      </form>
    )
  }
};

export default connect(null, mapDispatchToProps)(AddQuest);
