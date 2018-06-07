import {Component, OnInit, OnDestroy} from '@angular/core';
import {MultiplayerserviceService} from "../multiplayerservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

  constructor(public multiplayer: MultiplayerserviceService, public router: Router) {
  }

  public inputGame;
  public roomConversation = [];

  public newGameMessage;
  public deletedMen;
  public deletedWomen;
  public deletedBlueEyes;
  public deletedBrownEyes;
  public deletedCharacter;
  public correctAnswer;
  public wrongAnswer;
  public gameEnd;
  public gameEndTied;
  public disconnectedGame;
  public gameFinished;

  ngOnInit() {
    this.newGameMessage = this.multiplayer.newGameMessage().subscribe((data) => {
      this.roomConversation.push(data);
    });

    this.deletedMen = this.multiplayer.deletedMen().subscribe((data) => {});
    this.deletedWomen = this.multiplayer.deletedWomen().subscribe((data) => {});
    this.deletedBlueEyes = this.multiplayer.deletedBlueEyes().subscribe((data) => {});
    this.deletedBrownEyes = this.multiplayer.deletedBrownEyes().subscribe((data) => {});
    this.deletedCharacter = this.multiplayer.deletedCharacter().subscribe((data) => {});

    this.correctAnswer = this.multiplayer.correctAnswer().subscribe((data) => {});
    this.wrongAnswer = this.multiplayer.wrongAnswer().subscribe((data) => {
      this.roomConversation.push(data.message);
    });

    this.gameEnd = this.multiplayer.gameEnd().subscribe((data) => {});
    this.gameEndTied = this.multiplayer.gameEndTied().subscribe((data) => {});
    this.disconnectedGame = this.multiplayer.disconnectedGame().subscribe((data) => {
      this.roomConversation.push(data.message);
    });

  }


  gameMessage() {
    this.multiplayer.sendGameMessage(this.inputGame);
    this.inputGame = '';
  }

  deleteCharacter(card) {
    this.multiplayer.deleteCharacter(card, this.multiplayer.charactersArray);
  }

  deleteMen() {
    this.multiplayer.deleteMen(this.multiplayer.charactersArray);
  }

  deleteWomen() {
    this.multiplayer.deleteWomen(this.multiplayer.charactersArray);
  }

  deleteBlueEyes() {
    this.multiplayer.deleteBlueEyes(this.multiplayer.charactersArray);
  }

  deleteBrownEyes() {
    this.multiplayer.deleteBrownEyes(this.multiplayer.charactersArray);
  }

  thisIsTheOne(card) {
    this.multiplayer.thisIsTheOne(card);
  }

  backToMenu(){
    this.multiplayer.backToMenu();
  }

  ngOnDestroy() {
    this.newGameMessage.unsubscribe();

    this.deletedMen.unsubscribe();
    this.deletedWomen.unsubscribe();
    this.deletedBlueEyes.unsubscribe();
    this.deletedBrownEyes.unsubscribe();
    this.deletedCharacter.unsubscribe();

    this.correctAnswer.unsubscribe();
    this.wrongAnswer.unsubscribe();

    this.gameEnd.unsubscribe();
    this.gameEndTied.unsubscribe();

    this.disconnectedGame.unsubscribe();
  }

}
