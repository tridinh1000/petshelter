import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editpet',
  templateUrl: './editpet.component.html',
  styleUrls: ['./editpet.component.css']
})
export class EditpetComponent implements OnInit {
  pet: any;
  status: string[];
  petId: string;
  state: Boolean;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.state = false;
    this.petId = "";
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.petId = params['id'];
    });
    this.status = [];
    this.getPet();

  }

  getPet(){
    let observable = this._httpService.getPetById(this.petId)
    observable.subscribe(data => {
      // console.log("product is:", data)
      this.pet = data;
      console.log("data of pet is",this.pet)
      this.state=true;
    })
  }

  editPet(){
    this.status = [];
    console.log("in the edit product function")
    let observable = this._httpService.editPet(this.petId, this.pet)
    observable.subscribe(data =>{
      console.log("error: ", data)
      if ("errors" in data){
        for (let key in data["errors"]){
          console.log("data is",data["errors"][key])
          console.log("error keys are:", key)
          this.status.push(data["errors"][key]['message'])
          console.log('status array is:', this.status)
        }
      }
      else{
        this.status = [];
        console.log("pet edit data ", data)
        this._router.navigate(['/pets/'+this.petId]);
      }
    })
  }


}
