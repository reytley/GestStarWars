import { Component, OnInit } from '@angular/core';
import { TransfertDataPlayerService } from '../../SERVICE/transfert-data-player.service';
import { Player } from '../../BO/player';


@Component({
  selector: 'app-player-profil',
  templateUrl: './player-profil.page.html',
  styleUrls: ['./player-profil.page.scss'],
})
export class PlayerProfilPage implements OnInit {
  player: Player;
  constructor(private TransfertDataPlayerService: TransfertDataPlayerService) {
   this.player = this.TransfertDataPlayerService.player ;
   }

  ngOnInit() {
  }

}
