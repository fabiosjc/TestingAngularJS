var taskManagerApp = angular.module("taskManagerApp", ['dndLists']);

taskManagerApp.controller("taskManagerCtrl", function ($rootScope, $scope) {   
    $scope.devices = [
        {"user": "joao","tasks": []},
        {"user": "maria","tasks": []},
        {"user": "josé","tasks": []}
     ];
    
    $scope.tasks = [
        {
            "@type": "br.com.touchtec.estoque.taskplanner.Task",
            "shortDescription" : "PIC (125 COL) : TP-0003 - Z1 (a01e31)",
            "from": "PIC: TP-0003 (125 COL)",
            "to" : "Z1 (a01e31)",
            "description": "Pegar 125 COL de TP-0003 no endereço a01e31 da Zona 1",
            "taskType": "PICKING",   
            "quantity": 125,
            "taskAssignment": {
                "assignee": null,
                "id": "26550200",
                "taskPriority": "DEFAULT_PRIORITY"
            },                          
            "requestItem": {},            
            "identifiable": {}
        },
        {
            "@type": "br.com.touchtec.estoque.taskplanner.Task",
            "shortDescription" : "PIC (40 UN): TP-0001 - Z1 (a01e32)", 
            "description": "Pegar 40 UN de TP-0001 no endereço a01e32 da Zona 1",
            "taskType": "PICKING",   
            "quantity": 40,
            "taskAssignment": {
                "assignee": null,
                "id": "26550201",
                "taskPriority": "DEFAULT_PRIORITY"
            },                          
            "requestItem": {},            
            "identifiable": {}
        },
        {
            "@type": "br.com.touchtec.estoque.taskplanner.Task",
            "shortDescription" : "RES (500 UN): TP-0001 - Z1 (a01e32)", 
            "description": "Ressuprir 500 UN de TP-0001 no endereço a01e32 da Zona 1",
            "taskType": "RESUPPLY",   
            "quantity": 500,
            "taskAssignment": {
                "assignee": null,
                "id": "26550202",
                "taskPriority": "HIGH_PRIORITY"
            },                          
            "requestItem": {},            
            "identifiable": {}
        }                 
    ];
    
    
    // Model to JSON for demo purpose
    $scope.$watch('tasks', function(model) {
        $scope.tasksAsJson = angular.toJson(model, true);
    }, true);
    
    $scope.$watch('devices', function(model) {
        $scope.devicesAsJson = angular.toJson(model, true);
    }, true);    
});
