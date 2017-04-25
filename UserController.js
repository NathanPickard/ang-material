(function() {
  angular.module('users').controller('UserController', UserController)

  function UserController(userService, $mdSidenav, $mdBottom) {

  var self = this;

  self.selected = null;
  self.users = [];
  self.selectUser = selectUser;
  self.toggleUser = toggleUsersList;
  self.share = share;

  userService.loadAllUsers().then(function(users) {
    self.users = [].concat(users);
    self.selected = users[0];
  });

  function toggleUsersList() {
    $mdSidenav('left').toggle().
  }
})