import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from "rxjs/Observable";


@Injectable()
export class MultiplayerserviceService{
  private url = 'http://localhost:3000';
  private socket;

  public user;

  public connectedUsers = [];
  public chatUsers = [];

  public isLogged = false;

  constructor() {
    this.socket = io(this.url);
  }


  /*                               LOGIN                                  */

  public userLogin(user){
    this.socket.emit('user-login', user);
  }

  public successfullLogin = () => {
    return Observable.create((observer) => {
      this.socket.on('successfull-login',(jsonUser) => {
        this.connectedUsers = jsonUser.array;
        this.user = jsonUser.user;
        observer.next(jsonUser);
        this.isLogged = true;
      });
    });
  };
  public alreadyExists = () => {
    return Observable.create((observer) => {
      this.socket.on('existing-user',(data) => {
        observer.next(data);
      });
    });
  };


  /*                                 CHAT                                       */
  public conexionChat(){
    this.socket.emit('conexion-chat');
  }

  public connectedChatUser = () => {
    return Observable.create((observer) => {
      this.socket.on('connected-chat-user', (data) => {
        observer.next(data);
        this.chatUsers = data.array;
      })
    })
  };

  public usuarioDesconectadoChat = () => {
    return Observable.create((observer) => {
      this.socket.on('disconnectedChat', (data) => {
        observer.next(data);
        this.chatUsers = data.array;
      })
    })
  };

  public sendMessage(message){
    this.socket.emit('message', message);
  }

  public newMessage = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (data) => {
        observer.next(data);
      })
    })
  };

  /*                                 GAME                                        */
  public usuarioReady(mensaje){
    this.socket.emit('usuarioReady', mensaje);
  }
  public usuarioEstaListo = () => {
    return Observable.create((observer) => {
      this.socket.on('userReady', (data) => {
        observer.next(data);
      })
    })
  };

  public quitarHombres(array){
    this.socket.emit('quitar-hombres', array);
  }
  public arrayEditado = () => {
    return Observable.create((observer) => {
      this.socket.on('hombres-quitados', (data) => {
        observer.next(data);
      })
    })
  };
}
