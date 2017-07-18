module.exports = function($q, $http) {
  'njInject';

  var self = this;

  var companyUrl = 'https://mysterious-citadel-17041.herokuapp.com/api/companies';

  var formatCompanies = function(response) {
    var obj = {};

    for (var i = 0; i < response.length; i++) {
      obj[response[i]._id] = response[i];
    }
    self.companies = obj;
    return obj;
  };

  this.companies = {};

  this.createCompany = function(company) {
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
    return $http.get(companyUrl).then(function(response) {
      return formatCompanies(response.data);
    });
  };

  this.updateCompany = function(company) {
    self.companies[company._id] = company;
    return $q.when(true);
  };
};
