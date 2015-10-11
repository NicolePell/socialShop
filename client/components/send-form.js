Template.sendForm.events({

  'click .takePhoto': function(event, template) {
      event.preventDefault();
      var cameraOptions = {
          width: 800,
          height: 600
      };
      MeteorCamera.getPicture(cameraOptions, function (error, data) {
         if (!error) {
             template.$('.photo').attr('src', data);
             Session.set('photo', data);
             Meteor.call('newPoll', data, (Meteor.user()._id));
         }
      });
  },

  'click .sendToUser': function(event){
    event.preventDefault();
    $('input:checkbox[name=friend]:checked').each(function() {
        var userId = Meteor.user()._id;
        var pollId = Polls.findOne({ userId: userId})._id;
        Router.go("/poll/" + pollId);
    });
  }
});

Template.sendForm.helpers({
  showFriends: function(){
    return Friends.find({}, {userId: Meteor.user()._id});
  }
});
