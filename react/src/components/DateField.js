import React from 'react';

const DateField = (props) => {
  return (
    <label>{props.label}
      <input type="date"
        name={props.name}
        onChange={props.handlerFunction}


        value={props.content}
      />
    </label>
  );
}

export default DateField;
