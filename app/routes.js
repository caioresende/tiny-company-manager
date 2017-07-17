module.exports = function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {

  'ngInject';

  $urlMatcherFactoryProvider.strictMode(false);

  $urlRouterProvider
    .when('/', '');

  $stateProvider
    .state('home', {
      url: '',
      views: {
        'manager@': {
          template: require('./companies/list/list.html'),
          controller: 'ListCompaniesController as list'
        }
      }
    })
};
