import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MultiplayerserviceService} from "../multiplayerservice.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public userName;
  public arrayUsernames;
  public connected;
  public roomName;

  constructor(public router: Router, public multiplayer: MultiplayerserviceService) { }

  ngOnInit() {
    console.log('entra en menu')
    this.multiplayer.successfullLogin().subscribe((data) => {
      this.userName = data.user;
      this.arrayUsernames = data.array;
      this.connected = this.multiplayer.isLogged;
    });
  }

  goToLobby(){
    this.router.navigateByUrl('/lobby');
    this.multiplayer.roomName = this.roomName;
  }
  goToChat(){
    this.router.navigateByUrl('/chat');
  }

  goToMain(){
    this.router.navigateByUrl('');
  }

}
