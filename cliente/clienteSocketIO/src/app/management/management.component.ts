import { Component, OnInit } from '@angular/core';
import {MultiplayerserviceService} from "../multiplayerservice.service";
import {Router} from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  constructor(public multiplayer: MultiplayerserviceService, public route: Router) { }

  public characterExampleHair = ['blonde', 'dark', 'red', 'bold'];
  public characterExampleEyes = ['blue', 'brown'];
  public characterExampleSkin = ['black', 'white'];
  public characterExampleGender = ['male', 'female'];
  public characterExampleBeard = [true, false];

  public inputHair;
  public inputName;
  public inputEyes;
  public inputSkin;
  public inputGender;
  public inputBeard;

  public userCharacters = [];

  ngOnInit() {
    this.multiplayer.loadMyCharacters();
    this.multiplayer.loadedMyCharacters().subscribe((data) => {
      this.userCharacters = data;
    });
  }

  changeHair(input){
    this.inputHair = input;
  }
  changeEyes(input){
    this.inputEyes = input;
  }
  changeSkin(input){
    this.inputSkin = input;
  }
  changeGender(input){
    this.inputGender = input;
  }
  changeBeard(input){
    this.inputBeard = input;
  }

  createCharacter(){
    this.multiplayer.newCharacter(this.inputName,this.inputHair, this.inputEyes, this.inputSkin, this.inputGender, this.inputBeard);
  }
}
