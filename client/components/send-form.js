Template.sendForm.events({

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

Template.sendForm.events({

  "change input[type='file']": function(event) {

    event.preventDefault();

    var files = event.target.files;
    var file = files[0];
    console.log(file);

    // Photos.insert({url: file.toDataURL(), created: Date.now()});
  }

});
