(function () {
  angular.module('users').controller('UserController', UserController)

  function UserController(userService, $mdSidenav, $mdBottomSheet, $log) {

    var self = this;

    self.selected = null;
    self.users = [];
    self.selectUser = selectUser;
    self.toggleList = toggleUsersList;
    self.share = share;

    userService.loadAllUsers().then(function (users) {
      self.users = [].concat(users);
      self.selected = users[0];
    });

    function toggleUsersList() {
      $mdSidenav('left').toggle();
    }

    function selectUser(user) {
      self.selected = angular.isNumber(user) ? $scope.users[user] : user;
    }

    function share(selectedUser) {

      $mdBottomSheet.show({
        controller: UserSheetController,
        controllerAs: 'vm',
        templateUrl: './bottomsheet.html',
        parent: angular.element(document.querySelector('#content'))
      });

      function UserSheetController() {
        this.user = selectedUser;
        this.items = [
          { name: 'Phone', icon: 'phone', icon_url: 'svg/phone.svg' },
          { name: 'Twitter', icon: 'twitter', icon_url: 'svg/twitter.svg' },
          { name: 'Google+', icon: 'google_plus', icon_url: 'svg/google_plus.svg' },
          { name: 'Hangout', icon: 'hangouts', icon_url: 'svg/hangouts.svg' }
        ];
        this.performAction = function (action) {
          $mdBottomSheet.hide();
        };
      }

    }
  }
})();