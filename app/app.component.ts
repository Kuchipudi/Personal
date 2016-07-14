
import {Component} from 'angular2/core';
import {ViewEncapsulation} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// Component imports

import {AmenModule} from './components/modules/amen.module';


@Component({
    selector: 'joyful',
    directives: [ AmenModule, ROUTER_DIRECTIVES],
    templateUrl: 'app/views/app.html',
    styleUrls: ['app/styles/css/app.css'],
    encapsulation: ViewEncapsulation.None
})

@RouteConfig([
  {path: '/', name: 'AmenModule', component: AmenModule}


  //{path:'/module', name: 'Dev', component:}
])

export class AppComponent {}
