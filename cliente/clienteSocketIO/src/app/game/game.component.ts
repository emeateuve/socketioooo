import { Component, OnInit } from '@angular/core';
import {MultiplayerserviceService} from "../multiplayerservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(public multiplayer: MultiplayerserviceService, public router: Router) { }

  public inputGame;
  public roomConversation = [];

  ngOnInit() {
    this.multiplayer.receiveRoomMessage().subscribe((data) => {     });
    // this.multiplayer.allReady().subscribe((data) => {     });
    this.multiplayer.newGameMessage().subscribe((data) => {
      this.roomConversation.push(data);
    });

    this.multiplayer.arrayEditado().subscribe((data) => {    });
    this.multiplayer.hasBlueEyes().subscribe((data) => {    });

    this.multiplayer.deletedCharacter().subscribe((data) => {    });

    this.multiplayer.correctAnswer().subscribe((data) => {    });
    this.multiplayer.wrongAnswer().subscribe((data) => {
      this.roomConversation.push(data.message);
    });
    this.multiplayer.gameEnd().subscribe((data) => {    });
    this.multiplayer.gameEndTied().subscribe((data) => {    });

  }


  gameMessage(){
    this.multiplayer.sendGameMessage(this.inputGame);
    this.inputGame = '';
  }

  deleteCharacter(card){
    this.multiplayer.deleteCharacter(card, this.multiplayer.charactersArray);
  }

  quitarHombres(){
    this.multiplayer.quitarHombres(this.multiplayer.charactersArray);
  }

  hasBlueEyes(){
    this.multiplayer.blueEyes(this.multiplayer.charactersArray);
  }

  thisIsTheOne(card){
    this.multiplayer.thisIsTheOne(card);
  }

}
