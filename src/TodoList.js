import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
  render () {
        return (
            <div>
                <div>
                  <input 
                    value={this.props.inputValue}
                    onChange={this.props.handleInputChange}
                  />
                    <button onClick={this.props.handleBtnClick}>提交</button>
                </div>
                <div>
                    <ul>
                        {this.props.list.map((item, index) => (<li key={index}>{item}</li>))}
                    </ul>
                </div>
            </div>
        )
    }

    handleInputChange = (e) => {
      console.log(e.target.value);
    }
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange (e) {
      const action = {
        type: 'INPUT_CHANGE',
        value: e.target.value
      }
      dispatch(action);
    },
    handleBtnClick () {
      console.log(this)
      if (this.props) {

      }
      const action = {
        type: 'BTN_CLICK'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
