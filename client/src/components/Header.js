import React, {Component} from 'react';
import { connect } from 'react-redux';

class Header extends Component{

  renderContent() {
    switch(this.props.auth){
      case null:
        return;
      case false:
        return(
          <a href="/auth/google">Login With Google</a>
        );
      default:
        return(
          <a href="/api/logout">Logout</a>
        );
    }
  }

  render() {
     return(
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo" >
            Survey Server
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            { this.renderContent() }
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state){
  return {auth: state.auth};
}

// function mapStateToProps({auth}){
//   return { auth};
// }

export default connect(mapStateToProps)(Header);
