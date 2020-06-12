import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  typesOfLinks: string[] = ['link1', 'link2', 'link3'];
  user: any;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(value => {
      this.user = value.data;
    });
  }

}
