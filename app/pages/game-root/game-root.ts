import {Page} from 'ionic-angular';
import {BackEndService} from '../../game.data.service';
import {Game} from '../../game.model'
import {Player} from '../../game.model'
import {OnInit} from '@angular/core'
@Page({
  templateUrl: 'build/pages/client-root/client-root.html'
})
export class GameRootPage implements OnInit {
  constructor(private backendService: BackEndService) {

  }
 //TODO: add players
  

  ngOnInit()
  { }
}
