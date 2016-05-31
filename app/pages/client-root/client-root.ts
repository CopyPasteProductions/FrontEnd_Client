import {Page} from 'ionic-angular';
import {BackEndService} from '../../game.data.service';
import {Game} from '../../game.model'
import {OnInit} from '@angular/core'
@Page({
  templateUrl: 'build/pages/client-root/client-root.html'
})
export class ClientRootPage implements OnInit{
  constructor(private backendService: BackEndService) {

  }
  games: Game[];
  errorMessage: string;

  getGamesFromService() {
    this.backendService.getGames().subscribe(games => this.games = games,  error =>  this.errorMessage = <any>error);
    console.log(this.games)
    if(this.errorMessage != undefined){
      console.log("Error Thrown")
      console.log(this.errorMessage)
    }
    
  }

  ngOnInit()
  { this.getGamesFromService(); }
}
