Template.pollForm.events({

  'submit form': function(event) {

    event.preventDefault();

    var newPoll = {
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
