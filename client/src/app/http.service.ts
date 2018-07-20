import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPets(){
    return this._http.get("/api/pets")
  }

  getPetById(petId){
    return this._http.get("/api/pets/"+petId);
  }

  addPet(newPet){
    return this._http.post("/api/pets", newPet)
  }

  editPet(id, petToEdit){
    return this._http.patch("api/pets/"+id, petToEdit)
  }

  deletePet(petIdToDelete){
    return this._http.delete("/api/pets/"+petIdToDelete);
  }

  likePet(petId, pet){
    console.log("in the likePet in the service")
    return this._http.patch("/api/likes/"+petId, pet);
  }


}
