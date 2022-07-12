import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuid } from 'uuid';

import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-colleague-create',
  templateUrl: './colleague-create.component.html',
  styleUrls: ['./colleague-create.component.css']
})
export class ColleagueCreateComponent implements OnInit {

  /**@author PRASHANT HARDE @description REQUIRED ARRAYS AND VARIABLES **/
  public colleagueUpdateData: any = []
  public isUpdateOperation: boolean = false;

  /**@author PRASHANT HARDE @description POSITIONS ARRAY FOR SELECTING POSITION **/
  positionArray: any = [
    { name: "Angular Developer", value: "Angular Developer" },
    { name: "Java Developer", value: "Java Developer" },
    { name: "Javascript Developer", value: "Javascript Developer" },
    { name: "React Developer", value: "React Developer" },
    { name: "Python Developer", value: "Python Developer" },
  ];

  /**@author PRASHANT HARDE @description COLLEAGUE FORM **/
  colleagueForm: FormGroup = new FormGroup({}); // Empty Form Initalized.

  constructor(
    private fb: FormBuilder,
    private apiservice: DataServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    /**@author PRASHANT HARDE @description GET COLLEGAUE DATA FOR UPDATING RECORD USING ACTIVATED ROUTE **/
    this.activatedRoute.params.subscribe((data: any) => {
      console.log(data);
      this.colleagueUpdateData = data;
      if (data.id) {
        this.isUpdateOperation = true;
      }
    });
  }

  ngOnInit(): void {
    this.createForm();

  }

  /**@author PRASHANT HARDE @description GEANRATE NEW COLLEAGUE FORM **/
  createForm() {
    this.colleagueForm = this.fb.group({
      "id": [''],
      "name": ['', Validators.required,],
      "position": ['', Validators.required,],
      "salary": ['', Validators.required,],
      "email": ['', [Validators.required, Validators.email]],
      "doj": ['', Validators.required,],
    })
    if (this.isUpdateOperation == true) {
      this.colleagueForm.patchValue(this.colleagueUpdateData);
    }
  }

  /**@author PRASHANT HARDE @description SUBMIT FORM METHOD FOR ADDING COLLEAGUE FORM IN LOCALSTORAGE **/
  submitForm() {
    if (this.colleagueForm.valid) {
      let newColleague = this.colleagueForm.value;
      newColleague['id'] = uuid();
      this.apiservice.addColleague(newColleague);
      console.log(this.colleagueForm.value);
    }
    this.router.navigate(['/colleague-list']); //ONCE COLLEAGUE ADDED NAVIGATE TO COLLEAGUE-LIST
  }


  updateColleagueForm() {
    if (this.colleagueForm.valid) {
      let newColleague = this.colleagueForm.value;
      newColleague['id'] = this.colleagueUpdateData.id;
      this.apiservice.updateColleague(newColleague);
      console.log(this.colleagueForm.value);
    }
    this.router.navigate(['/colleague-list']); //ONCE UPDATED NAVIGATE TO COLLEAGUE-LIST
  }

}
