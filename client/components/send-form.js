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

  "change .imageUpload": function(event, template) {

    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function(err, fileObject) {
        if (err) {
          //handle error
        } else {
          // handle success
          var imagesURL = {
            "profile.image": "/cfs/files/images/" + fileObject._id
          };
        }
      })
    })

  }

});
