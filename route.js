Router.route('/poll/:_id', {
  template: 'poll',
  data: function(){
    var pollID = this.params._id;
    return Polls.findOne({ _id: pollID });
  }
});

Router.configure({
    layoutTemplate: 'main'
});

Router.route('/', {
    template: 'home'
});

Router.route('/signup', {
    template: 'signup'
});

Router.route('/signin', {
    template: 'signin'
});

Router.route('/addFriend', {
    template: 'addFriend'
});

Router.route('/create', {
    template: 'pollForm'
});
