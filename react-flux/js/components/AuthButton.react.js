var React = require('react');
var UserActions = require('../actions/UserActions');
var ReactPropTypes = React.PropTypes;
function getTodoState() {
  return {
    loggedIn: UserStore.userLoggedIn(),
  };
}
var AuthButton = React.createClass({
  render: function() {
    return (
      <button id="auth-button" className={this.props.event} onClick={this._onAuth}>{this.props.event}</button>
    );
  },
   _onAuth: function() {
        if(this.props.event == "login"){
          return UserActions.login(document.getElementById('username').value,document.getElementById('password').value);
        } else{
          return UserActions.logout();
        }
   },
});
module.exports = AuthButton;
