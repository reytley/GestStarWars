import { Injectable } from '@angular/core';
import { ApiService } from '../API/api.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { STARSHIPSDALService } from '../DAL/starships-dal.service';
@Injectable({
  providedIn: 'root'
})
export class TransfertDataPlayerService {

  constructor(private storage: Storage) { }
}
