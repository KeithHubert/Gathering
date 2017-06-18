import React from 'react';

const TimeField = (props) => {
  return (
    <label>{props.label}
      <input
        name={props.name}
        onChange={props.handlerFunction}
        type='time'
        value={props.content}
      />
    </label>
  );
}

export default TimeField;
