import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const myList = this.props.masterList.map((todo, index) => {
      return (
        <li
          key={index}>
          { todo }
        </li>
      )
    })
    return <ul> { myList } </ul>
  }




}

function mapStateToProps(state) {
  return { masterList: state.todo };
}


export default connect(mapStateToProps)(List)
