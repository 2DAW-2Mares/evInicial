// config/permissions.js

var _ = require('lodash');
var _super = require('sails-permissions/config/fixtures/role');

_.merge(exports, {

  // Extend with custom logic here by adding additional fields, methods, etc.
    create: function () {
	  return Promise.all([
	    Role.findOrCreate({ name: 'admin' }, { name: 'admin' }),
	    Role.findOrCreate({ name: 'registered' }, { name: 'registered' }),
	    Role.findOrCreate({ name: 'public' }, { name: 'public' }),
	    Role.findOrCreate({ name: 'profesor' }, { name: 'profesor' })
	  ]);
    }
});

_.merge(exports, _super);
