import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})
export class AddpetComponent implements OnInit {
  newPet: any;
  status: String[];

  constructor(private _httpservice: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newPet = {
      name: "",
      type: "",
      description: "",
      skill1: "",
      skill2: "",
      skill3: "",
      likes: 0
    };
    this.status = [];
  }

  createPet(){
    this.status=[];
    let observable = this._httpservice.addPet(this.newPet);
    observable.subscribe(data => {
      console.log("error data is ", data)
      if ("errors" in data){
        for (let key in data["errors"]){
          console.log("data is",data["errors"][key])
          console.log("error keys are:", key)
          this.status.push(data["errors"][key]['message'])
        }
      }
      else {
        this.status = [];
        console.log("data from create pet:", data)
        this._router.navigate(['/pets']);
      }
    })
  }


}
