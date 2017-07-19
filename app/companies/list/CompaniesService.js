module.exports = function($q, $http) {
  'njInject';

  var self = this;

  var companyUrl = 'https://mysterious-citadel-17041.herokuapp.com/api/companies';

  var formatCompany = function(obj) {
    var company = obj;
    var keys = Object.keys(company);

    if (keys) {
      for (var i = 0; i < keys.length; i++) {
        if (!company[keys[i]]) {
          delete company[keys[i]];
        }
      }
    }
    console.log(company);
    return company;
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
    var url = companyUrl + '/' + id;
    return $http.delete(companyUrl).then(function() {
      return self.getCompanies(companyUrl);
    });
  };

  this.getCompanies = function() {
    return $http.get(companyUrl).then(function(response) {
      return formatCompanies(response.data);
    });
  };

  this.updateCompany = function(company) {
    var url = companyUrl + '/' + angular.copy(company._id);
    return $http.put(companyUrl, formatCompany(company)).then(function() {
      return self.getCompanies(companyUrl);
    });
  };
};
