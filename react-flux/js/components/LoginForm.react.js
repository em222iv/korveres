var React = require('react');
var LoginForm = React.createClass({
  render: function() {
    return (
      <div id="header">
        <h1>Login</h1>
        <input
          id="username"
          className="input"
          placeholder="username"
          autoFocus={true}
        />
        <input
          id="password"
          className="input password"
          placeholder="password"
        />
      </div>
    );
  },
});
module.exports = LoginForm;
