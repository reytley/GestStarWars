import { Component, OnInit } from '@angular/core';
import { STARSHIPSDALService } from '../DAL/starships-dal.service';
import { PeoplesDalService } from '../DAL/peoples-dal.service';
@Component({
  selector: 'app-gestion-bdd',
  templateUrl: './gestion-bdd.page.html',
  styleUrls: ['./gestion-bdd.page.scss'],
})
export class GestionBddPage implements OnInit {

  constructor(private STARSHIPSDALService: STARSHIPSDALService,private PeoplesDalService:PeoplesDalService) { }
  reset(){
    
    this.STARSHIPSDALService.resetStarship();
  } 
  setStarships(){
    this.STARSHIPSDALService.setStarships();
  }
  resetPeople(){

  }
  setPeoples(){
    this.PeoplesDalService.setPeoples();
  }
  resetStarship(){

  }
  ngOnInit() {
  }

}
