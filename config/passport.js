// config/passport.js

var _ = require('lodash');
var _super = require('sails-permissions/config/passport');

_.merge(exports, _super);
_.merge(exports, {

  // Extend with custom logic here by adding additional fields, methods, etc.
	passport: {
		google : {
		    name: 'Google',
		    protocol: 'oauth2',
		    strategy: require('passport-google-oauth').OAuth2Strategy,
		    options: {
		      clientID: '735582085260-82qpbj88q7dc0tog2efhomrkj69k8ahk.apps.googleusercontent.com',
		      clientSecret: 'Md_kylqc7NQYkuUsPlZxBoMl',
		      scope: ['profile', 'email']
		    }
	  }
	}
});
