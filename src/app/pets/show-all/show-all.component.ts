import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css'],
})
export class ShowAllComponent implements OnInit {
  constructor(private service:SharedService) { }

  PetsList:any=[];
  
  ngOnInit(): void {
    this.refreshPetsList();
  }

  refreshPetsList(){
    this.service.GetAll().subscribe(d=>{
      this.PetsList=d;
      console.log(this.PetsList);
    });
  }
}
