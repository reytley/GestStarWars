import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransfertDataService } from '../../SERVICE/transfert-data.service';
import { Starship } from '../../BO/starship';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-star-ship',
  templateUrl: './new-star-ship.page.html',
  styleUrls: ['./new-star-ship.page.scss'],
})
export class NewStarShipPage implements OnInit {
  
  profileForm = this.fb.group({
    name: ['',Validators.required],
    model: [''],
    crew: ['']
  });

  constructor(private fb: FormBuilder, private router: Router,private transferDataService : TransfertDataService) {
    
   }
onSubmit(){
  console.log(this.profileForm.value)
  let starshipSave:Starship= new Starship();
  starshipSave.crew = this.profileForm.value.crew;
  starshipSave.name = this.profileForm.value.name;
  starshipSave.model = this.profileForm.value.model;
  this.transferDataService.Starships.push(starshipSave);

  
  this.router.navigate(["/home"]);

}
  ngOnInit() {
  }

}
