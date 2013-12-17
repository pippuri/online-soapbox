'use strict';

describe('Controller: ExclusiveCtrl', function () {

  // load the controller's module
  beforeEach(module('onlineSoapboxApp'));

  var ExclusiveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExclusiveCtrl = $controller('ExclusiveCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
