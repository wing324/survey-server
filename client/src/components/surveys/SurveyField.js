import React from 'react';

export default (props) => {
  console.log(props);

  const { input, label } = props;
  // const input = props.input;
  return (
    <div>
      <label><h4>{ label }</h4></label>
      <input {...input}/>
    </div>
  );
};
