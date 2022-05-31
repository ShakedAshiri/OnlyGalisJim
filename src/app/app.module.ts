import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LevelPageComponent } from './level-page/level-page.component';
import { EndingComponent } from './ending/ending.component';
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';
import { Level3Component } from './level3/level3.component';
import { Level4Component } from './level4/level4.component';
import { Level5Component } from './level5/level5.component';
import { Level6Component } from './level6/level6.component';
import { PopupComponent } from './popup/popup.component';
import { Level7Component } from './level7/level7.component';
import { Level8Component } from './level8/level8.component';
import { Level9Component } from './level9/level9.component';
import { Level10Component } from './level10/level10.component';
import { Level11Component } from './level11/level11.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LevelPageComponent,
    EndingComponent,
    Level1Component,
    Level2Component,
    Level3Component,
    Level4Component,
    Level5Component,
    Level6Component,
    PopupComponent,
    Level7Component,
    Level8Component,
    Level9Component,
    Level10Component,
    Level11Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
