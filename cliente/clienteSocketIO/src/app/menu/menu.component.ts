import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MultiplayerserviceService} from "../multiplayerservice.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public userName;
  public arrayUsernames;
  public connected;

  constructor(public router: Router, public multiplayer: MultiplayerserviceService) { }

  ngOnInit() {
    /*ARREGLAR VERIFICACION*/
    console.log('entra en menu')
    this.multiplayer.successfullLogin().subscribe((data) => {
      console.log('entra en el subscribe de menu')
      console.log(data)
      this.userName = data.user;
      this.arrayUsernames = data.array;
      // console.log(this.userName);
      // console.log(this.arrayUsernames)

    });
    // alert('Welcome ' + this.arrayUsernames);
  }

  goToLobby(){
    this.router.navigateByUrl('/lobby');
  }
  goToChat(){
    this.router.navigateByUrl('/chat');
  }

}
