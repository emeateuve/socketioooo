import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from "rxjs/Observable";


@Injectable()
export class MultiplayerserviceService{
  private url = 'http://localhost:3000';
  private socket;

  public user;
  public connectedUsers = [];

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
        console.log('USER: ', this.user, 'ARRAY: ',this.connectedUsers);
      });
    });
  };


  /*                                 CHAT                                       */
  public conexionChat(){
    this.socket.emit('conexion-chat');
  }

  public sendMessage(message){
    console.log('desde el servicio:', message);
    this.socket.emit('message', message);
  }

  public usuarioDesconectadoChat = () => {
    return Observable.create((observer) => {
      this.socket.on('desconexion', (data) => {
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
