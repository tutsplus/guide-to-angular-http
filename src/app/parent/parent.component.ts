import { Component } from '@angular/core';
import { ParentHttpService } from './parent.service';

@Component({
  selector: 'parent',
  template: `
    <div>
      <h3>Parent Page</h3>
      <div>Get All Users <button (click)="getAllUsers()">Get All Users</button></div>
      <div>Get users in page 2 <button (click)="getUserInPageTwo()">Get Items on Page 2</button></div>
      <div>Get users in page 2 with custom Header <button (click)="getUsersOnAPageWithHeaders()">Get users in page 2 with custom Header</button></div>
      <div>Invalid API Call  <button (click)="callError()">Error</button> </div>
      <div>Users:</div>
      <div>{{users}}</div>
    </div>
  `,
})
export class ParentComponent {

  users : any;

  constructor(private httpService: ParentHttpService) { }

  ngOnInit() {}

  getAllUsers = () => {
      this.httpService.getUsers().subscribe(
        (response) => { this.users = JSON.stringify(response); },
        (error) => { console.log(error); });
      }
  getUserInPageTwo = () => {
    this.httpService.getUsersOnAPage(2).subscribe(
      (response) => { this.users = JSON.stringify(response); },
      (error) => { console.log(error); });
    }
  getUsersOnAPageWithHeaders = () => {
    this.httpService.getUsersOnAPageWithHeaders(2).subscribe(
      (response) => { this.users = JSON.stringify(response); },
      (error) => { console.log(error); });
  }
  callError = () => {
    this.httpService.invalidAPICall().subscribe(
      (response) => { this.users = JSON.stringify(response); },
      (error) => { console.log(error); });
  }
    
}