import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/addTodo'

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  handleChange = (text) => {
    this.setState({
      input: text
    })
  }

  handleSubmit = () => {
    this.props.addTodo(this.state.input);
    this.setState({
      input: ""
    })
  }

  render() {
    return (
      <div className='addTodo'>
        <input type = 'text' placeholder = 'Add Todo' onChange = {this.handleChange}/>
        <button type = 'submit' onSubmit = {this.handeSubmit}>Add</button>
      </div>
    );
  }
}

export default connect(null,{addTodo})(AddTodo);