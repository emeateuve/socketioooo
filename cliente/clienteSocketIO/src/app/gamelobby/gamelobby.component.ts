import { Component, OnInit } from '@angular/core';
import {MultiplayerserviceService} from "../multiplayerservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-gamelobby',
  templateUrl: './gamelobby.component.html',
  styleUrls: ['./gamelobby.component.css']
})
export class GamelobbyComponent implements OnInit {

  constructor(public multiplayer: MultiplayerserviceService, public router: Router) { }

  public arrayUsuarios;

  public userIsReady = false;

  ngOnInit() {
    this.multiplayer.usuarioEstaListo().subscribe((data) => {
      this.arrayUsuarios = data;
    });

    this.multiplayer.connectedLobby();


    this.multiplayer.allReady().subscribe((data) => {
      this.router.navigateByUrl('/game');
    });

  }

  imReady(){
    this.multiplayer.usuarioReady();
  }



}
