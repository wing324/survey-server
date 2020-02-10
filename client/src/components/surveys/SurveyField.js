import React from 'react';

export default (props) => {
  console.log(props);

  const { input, label, meta } = props;
  // const input = props.input;
  return (
    <div>
      <label><h4>{ label }</h4></label>
      <input {...input}/>
      <div className="red-text" style={{marginBottom: '20px'}}>
        {meta.touched && meta.error}
      </div>
    </div>

  );
};
