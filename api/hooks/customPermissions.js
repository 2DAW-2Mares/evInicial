// api/hooks/customPermissions.js

/*
var permissionPolicies = [
  'passport',
  'sessionAuth',
  'ModelPolicy',
  'OwnerPolicy',
  'PermissionPolicy',
  'RolePolicy'
];
*/

module.exports = function (sails) {
  return {
    identity: 'custom-permissions',

    /**
     * Local cache of Model name -> id mappings to avoid excessive database lookups.
     */
    _modelCache: { },

    configure: function () {
    //  if (!_.isObject(sails.config.permissions)) sails.config.permissions = { };

      sails.config.blueprints.populate = false;
    },
    initialize: function (next) {
      sails.log.info('custom-permissions: initializing custom-permissions hook');
      
      if (!validateDependencies(sails)) {
        sails.log.error('Cannot find sails-permissions hook. Did you "npm install sails-auth sails-permissions --save"?');
        sails.log.error('Please see README for installation instructions: https://github.com/tjwebb/sails-permissions');
        return sails.lower();
      }

      /*
      if (!validatePolicyConfig(sails)) {
        sails.log.error('One or more required policies are missing.');
        sails.log.error('Please see README for installation instructions: https://github.com/tjwebb/sails-permissions');
        return sails.lower();
      }
      */
      /*
      sails.after(sails.config.permissions.afterEvent, function () {
          installCustomPermissions(sails);
      });
      */
      sails.after('hook:permissions:loaded', function () {
        /*
        Model.count()
          .then(function (count) {
            if (count == sails.models.length) return next();
        */
            return initializeCustomPermissions(sails)
              .then(function () {
                sails.emit('hook:custom-permissions:loaded');
                next();
              });
        /*
          })
          .catch(function (error) {
            sails.log.error(error);
            next(error);
          });
        */
      });
    }
  };
};

/**
 * Install the application. Sets up default Roles, Users, Models, and
 * Permissions, and creates an admin user.
 
function initializeCustomPermissions (sails) {
  return require('../../config/permissions/model').createModels()
    .bind({ })
    .then(function (models) {
      this.models = models;

      sails.hooks['sails-permissions']._modelCache = _.indexBy(models, 'identity');

      return require('../../config/fixtures/role').create();
    })
    .then(function (roles) {
      this.roles = roles;
      var userModel = _.find(this.models, { name: 'User' });
      return require('../../config/fixtures/user').create(this.roles, userModel);
    })
    .then(function () {
      return User.findOne({ email: sails.config.permissions.adminEmail });
    })
    .then(function (user) {
      sails.log.verbose('sails-permissions: created admin user:', user);
      user.createdBy = user.id;
      user.owner = user.id;
      return user.save();
    })
    .then(function (admin) {
      return require('../../config/fixtures/permission').create(this.roles, this.models, admin);
    })
    .catch(function (error) {
      sails.log.error(error);
    });
}
*/

function initializeCustomPermissions (sails) {
  return require('../../config/fixtures/permissions').create();
}

/*
function installCustomPermissions (sails) {

  var models = sails.models;
  if (sails.config.models.autoCreatedBy === false) return;

  _.each(models, function (model) {
    if (model.autoCreatedBy === false) return;

    _.defaults(model.attributes, {
      createdBy: {
        model: 'User',
        index: true
      },
      owner: {
        model: 'User',
        index: true
      }
    });
  });

}
*/

/*
function validatePolicyConfig (sails) {
  var policies = sails.config.policies;
  return _.all([
    _.isArray(policies['*']),
    _.intersection(permissionPolicies, policies['*']).length === permissionPolicies.length,
    policies.AuthController && _.contains(policies.AuthController['*'], 'passport')
  ]);
}
*/

function validateDependencies (sails) {
  return !!sails.hooks['sails-permissions'];
}
