import React from 'react';

const GameTypeField = props => {
  let optionElements = props.options.map(option =>{
    return (
      <option key={option} value={option}>{option}</option>
    );
  })

  return (
    <label>{props.label}
      <select name={props.name} value={props.gameType} onChange={props.handlerFunction}>
        <option value=""></option>
        {optionElements}
      </select>
    </label>
  );
}

export default GameTypeField;
