Template.body.helpers({
  
  polls: function() {
    return Polls.find();
  }
  
});

// adds index to each item
UI.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
    });
  }
});
