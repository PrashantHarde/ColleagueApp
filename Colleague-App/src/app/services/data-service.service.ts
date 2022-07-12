import { Injectable } from '@angular/core';
import { Colleague } from '../model/colleague.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  /**@author PRASHANT HARDE @description COLLEAGUE DATA ARRAY  **/
  public ColleagueData: Colleague[];
  constructor() { 
    this.ColleagueData = [];
  }

  /**@author PRASHANT HARDE @description GET ALL COLLEAGUES FROM LOCALSTORAGE **/
  getAllColleague(){
    let colleagueList = JSON.parse(localStorage.getItem('Colleagues') || '[]');
    return colleagueList;
  }

  /**@author PRASHANT HARDE @description INSERT NEW COLLEAGUE TO LOCALSTORAGE **/
  addColleague(data:any){ 
    let colleagues = JSON.parse(localStorage.getItem('Colleagues') || '[]');
    colleagues.push(data);
    localStorage.setItem('Colleagues', JSON.stringify(colleagues));
    console.log(colleagues);
  }

  /**@author PRASHANT HARDE @description DELETE COLLEAGUE FROM LOCALSTORAGE **/
  deleteColleague(id:any){
    debugger;
    let colleagues = JSON.parse(localStorage.getItem('Colleagues') || '[]');
    colleagues.forEach((element:any, index:number) => {
      if (element.id == id) {
        colleagues.splice(index,1);
      }
    });
    localStorage.setItem('Colleagues', JSON.stringify(colleagues));
    console.log(colleagues);
  }

  /**@author PRASHANT HARDE @description UPDATE COLLEAGUE BASED ON ID IN LOCALSTORAGE **/
  updateColleague(data:any){
    let colleagues = JSON.parse(localStorage.getItem('Colleagues') || '[]');
    colleagues.forEach((element:any, index:number) => {
      if (element.id == data.id) {
        colleagues[index] = data;
      }
    });
    localStorage.setItem('Colleagues', JSON.stringify(colleagues));
    console.log(colleagues);
  }

}
