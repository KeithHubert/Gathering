import React from 'react';

const ZipField = (props) => {
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

export default ZipField;
