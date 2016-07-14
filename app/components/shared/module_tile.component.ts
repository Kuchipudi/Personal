
import {Component, Input} from 'angular2/core';
import {ViewEncapsulation} from 'angular2/core';
export interface mTile {
  fa: string,
  title: string,
  link: string,
}

@Component({
    selector: 'module-tile',
    templateUrl: 'app/views/shared/module_tile.html',
    styleUrls: ['app/styles/css/module_tile.css']
})

export class ModuleTile {
  // Usage: blank = {'fa': "text", 'title': "text", 'link': "text"}
  @Input() tile;
}
