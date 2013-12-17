'use strict';

describe('Controller: TownhallCtrl', function () {

  // load the controller's module
  beforeEach(module('onlineSoapboxApp'));

  var TownhallCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TownhallCtrl = $controller('TownhallCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
