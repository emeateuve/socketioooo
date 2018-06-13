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

  public inputCurrentPassword;
  public inputPassword1;
  public inputPassword2;

  public inputCurrentUsername;
  public inputPassword3;
  public inputNewUsername;


  ngOnInit() {
    this.multiplayer.loadMyCharacters();
    this.multiplayer.loadedMyCharacters().subscribe((data) => {
      this.userCharacters = data;
    });
    this.multiplayer.updatedMyCharacters().subscribe((data) => {
      this.userCharacters = data;
    });

    this.multiplayer.changedUserPassword().subscribe((data) => {
      console.log(data)
    });
    this.multiplayer.changedUserUsername().subscribe((data) => {
      console.log(data)
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

  changeUserPassword(){
    this.multiplayer.changeUserPassword(this.inputCurrentPassword, this.inputPassword1);
  }

  changeUserUsername(){
    this.multiplayer.changeUserUsername(this.inputCurrentUsername, this.inputPassword3, this.inputNewUsername);
  }
}
