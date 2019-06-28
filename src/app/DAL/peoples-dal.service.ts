import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Starship } from '../BO/starship';
import { People } from '../BO/people';
import * as firebase from 'firebase/app';
import { ApiService } from '../API/api.service';
@Injectable({
  providedIn: 'root'
})
export class PeoplesDalService {

  constructor(private apiService: ApiService,private storage: Storage) { }

  resetPeoples(){
    
  }
  setPeoples(){
    let Peoples: Array<People> = new Array<People>();
        this.apiService.getPeoples().subscribe(
          data =>{
            let result: any = data;
         console.log(data)
         result.results.forEach(people => {
          let peopleTemp: People = new People();
          peopleTemp.name       = people.name;
          peopleTemp.height     = people.height;
          peopleTemp.mass       = people.mass;
          peopleTemp.hair_color = people.hair_color;
          peopleTemp.skin_color = people.skin_color;
          peopleTemp.eye_color  = people.eye_color;
          peopleTemp.birth_year = people.birth_year;
          peopleTemp.gender     = people.gender;
          Peoples.push(peopleTemp);
         });
         console.log("setPeoples API Peoples");
         console.log(Peoples);
         
         let newData = firebase.database().ref('/Peoples')
         newData.set({
          Peoples: Peoples
         });
        }
      );
      }
}
