Template.signup.events({

  'submit form': function(event){

    event.preventDefault();
    var username = $('[name=username]').val();
    var email = $('[name=email]').val();
    var telephone = $('[name=telephone]').val();
    var password = $('[name=password]').val();

    Accounts.createUser({
      username: username,
      email: email,
      telephone: telephone,
      password: password
    });
    console.log('user saved');

    Router.go('/create');
  }
});
