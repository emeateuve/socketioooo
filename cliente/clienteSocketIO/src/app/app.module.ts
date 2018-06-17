import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MultiplayerserviceService} from "./multiplayerservice.service";
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { GlobalChatComponent } from './global-chat/global-chat.component';
import {HttpClientModule} from "@angular/common/http";

import {Routes, Router, RouterModule} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GamelobbyComponent } from './gamelobby/gamelobby.component';
import { GameComponent } from './game/game.component';
import { RegisterComponent } from './register/register.component';
import { ManagementComponent } from './management/management.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'chat', component: GlobalChatComponent},
  {path: 'lobby', component: GamelobbyComponent},
  {path: 'game', component: GameComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'management', component: ManagementComponent}
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
    GameComponent,
    RegisterComponent,
    ManagementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  providers: [MultiplayerserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
