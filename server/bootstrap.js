// run this when the meteor app is started
Meteor.startup(function() {
  // if there are no polls available create sample data
  if (Polls.find().count() === 0) {

    // create sample polls
    var samplePolls = [
      {
        createdAt: new Date(),
        choices: [
          { text: 'Of course!', votes: 0 },
          { text: 'Eh', votes: 0 },
          { text: 'No. Ugly.', votes: 0 }
        ]
      }
    ];


    // loop over each sample poll and insert into database
    _.each(samplePolls, function(poll) {
      Polls.insert(poll);
    });

  }

});

Meteor.methods({
  createFriend: function (friend) {
    console.log('friend created');
    Friends.insert(friend);
  },

  // base64Image: function (photo) {
  //   Images.insert( { dataURI: photo} );
  // },

  newPoll: function (photo, user) {
    var newPoll = {
      image: photo,
      userId: user,
      createdAt: new Date(),
      choices: [
        {  text: "Hells yeah.", votes: 0 },
        {  text: "Fugly.", votes: 0 },
        {  text: "MEH.", votes: 0 }
      ]
    };

    // create the new poll
    Polls.insert(newPoll);
  }
});
