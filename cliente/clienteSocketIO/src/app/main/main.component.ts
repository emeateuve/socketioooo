import { Component, OnInit } from '@angular/core';
import {MultiplayerserviceService} from "../multiplayerservice.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public userName;
  constructor(public multiplayer: MultiplayerserviceService, public router: Router) { }

  ngOnInit() {
    this.multiplayer.successfullLogin().subscribe((data) => {
      this.router.navigateByUrl('/menu');
    });
  }

  userLogin(){
    this.multiplayer.userLogin(this.userName);
  }


}
