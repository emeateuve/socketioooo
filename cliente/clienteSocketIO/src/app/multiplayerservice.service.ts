import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";



@Injectable()
export class MultiplayerserviceService {
  private url = 'http://localhost:3000';
  private socket;

  public user;

  public roomName;

  public connectedUsers = [];
  public chatUsers = [];

  public isLogged = false;

  public usersReady = [];
  public usersInRoom = 0;

  public usersInGame = [];
  public charactersArray = [];
  public randomCard;
  public resultGame = 'ingame';
  public winner;

  constructor(public router: Router) {
    this.socket = io(this.url);
    // this.socket = io();
  }




  /*                               REGISTER                                 */

  public registerMe(user, password){
    this.socket.emit('register-user', user, password);
  }


  /*                               LOGIN                                  */

  public backToLogin = () => {
    return Observable.create((observer) => {
      this.socket.on('back-to-login', () => {
        this.router.navigateByUrl('/');
      });
    });
  };

  public userLogin(user, password) {
    this.socket.emit('user-login', user, password);
  }

  public successfullLogin = () => {
    return Observable.create((observer) => {
      this.socket.on('successfull-login', (jsonUser) => {
        this.connectedUsers = jsonUser.array;
        this.user = jsonUser.user;
        observer.next(jsonUser);
        this.isLogged = true;
      });
    });
  };
  public alreadyExists = () => {
    return Observable.create((observer) => {
      this.socket.on('existing-user', (data) => {
        observer.next(data);
        alert(data + ' :(')
      });
    });
  };


  /*                                 CHAT                                       */
  public conexionChat() {
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

  public sendMessage(message) {
    this.socket.emit('message', message);
  };

  public newMessage = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (data) => {
        observer.next(data);
      })
    })
  };

  /*                              MANAGEMENT                                     */
  public newCharacter(name, hair, eyes, skin, gender, beard){
    this.socket.emit('new-character', name, hair, eyes, skin, gender, beard);
  }

  public loadMyCharacters(){
    this.socket.emit('load-user-characters');
  }

  public loadedMyCharacters = () => {
    return Observable.create((observer) => {
      this.socket.on('loaded-user-characters', (data) => {
        observer.next(data);
      });
    });
  };
  public updatedMyCharacters = () => {
    return Observable.create((observer) => {
      this.socket.on('updated-user-characters', (data) => {
        observer.next(data);
      });
    });
  };

  public deleteUserCharacter(charName){
    this.socket.emit('delete-user-character', charName);
  }

  public deletedUserCharacter = () => {
    return Observable.create((observer) => {
      this.socket.on('deleted-user-character', (data) => {
        observer.next(data);
      });
    });
  };

  public changeUserPassword(oldPass, newPass){
    this.socket.emit('change-user-password', oldPass, newPass);
  }


  public changedUserPassword = () => {
    return Observable.create((observer) => {
      this.socket.on('changed-user-password', (data) => {
        observer.next(data);
      });
    });
  };

  public changeUserUsername(username, password, newUsername){
    this.socket.emit('change-user-username', username, password, newUsername);
  }

  public changedUserUsername = () => {
    return Observable.create((observer) => {
      this.socket.on('changed-user-username', (data) => {
        observer.next(data);
        this.user = data.newName;
      });
    });
  };

  public oeprationMessage = () => {
    return Observable.create((observer) => {
      this.socket.on('operation-message', (data) => {
        observer.next(data);
      });
    });
  };


  /*                              GAME LOBBY                                     */
  public roomIsFull = () => {
    return Observable.create((observer) => {
      this.socket.on('lobby-is-full', (data) => {
        observer.next(data);
      });
    });
  };

  public connectedLobby(){
    this.socket.emit('connected-lobby', this.roomName)
  }

  public usuarioReady() {
    this.socket.emit('usuarioReady');
  }

  public usuarioEstaListo = () => {
    return Observable.create((observer) => {
      this.socket.on('userReady', (data) => {
        observer.next(data);
        this.usersInRoom = data.totalRoom;
        this.usersReady = data.readyUsers;
        if (this.usersReady.length >= 2) {
          this.socket.emit('startTheGameNow', this.usersReady);
        }

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
      });
    });
  };


  /*                                 GAME                                        */


  public sendGameMessage(message) {
    this.socket.emit('game-message', message);
  }

  public newGameMessage = () => {
    return Observable.create((observer) => {
      this.socket.on('new-game-message', (data) => {
        observer.next(data);
      })
    })
  };

  public deleteCharacter(card, array) {
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

  public deleteMen(array) {
    this.socket.emit('delete-men', array);
  }

  public deleteWomen(array) {
    this.socket.emit('delete-women', array);
  }

  public deleteBlueEyes(array) {
    this.socket.emit('delete-blue-eyes', array);
  }

  public deleteBrownEyes(array) {
    this.socket.emit('delete-brown-eyes', array);
  }

  public deletedBlueEyes = () => {
    return Observable.create((observer) => {
      this.socket.on('deleted-blue-eyes', (data) => {
        observer.next(data);
        this.charactersArray = data;
      })
    })
  };
  public deletedBrownEyes = () => {
    return Observable.create((observer) => {
      this.socket.on('deleted-brown-eyes', (data) => {
        observer.next(data);
        this.charactersArray = data;
      })
    })
  };

  public deletedMen = () => {
    return Observable.create((observer) => {
      this.socket.on('deleted-men', (data) => {
        observer.next(data);
        this.charactersArray = data;
      })
    })
  };
  public deletedWomen = () => {
    return Observable.create((observer) => {
      this.socket.on('deleted-women', (data) => {
        observer.next(data);
        this.charactersArray = data;
      })
    })
  };

  public thisIsTheOne(card) {
    this.socket.emit('this-is-the-one', card, this.randomCard, this.usersInGame);
  }

  public correctAnswer = () => {
    return Observable.create((observer) => {
      this.socket.on('correct-answer', (data) => {
        observer.next(data);
      })
    })
  };

  public wrongAnswer = () => {
    return Observable.create((observer) => {
      this.socket.on('wrong-answer', (data) => {
        observer.next(data);
        this.usersInGame = data.array;
      })
    })
  };

  public gameEnd = () => {
    return Observable.create((observer) => {
      this.socket.on('game-end', (data) => {
        observer.next(data);
        this.usersInGame = data.array;
        this.resultGame = 'win';
        this.winner = data.winner
      })
    })
  };

  public gameEndTied = () => {
    return Observable.create((observer) => {
      this.socket.on('game-end-tied', (data) => {
        observer.next(data);
        this.usersInGame = data;
        this.winner = null;
        this.resultGame = 'tied';
      })
    })
  };

  public disconnectedGame = () => {
    return Observable.create((observer) => {
      this.socket.on('disconnected-game', (data) => {
        observer.next(data);
        this.usersInRoom = data.usersInRoom;
        this.usersInGame = data.array;
      })
    })
  };

  public backToMenu(){
    this.socket.emit('back-to-menu');
    this.roomName = null;
    this.usersInRoom = 0;
    this.usersReady = [];
    this.usersInGame = [];
    this.randomCard = null;
    this.resultGame = 'ingame';
    this.winner = null;
  }
}

