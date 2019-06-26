import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransfertDataService } from '../transfert-data.service';
import { Starship } from '../starship';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-star-ship',
  templateUrl: './add-star-ship.page.html',
  styleUrls: ['./add-star-ship.page.scss'],
})
export class AddStarShipPage implements OnInit {

  profileForm= this.fb.group({
      name: ['',Validators.required]
  });

  constructor(private fb:FormBuilder, private router: Router,private transferDataService : TransfertDataService) {
   

   }
   //VALIDATION FORMULAIRE
   onSubmit(){

   }
  ngOnInit() {
  }

}
