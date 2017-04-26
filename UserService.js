'use strict';

angular.module('users').service('userService', UserService);

function UserService($q) {
  var users = [
    {
      name: 'John Waldo',
      avatar: '',
      content: 'Yuccie meh coloring book twee. Blog squid trust fund, copper mug kitsch cold-pressed readymade YOLO health goth biodiesel gluten-free lomo austin live-edge pabst.'
    },
     {
      name: 'Chris Dunn',
      avatar: '',
      content: 'Semiotics trust fund cardigan chillwave la croix, keffiyeh kinfolk umami pop-up church-key iPhone +1.'
    },
     {
      name: 'Chelsea Snow',
      avatar: '',
      content: 'Cronut fingerstache activated charcoal lumbersexual, bitters typewriter hell of organic health goth humblebrag kogi snackwave.'
    },
     {
      name: 'Peter Robbins',
      avatar: '',
      content: 'Coloring book pitchfork mixtape, pinterest snackwave pork belly scenester swag glossier edison bulb.'
    }
  ];

  return {
    loadAllUsers: function () {
      return $q.when(users);
    }
  };
}