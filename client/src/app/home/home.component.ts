import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pets: Object[];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getPetsFromService();
  }

  getPetsFromService(){
    this.pets = [];
    let observable = this._httpService.getPets();
    observable.subscribe(data =>{
      // console.log("got all pet data:",data)
      for (let a in data){
        this.pets.push(data[a])
      }
    })

  }
}
