import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-displaypet',
  templateUrl: './displaypet.component.html',
  styleUrls: ['./displaypet.component.css']
})
export class DisplaypetComponent implements OnInit {
  petId: string;
  pet: any;
  isDisabled: boolean;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.isDisabled = false;
    this.petId="";
    this.pet = {
      name: "",
      type: "",
      description: "",
      skill1: "",
      skill2: "",
      skill3: "",
      likes: []
    };
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.petId = params['id'];
    });
    this.getPet()
  }

  getPet(){
    let observable = this._httpService.getPetById(this.petId)
    observable.subscribe(data => {
      // console.log("product is:", data)
      this.pet = data;
      console.log(this.pet)
    })
  }

  deletePet(){
    let observable = this._httpService.deletePet(this.petId);
    observable.subscribe(data =>{
      console.log("delete data", data)
    })
    this._router.navigate(['/pets']);
  }

  likePet(){
    console.log("in the like function")
    console.log("petid is ", this.petId)
    console.log("pet objecdt is", this.pet)
    let observable = this._httpService.likePet(this.petId, this.pet)
    observable.subscribe(data => {
      // console.log("product is:", data)
      this.pet = data;
      this.isDisabled = true;
      console.log(this.pet)
      this.pet = {
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: "",
        likes: []
      };
      this.getPet()
    })
  }

}
