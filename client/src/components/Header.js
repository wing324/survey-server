import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

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
        return [
          <li key="1"><Payments /></li>,
          <li key="2" style={{margin: '0px 0px 5px 10px'}}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="3"><a href="/api/logout">Logout</a></li>
        ]
    }
  }

  render() {
     return(
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth? '/surveys' : '/'} className="brand-logo" >
            Survey Server
          </Link>
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
