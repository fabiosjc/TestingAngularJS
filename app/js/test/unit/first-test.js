describe('1ª Suite de Teste -', function() {
    beforeEach (
        module('testingAngularApp')
    );
   
    describe('Testando o Controller', function() {        
        var scope, ctrl;           
        
        beforeEach (
            inject(function($controller, $rootScope) {
                scope = $rootScope.$new();
                ctrl = $controller('testingAngularCtrl', {$scope : scope})      
            })      
        );
        
        //TODO 
        afterEach(function(){
            
        });          
        
        it('deveria inicializar o atributo title', function() {            
                expect(scope.title).toBeDefined();
                expect(scope.title).toBe("Testing AngularJS Application");            
        });
        
    });
});