import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";

@Injectable()
export class MultiplayerserviceService{
  private url = 'http://localhost:3000';
  private socket;

  public user;

  public roomName;

  public connectedUsers = [];
  public chatUsers = [];

  public isLogged = false;



  public usersInGame = [];
  public usersReady = [];
  public charactersArray = [];
  public randomCard;
  public userRole;

  constructor(public router: Router) {
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
  };

  public newMessage = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (data) => {
        observer.next(data);
      })
    })
  };


  /*                              GAME LOBBY                                     */

  public usuarioReady(mensaje){
    this.socket.emit('usuarioReady', mensaje, this.roomName);
  }

  public usuarioEstaListo = () => {
    return Observable.create((observer) => {
      this.socket.on('userReady', (data) => {
        observer.next(data);
        this.usersReady = data.readyUsers;
        if(this.usersReady.length >= 2){
          this.socket.emit('startTheGameNow', this.usersReady);
        }
      })
    })
  };

  public receiveRoomMessage = () => {
    return Observable.create((observer) => {
      this.socket.on('room-message', (data) => {
        observer.next(data);
        console.log(data)
      })
    })
  };

  public allReady = () => {
    return Observable.create((observer) => {
      this.socket.on('game-start', (data) => {
        observer.next(data);
        this.randomCard = data.randomCard;
        this.charactersArray = data.characters;
        this.usersInGame = data.usersReady;
        console.log('usuarios en juego: ',this.usersInGame);
      })
    })
  };


  /*                                 GAME                                        */


  public sendGameMessage(message){
    this.socket.emit('game-message', message);
  }

  public newGameMessage = () => {
    return Observable.create((observer) => {
      this.socket.on('new-game-message', (data) => {
        observer.next(data);
        console.log('Mensaje: ', data.message, ' Usuario: ', data.user);
      })
    })
  };

  public deleteCharacter(card, array){
    this.socket.emit('delete-character', card, array)
  }
  public deletedCharacter = () => {
    return Observable.create((observer) => {
      this.socket.on('deleted-character', (data) => {
        observer.next(data);
        this.charactersArray = data;
      })
    })
  };

  public quitarHombres(array){
    this.socket.emit('quitar-hombres', array);
  }

  public blueEyes(array){
    this.socket.emit('blue-eyes', array);
  }

  public hasBlueEyes = () => {
    return Observable.create((observer) => {
      this.socket.on('has-blue-eyes', (data) => {
        observer.next(data);
        this.charactersArray = data;
      })
    })
  };

  public arrayEditado = () => {
    return Observable.create((observer) => {
      this.socket.on('hombres-quitados', (data) => {
        observer.next(data);
        this.charactersArray = data;
      })
    })
  };

  public thisIsTheOne(card) {
    this.socket.emit('this-is-the-one', card, this.randomCard);
  }
  public correctAnswer = () => {
      return Observable.create((observer) => {
        this.socket.on('correct-answer', (data) => {
          observer.next(data);
          console.log(data);
        })
      })
    };

  public wrongAnswer = () => {
      return Observable.create((observer) => {
        this.socket.on('wrong-answer', (data) => {
          observer.next(data);
          console.log('MAL ', data);
        })
      })
    };

}
