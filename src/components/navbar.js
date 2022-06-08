import {app} from "./../initialize.js";
app.component("navbar",{
  templateUrl:"src/templates/navbar.htm",
  controller: function ctNavbar($scope){
    let self = this;
    $scope.menu = [
      {
        href:"#!molido",
        name:"Molido",
        cls:"active"
      },
      {
        href:"#!templado",
        name:"Templado",
        cls:""
      },
      {
        href:"#!lotes",
        name:"Lotes",
        cls:""
      },
      {
        href:"#!seda",
        name:"Seda",
        cls:""
      }
    ];
    self.getSelected = function(menu){
      for(let i in $scope.menu){
        (i==menu) ? $scope.menu[i].cls="active" : $scope.menu[i].cls="";
      }
    }
  }
})