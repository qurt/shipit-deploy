var utils = require('shipit-utils');

/**
 * Deploy task.
 * - deploy:update
 * - deploy:publish
 * - deploy:clean
 * - deploy:finish
 */

module.exports = function (gruntOrShipit) {
  require('./init')(gruntOrShipit);
  require('./update')(gruntOrShipit);
  require('./publish')(gruntOrShipit);
  require('./clean')(gruntOrShipit);
  require('./finish')(gruntOrShipit);

  utils.registerTask(gruntOrShipit, 'deploy', [
    'deploy:init',
    'deploy:update',
    'deploy:publish',
    'deploy:clean',
    'deploy:finish'
  ]);
};
