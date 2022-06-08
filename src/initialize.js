import "./libraries/angular.min.js";
import "./libraries/angular-route.min.js";

let angularModule = angular.module("portfolio",["ngRoute"]);
export var app = angularModule;