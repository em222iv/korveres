
var AppDispatcher = require('../dispatcher/AppDispatcher');
var UserConstants = require('../constants/UserConstants');
var db = require('./database.js');
var UserActions = {
  login: function(username,password) {
    db.login(username,password).then(function(data) {
      if(data){
          AppDispatcher.dispatch({
            actionType: UserConstants.USER_LOGIN,
          })
        }
    }).catch (function (error) {
        console.log('Error: ', error);
    });
  },
  logout: function() {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_LOGOUT,
    });
  },
};
module.exports = UserActions;
