import { Meteor } from 'meteor/meteor';

import './publications';
import './methods';



Meteor.startup(() => {

  /*
    TODO - Add test account user that can login, add projects and remove their own projects.
          Test users can't change their password or projects they don't own.
          Test user projects aren't shown on the homepage.

    Accounts.createUser({
        email: 'test@test.com',
        password: 'password'
    });
  */

  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
        email: 'lovegrovegeorge@gmail.com',
        password: 'password'
    });
  }
});
