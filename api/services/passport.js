// api/services/passport.js

var _ = require('lodash');
var _super = require('sails-permissions/api/services/passport');

function passport () { }

passport.prototype = Object.create(_super);
_.extend(passport.prototype, {

  // Extend with custom logic here by adding additional fields and methods,
  // and/or overriding methods in the superclass.
	endpoint : function (req, res) {
	  var strategies = sails.config.passport;
	  var provider = req.param('provider');
	  var options = strategies[provider].options || {};

	  // If a provider doesn't exist for this endpoint, send the user back to the
	  // login page
	  if (!strategies.hasOwnProperty(provider)) {
	    return res.redirect('/login');
	  }

	  // Attach scope if it has been set in the config
	  if (strategies[provider].hasOwnProperty('scope')) {
	    options.scope = strategies[provider].scope;
	  }

	  // Redirect the user to the provider for authentication. When complete,
	  // the provider will redirect the user back to the application at
	  //     /auth/:provider/callback
	  this.authenticate(provider, options)(req, res, req.next);
	},
	connect : function (req, query, profile, next) {
		if(sails.config.passport.google && sails.config.passport.google.options.hd) {
			var hostedDomain = false;
			profile.emails.forEach(function(email) {
				
				if(email.value.search(sails.config.passport.google.options.hd) > 0 ) {
					hostedDomain = true;
				}
				
			});


			if (!hostedDomain) {
	            req.flash('error', 'El email del usuario ' + profile.displayName + ' no pertenece al dominio ' + sails.config.passport.google.options.hd);
				return next(new Error('Solo se permiten emails de murciaeduca.es'));
			}
		}

		_super.connect(req, query, profile, next);
		
	}
});

module.exports = new passport();
