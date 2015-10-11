// attach events to our poll template
Template.poll.events({

  // event to handle clicking a choice
  'click .vote': function(event) {

    // prevent the default behavior
    event.preventDefault();

    // get the parent (poll) id
    var pollID = $(event.currentTarget).parent('.poll').data('id');
    var voteID = $(event.currentTarget).data('id');

    Meteor.call('incrementVotes', pollID, voteID);

    image: {
      return Polls.findOne({ _id: pollID }).image;
    }

  }

});
