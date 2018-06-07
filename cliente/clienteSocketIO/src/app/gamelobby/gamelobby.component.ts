import {Component, OnInit, OnDestroy} from '@angular/core';
import {MultiplayerserviceService} from "../multiplayerservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-gamelobby',
  templateUrl: './gamelobby.component.html',
  styleUrls: ['./gamelobby.component.css']
})
export class GamelobbyComponent implements OnInit, OnDestroy {

  constructor(public multiplayer: MultiplayerserviceService, public router: Router) {
  }

  public arrayUsuarios;

  public userIsReady = false;

  public usuarioEstaListo;
  public roomIsFull;
  public allReady;

  ngOnInit() {
    this.usuarioEstaListo = this.multiplayer.usuarioEstaListo().subscribe((data) => {
      this.arrayUsuarios = data;
    });

    this.multiplayer.connectedLobby();

    this.roomIsFull = this.multiplayer.roomIsFull().subscribe((data) => {
      alert(data + ' room is full! Try with another one.')
      this.router.navigateByUrl('/menu');
    });

    this.allReady = this.multiplayer.allReady().subscribe((data) => {
      this.router.navigateByUrl('/game');
    });

  }

  imReady() {
    this.multiplayer.usuarioReady();
  }

  ngOnDestroy() {
    this.usuarioEstaListo.unsubscribe();
    this.roomIsFull.unsubscribe();
    this.allReady.unsubscribe();
  }

}
