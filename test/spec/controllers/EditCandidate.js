'use strict';

describe('Controller: EditcandidateCtrl', function () {

  // load the controller's module
  beforeEach(module('onlineSoapboxApp'));

  var EditcandidateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditcandidateCtrl = $controller('EditcandidateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
