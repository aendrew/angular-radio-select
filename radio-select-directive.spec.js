'use strict';
describe('Directive: radioSelect', function () {
// load the directive's module
  beforeEach(module('times.radioSelect'));
  var element,
    scope;
  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));
  it('should make hidden element visible', inject(function ($compile) {
    expect(element.text()).toBe('this is the radioSelect directive');
  }));
});
