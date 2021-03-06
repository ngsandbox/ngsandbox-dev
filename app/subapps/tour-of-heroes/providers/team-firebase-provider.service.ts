import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {TeamProvider} from "./team-provider.service";
import {IPlayer} from "../model/IPlayer";

declare var firebase: any;

@Injectable()
export class TeamFirebaseProvider extends TeamProvider {

    config: any = {
        apiKey: "AIzaSyAXkSTZ5OUd9xUBvpu9Au232rsFYEd2y_E",
        authDomain: "devproj-dbd21.firebaseapp.com",
        databaseURL: "https://devproj-dbd21.firebaseio.com",
        storageBucket: "devproj-dbd21.appspot.com",
        messagingSenderId: "470528161968"
    };

    playersRef: any = null;


    get firebaseDb(): any {
        if (!firebase.apps || !firebase.apps.length) {
            console.log("Firebase initialization", firebase.apps);
            firebase.initializeApp(this.config);
        }

        return firebase.database().ref();
    }

    get childPlayersRef(): any {
        if (!this.playersRef) {
            this.playersRef = this.firebaseDb.child('players');
        }
        return this.playersRef;
    }

    constructor() {
        super();
    }

    getPlayers(): Promise<IPlayer[]> {
        return this.childPlayersRef.once('value').then((snap: any) => {
            let res: IPlayer[] = [];
            let vals: any = snap.val();
            if (vals) {
                Object.keys(vals).forEach((key: any) => {
                    res.push(this.parseFBPlayer(key, vals[key]));
                });
            }

            return res;
        }).catch((err: any) => this.handleError(err));
    }

    savePlayer(player: IPlayer): Promise<Response> {
        let playerRef: Promise<any>;
        if (!player._id) {
            playerRef = this.childPlayersRef.push().set(player);
        } else {
            var updates = {};
            updates[player._id] = player;
            playerRef = this.childPlayersRef.update(updates);
        }

        return playerRef.catch((err: Error) => this.handleError(err));
    }

    removePlayer(id: any): Promise<any> {
        var ref = this.childPlayersRef;
        return new Promise<any>((resolve, reject) => {
            ref.child(id).once("value", function (snapshot: any) {
                var updates = {};
                updates[snapshot.key] = null;
                ref.update(updates).then((r: any) => {
                    resolve(r);
                }).catch((e: any) => reject(e));
            }).catch((e: any) => reject(e));
        });
    }

    getPlayer(id: any): Promise<IPlayer> {
        return this.childPlayersRef.child(id).once('value').then((snap: any) => {
            let res: IPlayer = snap.val();
            res._id = id;
            return res;
        }).catch((err: any) => this.handleError(err));
    }

    private handleError(error: Error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private parseFBPlayer(key: any, val: any): IPlayer {
        let player: IPlayer = val;
        player._id = key;
        player.birthday = val.birthday || <any>Date.now();
        return player;
    }

    ngOnDestroy() {
    }
}