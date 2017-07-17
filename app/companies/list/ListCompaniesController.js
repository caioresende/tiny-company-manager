module.exports = function() {

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

  this.companyCopy = angular.copy(this.company);

  this.clearForm = function(edit) {
    if (edit) {
      self.selectedCompany = angular.copy(self.companyCopy);
    } else {
      self.company = angular.copy(self.companyCopy);
    }
  };

  this.editCompany = function(company) {
    if (company) {
      self.editMode = company._id;
      self.company = angular.copy(company);
      self.layoutAlign = 'center start';
    } else {
      self.editMode = undefined;
      self.focusedCompany = undefined;
      self.layoutAlign = '';
    }
  };

  this.companies = [
    {
      _id: '2',
      name: 'test',
      email: 'test',
      phone: 'test',
      address: 'test',
      city: 'test',
      country: 'test',
      owners: 'test'
    },
    {
      _id: '8',
      name: 'test',
      email: 'test',
      phone: 'test',
      address: 'test',
      city: 'test',
      country: 'test',
      owners: 'test'
    },
    {
      _id: '3',
      name: 'test',
      email: 'test',
      phone: 'test',
      address: 'test',
      city: 'test',
      country: 'test',
      owners: 'test'
    },
    {
      _id: '4',
      name: 'test',
      email: 'test',
      phone: 'test',
      address: 'test',
      city: 'test',
      country: 'test',
      owners: 'test'
    },
    {
      _id: '5',
      name: 'test',
      email: 'test',
      phone: 'test',
      address: 'test',
      city: 'test',
      country: 'test',
      owners: 'test'
    },
    {
      _id: '6',
      name: 'test',
      email: 'test',
      phone: 'test',
      address: 'test',
      city: 'test',
      country: 'test',
      owners: 'test'
    }
  ];

};
