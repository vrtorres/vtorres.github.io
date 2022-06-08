import {app} from "./../initialize.js";
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "src/pages/molido.html"
  })
  .when("/molido", {
    templateUrl : "src/pages/molido.html"
  })
  .when("/templado", {
    templateUrl : "src/pages/templado.html"
  })
  .when("/lotes", {
    templateUrl : "src/pages/lotes.html"
  })
  .when("/seda", {
    templateUrl : "src/pages/seda.html"
  })
});