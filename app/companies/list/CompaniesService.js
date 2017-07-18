module.exports = function($q) {
  'njInject';

  var self = this;

  var companyUrl = '/api/companies';

  this.companies = {};

  this.createCompany = function(company) {
    console.log(company);
    var id = new Date().getTime();

    self.companies[id] = angular.copy(company);
    self.companies[id]._id = id;
    return $q.when(self.companies[id]);
  };

  this.deleteCompany = function(id) {
    delete self.companies[id];
    return $q.when(true);
  };

  this.getCompanies = function() {
    return $q.when(self.companies);
  };

  this.updateCompany = function(company) {
    self.companies[company._id] = company;
    return $q.when(true);
  };
};
