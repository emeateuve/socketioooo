import { Component, OnInit } from '@angular/core';
import {MultiplayerserviceService} from "../multiplayerservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public multiplayer: MultiplayerserviceService, public route: Router) { }

  public inputUsername;
  public inputPassword;
  public inputPassword2;



  ngOnInit() {
    this.multiplayer.successfullLogin().subscribe(() => {
      this.route.navigateByUrl('/menu');
    });
    this.multiplayer.alreadyExists().subscribe(() => {  });
  }

  public registerMe(){
    this.multiplayer.registerMe(this.inputUsername, this.inputPassword)
  }

}
