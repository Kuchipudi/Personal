import {Component} from 'angular2/core';
import {ModuleTile} from '../shared/module_tile.component';
import {mTile} from '../shared/module_tile.component';

@Component({
    selector: 'amen',
    directives: [ModuleTile],
    templateUrl: 'app/views/modules/amen.html',
    styleUrls: ['app/styles/css/amen.css']
})

export class AmenModule {
  Title="[Listings]";
  head = "What's the highest rated restaurant in this area?";
  city = "[Listing Name]";
  Estb="Establishment"
  loc="[Establishment Address],[location]"
  tiles = TILES;
  lists=LISTS;
  rank = 1;

}

var TILES: mTile[] = [
  {'fa': "cutlery", 'title': "Restaurants", 'link': '#'},
  {'fa': "shopping-basket",  'title': "Grocery Stores", 'link': '#'},
  {'fa': "usd", 'title': "Banks", 'link': '#'}
];

var LISTS: List[] = [
  {'fa': "fa-cutlery", 'Cattype': "Restaurants", 'num': '###'},
  {'fa': "fa-university", 'Cattype': "Grocery Stores", 'num': '###'},
  {'fa': "fa-usd", 'Cattype': "Banks", 'num': '###'},
  {'fa': "fa-server", 'Cattype': "Other Amenities", 'num': '###'},
];

function MyController($scope, $http) {
       $scope.items = []

       $scope.getItems = function() {
        $http({method : 'GET',url : 'http://prod-joyfulhome-api.synapsys.us/location/amenitiesInLocation/KS/Wichita')
           .success(function(data, status) {
               $scope.items = data;
            })
           .error(function(data, status) {
               alert("Error");
           )}
       }
   }
