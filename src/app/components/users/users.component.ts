import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users} from '../../models/users';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersData: any;

  constructor(
    public apiService: UsersService
  ) {
    this.usersData = [];
  }

  ngOnInit(): void {
    this.getAllUsers();

  }
  getAllUsers() {
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.usersData = response;
    })
  }

}
