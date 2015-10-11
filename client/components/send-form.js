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
             Meteor.call('newPoll', data, Meteor.userId());
         }
      });
  },

  'click .sendToUser': function(event){
    event.preventDefault();
    $('input:checkbox[name=friend]:checked').each(function() {
        console.log('Checkbox: ' + $(this).val());
        Router.go("/poll/");
    });
  }
});

Template.sendForm.helpers({
  showFriends: function(){
    return Friends.find({}, {userId: Meteor.user()._id});
  }
});
