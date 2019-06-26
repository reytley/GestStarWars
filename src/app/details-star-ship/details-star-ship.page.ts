import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransfertDataService } from '../transfert-data.service';
import { Starship } from '../starship';
@Component({
  selector: 'app-details-star-ship',
  templateUrl: './details-star-ship.page.html',
  styleUrls: ['./details-star-ship.page.scss'],
})
export class DetailsStarShipPage implements OnInit {

  StarShip: Starship;
  constructor(private router: Router,private transferDataService : TransfertDataService) { 
    this.StarShip = transferDataService.starShipDetail;
    console.log(this.StarShip);

  }
  ReturnHome(){
    this.router.navigate(["/home"]);
  }
  Delete(){

  }
  ngOnInit() {
  }

}
