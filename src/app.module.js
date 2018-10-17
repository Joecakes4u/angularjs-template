// Import statements for webpack to create bundle.js
import './app.module';
import './app.config';
import './app.controller';
import './features/home/home.controller';
import './features/binding-example/binding-example.controller';
import './features/login/login.controller';

// define Module "app"
// A Module DEFINES Angularjs applications
var app = angular.module('app', ["ngRoute"]);