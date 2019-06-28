import { Injectable } from '@angular/core';
import { Player } from '../BO/player';
import * as firebase from 'firebase/app';
import { TransfertDataPlayerService } from '../SERVICE/transfert-data-player.service';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  pl: Player = new Player();

  constructor(private TransfertDataPlayerService:TransfertDataPlayerService) { }

  
  setPlayer(player: Player){
    let newPlayer = firebase.database().ref('Players/'+player.idUser)
    newPlayer.set({
      Player : player
    });
    console.log("PLAYER SERVICE : player save");
  }

  async getPlayer(idPlayer: number, pl: Player) {
    return new Promise(resolve => { resolve(
      firebase.database().ref('Players/'+idPlayer).on('value',resp => {
        pl = resp.val().Player;
        this.pl = pl;
        console.log("player updated : " + JSON.stringify(pl));
      })
    )});
  } 
}
