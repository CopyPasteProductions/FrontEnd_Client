import {Page} from 'ionic-angular';
import {BackEndService} from '../../game.data.service';
import {Game} from '../../game.model'
import {Player} from '../../game.model'
import {OnInit} from '@angular/core'
@Page({
  templateUrl: 'build/pages/client-root/client-root.html'
})
export class ClientRootPage implements OnInit {
  constructor(private backendService: BackEndService) {

  }
  //controller fields
  games: Game[];
  //TODO: Handle this error
  errorMessage: string;



  //controller methods
  getGamesFromService() {
    this.backendService.getGames().subscribe(gs => (this.setGames(gs)), error => this.errorMessage = <any>error);
    console.log("GET GAMES FROM SERVICE" + this.games);
    if (this.errorMessage != undefined) {
      console.log("Error Thrown");
      console.log(this.errorMessage);
    }

  }

  private setGames(games: Game[]) {
    console.log("GET GAMES FROM SERVICE" + games);
    this.games = games;
   
  }

 
  //On html load
  ngOnInit()
  { this.getGamesFromService(); }
}
