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

  ngOnInit() {
    this.multiplayer.conexionChat();
    this.multiplayer.usuarioDesconectadoChat().subscribe((data) => {
      console.log('Uno se ha desconectado desde el cliente', data)
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
