import React, { Component } from 'react';


class Landing extends Component {

  render() {
    console.log(this.props);
    return (
      <div style={{ textAlign: 'center'}}>
        <h1>
          Wing!
        </h1>
          Collect feedback from your users.
      </div>
    );
  }
}


export default Landing;
