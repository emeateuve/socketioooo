import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MultiplayerserviceService} from "./multiplayerservice.service";
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { GlobalChatComponent } from './global-chat/global-chat.component';

import {Routes, Router, RouterModule} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GamelobbyComponent } from './gamelobby/gamelobby.component';
import { GameComponent } from './game/game.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'chat', component: GlobalChatComponent},
  {path: 'lobby', component: GamelobbyComponent},
  {path: 'game', component: GameComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    GlobalChatComponent,
    HeaderComponent,
    FooterComponent,
    GamelobbyComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  providers: [MultiplayerserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
