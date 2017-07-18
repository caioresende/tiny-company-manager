var moduleName = 'TinyCompany.Companies.List';

angular
  .module(moduleName, [])
  .controller('ListCompaniesController', require('./ListCompaniesController'))
  .service('CompaniesService', require('./CompaniesService'));

  module.exports = moduleName;
