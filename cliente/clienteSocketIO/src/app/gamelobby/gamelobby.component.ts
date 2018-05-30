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

  ngOnInit() {
    this.multiplayer.usuarioEstaListo().subscribe((data) => {
      console.log('Uno se ha al juego', data)
      this.arrayUsuarios = data;
    });
    this.multiplayer.arrayEditado().subscribe((data) => {
      console.log('array devuelto de usuarios nuevos', data)
      this.arrayUsuarios = data;
    });
  }

  imReady(){
    this.multiplayer.usuarioReady(this.multiplayer.user);
  }

  quitarHombres(){
    this.multiplayer.quitarHombres(this.arrayUsuarios);
  }

}
