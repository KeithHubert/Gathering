import React from 'react';

const TitleField = (props) => {
  return (
    <label>{props.label}
      <input
        name={props.name}
        onChange={props.handlerFunction}
        type='text'
        value={props.content}
      />
    </label>
  );
}

export default TitleField;
