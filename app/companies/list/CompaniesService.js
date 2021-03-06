module.exports = function($q, $http) {
  'njInject';

  var self = this;

  var companyUrl = 'https://comp-manager-caio.herokuapp.com/api/companies';

  var formatCompany = function(obj) {
    var company = obj;
    var keys = Object.keys(company);

    if (keys) {
      for (var i = 0; i < keys.length; i++) {
        if (!company[keys[i]] || (keys[i] == 'owner' && !company[keys[i]].length)) {
          delete company[keys[i]];
        }
      }
    }
    return company;
  };

  var formatCompanies = function(response) {
    var obj = {};

    if (response.length) {
      for (var i = 0; i < response.length; i++) {
        obj[response[i]._id] = response[i];
      }
      self.hasCompanies = true;
      self.companies = obj;
    } else {
      self.hasCompanies = false;
    }

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

    return $http.delete(url).then(function() {
      delete self.companies[id];
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

    return $http.put(url, formatCompany(company)).then(function() {
      return self.getCompanies(companyUrl);
    });
  };
};
