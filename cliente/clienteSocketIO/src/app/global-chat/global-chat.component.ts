import { Component, OnInit } from '@angular/core';
import {MultiplayerserviceService} from "../multiplayerservice.service";
import * as socketIo from 'socket.io-client';
import {Router} from "@angular/router";

@Component({
  selector: 'app-global-chat',
  templateUrl: './global-chat.component.html',
  styleUrls: ['./global-chat.component.css']
})
export class GlobalChatComponent implements OnInit {

  constructor(public multiplayer: MultiplayerserviceService, public router: Router) { }

  public socket;
  public message:string;

  public allClientMessages = [];

  ngOnInit() {
    this.multiplayer.conexionChat();

    this.multiplayer.connectedChatUser().subscribe((connectedMessage) => {
      this.allClientMessages.push(connectedMessage.message);
    });

    this.multiplayer.usuarioDesconectadoChat().subscribe((disconnectMessage) => {
      this.allClientMessages.push(disconnectMessage.message);
    });

    this.multiplayer.newMessage().subscribe((newMessage) => {
      this.allClientMessages.push(newMessage);
    });
  }

  sendMessage(){
    this.multiplayer.sendMessage(this.message);
    this.message = '';
  }

  backToMenu(){
    this.router.navigateByUrl('/menu');
  }

}
