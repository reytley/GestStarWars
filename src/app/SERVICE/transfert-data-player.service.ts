import { Injectable } from '@angular/core';
import { ApiService } from '../API/api.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Player } from '../BO/player';
@Injectable({
  providedIn: 'root'
})
export class TransfertDataPlayerService {
  idUser: number;
  player: Player;

  constructor(private storage: Storage) {

   }
}
