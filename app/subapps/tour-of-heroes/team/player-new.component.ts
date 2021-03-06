import {Component, Input, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {TeamService} from "../services/team.service";
import {IPlayer, Genders} from "../model/IPlayer";
import {SbRouterService} from "../../../nav/sb-router.service";

@Component({
    moduleId: module.id,
    selector: 'player-new',
    templateUrl: 'player-edit.component.html',
    providers: [TeamService]
})
export class PlayerNewComponent implements OnInit {

    genders: String[] = Genders
    disabled: boolean = false;

    protected get getTeamService(): TeamService {
        return this.teamService;
    }

    protected get getNavService(): SbRouterService {
        return this.navService;
    }

    constructor(private navService: SbRouterService,
                private teamService: TeamService) {
    }

    @Input()
    player: IPlayer;

    ngOnInit() {
        this.player = {name: "", _id: null};
    }

    onSubmit(form: NgForm) {
        this.disabled = true;
        this.teamService.savePlayer(this.player).then((r: any) => this.navService.gotoTeam())
            .catch((err: any) => this.disabled = false);
    }

    removePlayer() {
    }
}
