import React from 'react';

const CreatorField = (props) => {
  return (
    <label>{props.label}
      <input
        name={props.name}
        onChange={props.handlerFunction}
        type='text'
        value={props.creator}
      />
    </label>
  );
}

export default CreatorField;
