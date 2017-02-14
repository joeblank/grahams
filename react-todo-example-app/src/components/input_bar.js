import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToDo } from './../actions/index';


class InputBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  handleChange(event) {
    this.setState({
      term: event.target.value
    }, () => {console.log(this.state.term)})
  }

  onButtonClick(event) {
    this.props.addToDo(this.state.term);
    this.setState({
      term: ''
    });
  }


  render() {
    return (
      <div className="">
        <input
          value={this.state.term}
          onChange={this.handleChange}
          type=""
          className=""/>
        <button
          onClick={this.onButtonClick}
          >Add todo</button>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToDo }, dispatch)
}


export default connect(null, mapDispatchToProps)(InputBar);
