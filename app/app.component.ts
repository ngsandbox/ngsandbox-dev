import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {TeamService} from './subapps/tour-of-heroes/services/team.service'
import {TeamFirebaseProvider} from "./subapps/tour-of-heroes/providers/team-firebase-provider.service";
import {TeamProvider} from "./subapps/tour-of-heroes/providers/team-provider.service";
import {SbRouterService} from "./nav/sb-router.service";

@Component({
    selector: 'my-app',
    template: `
    <my-nav></my-nav>
	<div id="mainContainer" #mainContainer class="container">
      <router-outlet></router-outlet>
	</div>
  `,
    providers: [{provide: TeamProvider, useClass: TeamFirebaseProvider}, TeamService, SbRouterService]
})
export class AppComponent implements OnInit {
    title: string = '';
    @ViewChild("mainContainer") mainContainer: ElementRef;

    ngOnInit(): void {
        console.log(this.mainContainer);
        var hammertime = new Hammer(this.mainContainer.nativeElement);
        hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
        hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
        // hammertime.on('pan', function (ev) {
        //     console.log(ev);
        // });
    }
}