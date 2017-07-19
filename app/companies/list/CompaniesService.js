module.exports = function($q, $http) {
  'njInject';

  var self = this;

  var companyUrl = 'https://mysterious-citadel-17041.herokuapp.com/api/companies';

  var formatCompany = function(company) {
    var keys = Object.keys(company).length;
    if (keys) {
      for (var i = 0; i < keys.length; i++) {
        if (!company[keys[i]]) {
          delete company[keys[i]];
        }
      }
    }
  };

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
    return $http.post(companyUrl, formatCompany(company)).then(function() {
      return self.getCompanies(companyUrl);
    });
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
