module.exports = function() {

  'ngInject';

  var self = this;

  this.company = {
    _id: '1',
    name: 'test',
    email: 'test',
    phone: 'test',
    address: 'test',
    city: 'test',
    country: 'test',
    owners: 'test'
  };

  this.editCompany = function(id) {
    self.editMode = id;
    self.layoutAlign = 'center start';
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
