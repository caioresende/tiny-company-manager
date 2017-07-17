
require('angular');

angular.module('TinyCompany', [
  require('angular-aria'),
  require('angular-animate'),
  require('angular-messages'),
  require('angular-material'),
  require('@uirouter/angularjs').default,
  require('./core'),
  require('./companies')
])

.config(require('./routes'))
.config(require('./config'));
