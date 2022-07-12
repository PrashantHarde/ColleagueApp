import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.css']
})
export class ColleagueListComponent implements OnInit {

  /**@author PRASHANT HARDE @description COLLEAGUE DATA ARRAY  **/
  public ColleagueData: any = [];
  constructor(
    private apiService: DataServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getColleagueData();
  }

  /**@author PRASHANT HARDE @description GET ALL COLLEAGUE METHOD **/
  getColleagueData() {
    this.ColleagueData = this.apiService.getAllColleague();
  }

  /**@author PRASHANT HARDE @description UPDATE COLLEAGUE METHOD **/
  edit(data: any) {
    this.router.navigate(['/colleague-create', data]);
  }

  /**@author PRASHANT HARDE @description DELETE COLLEAGUE METHOD **/
  delete(data:any){
    this.apiService.deleteColleague(data.id);
    this.getColleagueData();
  }

}
