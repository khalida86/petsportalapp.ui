import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { PetsModel } from 'src/app/model/pets-model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit{
  @Input() response: any;
  private service: any;
  petId: any
  
  constructor(@Inject(MAT_DIALOG_DATA) response: any, service: SharedService, private ref: MatDialogRef<EditDetailsComponent>) {
    this.service = service;
    this.response = response;

    this.response.petAge = response.petAge;
    this.response.petName = response.petName
    this.response.petId = response.petId;
  }

  ngOnInit(): void {
  }

  savePetChanges(petId: any, petName: any, petAge: any, response: any) {
    this.service.updatePet(petId, petName, petAge,);
    this.ref.close('Closed');
  }
}

  // updatePet() {
  //   const petId = this.pet.petId;
  //   const updatedPet = { ...this.pet  };

  //   this.service.updatePet(petId, updatedPet).subscribe(
  //     response => {
  //       console.log(response);
  //       this.dialogRef.close();
  //     }, error => {
  //       console.error('Failed to update: ', error)
  //     }
  //   );
  // }

  // closeDialog() {
  //   this.dialogRef.close();
  // }
  
  // //private petId: string;
  // private pet: [];
  // private service: any;
  // constructor (@Inject(MAT_DIALOG_DATA)  petId: string, 
  //   service: SharedService) {
  //     this.service = service;
  //     this.pet.petId = petId;
  //     this.pet = pet;
  // }

  // //@Input() pet?: PetsModel;

  // @Output() petUpdated = new EventEmitter<PetsModel[]>();

  // ngOnInit(): void {}

  // updatePet(pet: PetsModel) {
  //   this.service.updatePet(pet).subscribe((pets: PetsModel[]) => this.petUpdated.emit(pets));
  //}

