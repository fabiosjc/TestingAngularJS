'use strict';

var Scope = require('../src/scope');

describe("Teste: Scope", function() {

  it("pode ser construído e usado como um objeto", function() {
    var scope = new Scope();
    scope.aProperty = 1;

    expect(scope.aProperty).toBe(1);
  });

  describe("digest", function() {
    var scope;

    beforeEach(function() {
      scope = new Scope();
    });

    it("chama a listener function do watch no primeiro $digest", function () {
      var watchFn = function() { return 'wat'; };
      var listenerFn = jasmine.createSpy();

      scope.$watch(watchFn, listenerFn);
      scope.$digest();
      expect(listenerFn).toHaveBeenCalled();
    });

    it("chama a watch function com o scope como parametro", function () {
      var watchFn = jasmine.createSpy(); // spy apenas para verificar se a watchFn foi chamada
      var listenerFn = function () {};

      scope.$watch(watchFn, listenerFn);
      scope.$digest();

      expect(watchFn).toHaveBeenCalledWith(scope);
    });

    it("chama a listener function quando o valor observado muda", function () {
      scope.someValue = 'a';
      scope.counter = 0;

      scope.$watch(
        function (scope) { return scope.someValue; },
        function (newValue, oldValue, scope) { scope.counter++; }
      );

      expect(scope.counter).toBe(0);

      scope.$digest();
      expect(scope.counter).toBe(1);

      scope.$digest();
      expect(scope.counter).toBe(1);

      scope.someValue = 'b';
      expect(scope.counter).toBe(1);

      scope.$digest();
      expect(scope.counter).toBe(2);
    });

    it("calls listener when watch value is first undefined", function () {
      scope.counter = 0;

      scope.$watch(
        function (scope) {return scope.someValue;},
        function (newValue, oldValue, scope) { scope.counter++}
      );

      scope.$digest();
      expect(scope.counter).toBe(1);

    });

    it("calls listener with new value as old value the first time", function() {
      scope.someValue = 123;
      var oldValueGiven;

      scope.$watch(
        function(scope) { return scope.someValue; },
        function(newValue, oldValue, scope) { oldValueGiven = oldValue; }
      );

      scope.$digest();
      expect(oldValueGiven).toBe(123);
    });

  });

});
