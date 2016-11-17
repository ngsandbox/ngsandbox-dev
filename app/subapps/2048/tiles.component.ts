import {Component} from "@angular/core";
import {GameService} from "./services/game-manager.service";

@Component({
    moduleId: module.id,
    selector: '[myTiles2048]',
    templateUrl: 'tiles.component.html',
})
export class TilesComponent {

    colClass: String = "col-lg-3";

    constructor(public game: GameService) {
    }


    trackByIndex = (index: number): number => index;
}