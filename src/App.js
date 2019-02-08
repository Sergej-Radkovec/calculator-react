import React, { Component } from 'react';

import Classes from './App.css';
import Screen from './components/Screen/Screen'
import ControlPanel from './containers/ControlPanel/ControlPanel';

const buttons = [
  'AC', '/', '*',
  '7', '8', '9', '-',
  '4', '5', '6', '+',
  '1', '2', '3', '=',
  '0', '.'
  ];

class App extends Component {
  state = {
    userInput: '0',
    userFormula: '',
  };

  clickButtonHandler(event) {
    let userInput = event.target.innerHTML;

    this.setState(state => {

      let newUserFormula = null;
      let result = null;

      if (isNaN(state.userInput) && isNaN(userInput)) {
        newUserFormula = state.userFormula.replace(/.$/, userInput);
      } else {
        newUserFormula = state.userFormula.concat(userInput);
      }

      if (userInput === '=') {
        result = eval(state.userFormula);
        newUserFormula += result;
        userInput = result;
      }

      if (state.userFormula.indexOf('=') !== -1) {
        newUserFormula = userInput
      }

      if (userInput === 'AC') {
        newUserFormula = '';
        userInput = 0;
      }

      return {
      ...state,
        userInput: userInput,
        userFormula: newUserFormula
      }
    });
  }

  render() {
    return (
      <div className={Classes.App}>
        <Screen scnType='formulaScreen'>{this.state.userFormula}</Screen>
        <Screen scnType='outputScreen'>{this.state.userInput}</Screen>
        <ControlPanel buttons={buttons} clicked={this.clickButtonHandler.bind(this)}/>
      </div>
    );
  }
}

export default App;
