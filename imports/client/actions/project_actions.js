import { Meteor } from 'meteor/meteor';

export default const createProject = params => {
  return dispatch => {
    Meteor.call('createProject', params, (error) => {
      if (!error) return;

    });
  };
};
