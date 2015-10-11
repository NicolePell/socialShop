Template.addFriend.events({

  'submit form': function(event){
    event.preventDefault();

    var userId = Meteor.user()._id;
    var username = Meteor.user().username;
    var friend = $('[name=friend]').val();
    var telephone = $('[name=telephone]').val();
    var newFriend = {
      friend: friend,
      telephone: telephone,
      userId: userId,
      username: username
    };

    Meteor.call('createFriend', newFriend);

    $('[name=friend]').val('');
    $('[name=telephone]').val('');
  },

  'click .cancelEdit': function(event){
    event.preventDefault();
    Router.go('/create');
  },

  'click .createPoll': function(event){
    event.preventDefault();
    Router.go('/create');
  }
});

Template.addFriend.helpers({
  showFriends: function(){
    return Friends.find({}, {userId: Meteor.user()._id});
  }
});
