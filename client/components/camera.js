Template.takePhoto.events({
    "submit .new-photo": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var photo = event.target.files[0];

    //   var reader = new FileReader();
    //
    //   reader.onload = function(event){
    //   var buffer = new Uint8Array(reader.result) // convert to binary
    //   Meteor.call('saveFile', buffer);
    // }
    //
    // reader.readAsArrayBuffer(file);

      // Insert a task into the collection
    Photos = new Mongo.Collection("photos");
      Photos.insert({url: canvas.toDataURL(), created: Date.now()});
    }
  });
