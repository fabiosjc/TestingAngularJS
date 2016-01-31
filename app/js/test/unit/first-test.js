describe('1ª Suite de Teste -', function() {
   
    describe('Testando o Controller', function() {
       
        it('deveria inicializar o atributo title', function() {            
            module('testingAngularApp');            
            var scope = {};
            var ctrl;            
            
            inject(function($controller) {
                ctrl = $controller('testingAngularCtrl', {$scope : scope})               
                expect(scope.title).toBeDefined();
                expect(scope.title).toBe("Testing AngularJS Application");
            });
        });
        
    });
});