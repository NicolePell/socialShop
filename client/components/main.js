Template.main.helpers({

  // username: function () {
  //   return Session.get('username');
  // }
});


Template.main.events({

  'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();

    Router.go('/');
  },

  'click .editAccount': function(){
    // event.preventDefault();
    var current = Meteor.user().username;
    Meteor.call('sendLogMessage', current);

  }
});
