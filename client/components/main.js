Template.main.helpers({

  username: function () {
    return Session.get('username');
  }
});


Template.main.events({

  'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();

    Router.go('/');
  }
});
