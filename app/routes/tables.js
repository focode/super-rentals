import Ember from 'ember';

let rentals = [{
  firstName: 'arun',
  lastName: 'arun',
  company: 'jci',
  address: 'pune',
  country: 'India',
  state: 'MAHA',
  email: 'arunesh.dubey@jci.com',
  username: 'cdubeyar',
  avatar: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
  bio: 'nothing_but_bio'
}, {
  firstName: 'arun',
  lastName: 'arun',
  company: 'jci',
  address: 'pune',
  country: 'India',
  state: 'MAHA',
  email: 'arunesh.dubey@jci.com',
  username: 'cdubeyar',
  avatar: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
  bio: 'nothing_but_bio'
}, {
  firstName: 'arun',
  lastName: 'arun',
  company: 'jci',
  address: 'pune',
  country: 'India',
  state: 'MAHA',
  email: 'arunesh.dubey@jci.com',
  username: 'cdubeyar',
  avatar: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
  bio: 'nothing_but_bio'
},
{
 firstName: 'arun',
 lastName: 'arun',
 company: 'jci',
 address: 'pune',
 country: 'India',
 state: 'MAHA',
 email: 'arunesh.dubey@jci.com',
 username: 'cdubeyar',
 avatar: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
 bio: 'nothing_but_bio'
},
{
 firstName: 'arun',
 lastName: 'arun',
 company: 'jci',
 address: 'pune',
 country: 'India',
 state: 'MAHA',
 email: 'arunesh.dubey@jci.com',
 username: 'cdubeyar',
 avatar: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
 bio: 'nothing_but_bio'
},
{
 firstName: 'arun',
 lastName: 'arun',
 company: 'jci',
 address: 'pune',
 country: 'India',
 state: 'MAHA',
 email: 'arunesh.dubey@jci.com',
 username: 'cdubeyar',
 avatar: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
 bio: 'nothing_but_bio'
},
{
 firstName: 'arun',
 lastName: 'arun',
 company: 'jci',
 address: 'pune',
 country: 'India',
 state: 'MAHA',
 email: 'arunesh.dubey@jci.com',
 username: 'cdubeyar',
 avatar: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
 bio: 'nothing_but_bio'
}];


export default Ember.Route.extend({
  model() {
    return rentals;
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.set('page', 1);
    }
  }
});
