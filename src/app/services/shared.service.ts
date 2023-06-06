import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PetsComponent } from '../pets/pets.component';
import { ShowAllComponent } from '../pets/show-all/show-all.component';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  constructor(private http:HttpClient) {}

  GetAll():Observable<any[]>{
    return this.http.get<any>('/api/GetAllPets')
  }

  GetById(petId: string):Observable<[]>{
    return this.http.get<any>('/api/GetPetById/'+petId)
  }

  getCareSteps(petId: string):Observable<any[]>{
    return this.http.get<any>('/api/GetPetCareSteps/'+petId)
  }
  
  updatePet(petId: string, petName: string, petAge: string): void {
    const myUrlWithParams  = new URL('https://localhost:7076/api?');
    myUrlWithParams.searchParams.append('petId', petId);
    myUrlWithParams.searchParams.append('petName', petName);
    myUrlWithParams.searchParams.append('petAge', petAge);
    this.http.put(myUrlWithParams.href, null)
  }
}