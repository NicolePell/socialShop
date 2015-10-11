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
    name: 'home',
    template: 'home'
});

Router.route('/signup', {
    name: 'signup',
    template: 'signup'
});

Router.route('/signin', {
    name: 'signin',
    template: 'signin'
});

Router.route('/addFriend', {
    name: 'addFriend',
    template: 'addFriend'
});

Router.route('/create', {
    name: 'create',
    template: 'sendForm'
});
