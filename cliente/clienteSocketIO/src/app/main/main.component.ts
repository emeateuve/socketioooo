import { Component, OnInit } from '@angular/core';
import {MultiplayerserviceService} from "../multiplayerservice.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {ISubscription} from "rxjs/Subscription";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public userName;

  public alreadyExistsMessage;

  constructor(public multiplayer: MultiplayerserviceService, public router: Router) { }

  ngOnInit() {
    this.multiplayer.alreadyExists().subscribe((data) => {
      this.alreadyExistsMessage = data;
    });
  }

  userLogin(){
    this.multiplayer.userLogin(this.userName);
    this.router.navigateByUrl('/menu');
  }


}
