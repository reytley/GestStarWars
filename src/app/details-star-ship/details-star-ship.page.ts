import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransfertDataService } from '../SERVICE/transfert-data.service';
import { Starship } from '../BO/starship';
@Component({
  selector: 'app-details-star-ship',
  templateUrl: './details-star-ship.page.html',
  styleUrls: ['./details-star-ship.page.scss'],
})
export class DetailsStarShipPage implements OnInit {

  StarShip: Starship;
  constructor(private router: Router,private transferDataService : TransfertDataService) { 
    this.StarShip = this.transferDataService.starShipDetail;
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
