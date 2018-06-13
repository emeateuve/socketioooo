import { Component, OnInit, OnDestroy } from '@angular/core';
import {MultiplayerserviceService} from "../multiplayerservice.service";
import * as socketIo from 'socket.io-client';
import {Router} from "@angular/router";
import {ISubscription} from "rxjs/Subscription";

@Component({
  selector: 'app-global-chat',
  templateUrl: './global-chat.component.html',
  styleUrls: ['./global-chat.component.css']
})
export class GlobalChatComponent implements OnInit, OnDestroy {

  constructor(public multiplayer: MultiplayerserviceService, public router: Router) { }

  public socket;
  public message:string;

  public allClientMessages = [];

  public connectedChatUser:ISubscription;
  public usuarioDesconectadoChat:ISubscription;
  public newMessage:ISubscription;

  ngOnInit() {

    this.multiplayer.backToLogin().subscribe(() => {  });
    this.multiplayer.conexionChat();

    this.connectedChatUser = this.multiplayer.connectedChatUser().subscribe((connectedMessage) => {
      this.allClientMessages.push(connectedMessage.message);
    });

    this.usuarioDesconectadoChat = this.multiplayer.usuarioDesconectadoChat().subscribe((disconnectMessage) => {
      this.allClientMessages.push(disconnectMessage.message);
    });

    this.newMessage = this.multiplayer.newMessage().subscribe((newMessage) => {
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

  ngOnDestroy(){
    this.connectedChatUser.unsubscribe();
    this.usuarioDesconectadoChat.unsubscribe();
    this.newMessage.unsubscribe();
  }
}
