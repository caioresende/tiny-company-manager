module.exports = function(CompaniesService, $mdToast) {

  'ngInject';

  var self = this;

  this.company = {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    owners: []
  };

  this.crudCardFlex = '30';

  this.data = CompaniesService;
  this.companies = [];

  var getCompanies = function() {
    self.loading = 'get';
    CompaniesService.getCompanies().then(function(response) {
      self.loading = false;
      self.companies = response;
    });
  };

  this.companyCopy = angular.copy(this.company);

  this.addCompany = function() {
    self.loading = 'create';
    CompaniesService.createCompany(self.company).then(function(response) {
      self.clearForm();
      $mdToast.showSimple('Company created');
      self.loading = false;
    }, function() {
      $mdToast.showSimple('Error! Try again.');
      self.loading = false;
    });
  };

  this.clearForm = function() {
    self.company = angular.copy(self.companyCopy);
    self.companyForm.$setPristine(true);
    self.companyForm.$setUntouched(true);
  };

  this.deleteCompany = function(id) {
    self.loading = 'delete' + id;
    CompaniesService.deleteCompany(id).then(function(response) {
      $mdToast.showSimple('Company deleted');
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
      $mdToast.showSimple('Company updated');
      self.loading = false;
      self.editMode = undefined;
      self.clearForm();
      self.layoutAlign = '';
    });
  };

  getCompanies();

};
