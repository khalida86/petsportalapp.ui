import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute , Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowCareInfoComponent } from '../show-care-info/show-care-info.component';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { EditDetailsComponent } from '../edit-details/edit-details.component';
import { PetsModel } from 'src/app/model/pets-model';

@Component({
  selector: 'app-show-individual',
  templateUrl: './show-individual.component.html',
  styleUrls: ['./show-individual.component.css'],
})

export class ShowIndividualComponent implements OnInit {
  id: any;

  constructor(private service: SharedService, private router: Router, private route: ActivatedRoute, public dialog : MatDialog) { }

  PetDetails: any=[];
  PetCare: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe( {
      next: (params) => {
        const id = params.get('petId');
        console.log(params);
        if (id) {
          this.service.GetById(id).subscribe({
            next: (response) => {
              this.PetDetails = response;
            }
          });
          this.service.getCareSteps(id).subscribe(d=>{
            this.PetCare=d;
          });
        }
      }
    })
  }

  openDialog(id: string): void {
    let config: MatDialogConfig<string> = new MatDialogConfig();
    config.disableClose = false;
    let d: any = {val : id};
    config.data = id;
    this.dialog.open(ShowCareInfoComponent, config);
  }

  editDialog(response: []): void{
    let config: MatDialogConfig<[]> = new MatDialogConfig();
    //config.disableClose = false;
    let d: any = {val : response};
    config.data = response;
    this.dialog.open(EditDetailsComponent, config);
  }

  // updatedPetInfo(PetDetails: PetsModel[]) {
  //   this.PetDetails = PetDetails;
  // }
}
