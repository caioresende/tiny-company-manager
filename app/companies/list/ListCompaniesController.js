module.exports = function(CompaniesService) {

  'ngInject';

  var self = this;

  this.company = {
    _id: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    owners: ''
  };

  this.data = CompaniesService;

  this.companies = [];

  var getCompanies = function() {
    self.loading = 'get';
    CompaniesService.getCompanies().then(function(response) {
      self.loading = 'false';
      self.companies = response;
    });
  };

  this.companyCopy = angular.copy(this.company);

  this.addCompany = function() {
    self.loading = 'create';
    CompaniesService.createCompany(self.company).then(function(response) {
      self.clearForm(false);
      self.loading = false;
    });
  };

  this.clearForm = function(edit) {
    self.company = angular.copy(self.companyCopy);
  };

  this.deleteCompany = function(id) {
    self.loading = 'delete';
    CompaniesService.deleteCompany(id).then(function(response) {
      self.loading = false;
    });
  };

  this.editCompany = function(company) {
    if (company) {
      self.editMode = company._id;
      self.company = angular.copy(company);
      self.layoutAlign = 'center start';
    } else {
      self.editMode = undefined;
      self.company = angular.copy(self.companyCopy);
      self.layoutAlign = '';
    }
  };

  this.updateCompany = function() {
    self.loading = 'update';
    CompaniesService.updateCompany(self.company).then(function(response) {
      self.loading = false;
      self.editMode = undefined;
      self.company = angular.copy(self.companyCopy);
      self.layoutAlign = '';
    });
  };

  getCompanies();

};
