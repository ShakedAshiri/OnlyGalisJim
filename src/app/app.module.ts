import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LevelPageComponent } from './Levels/level-page/level-page.component';
import { EndingComponent } from './ending/ending.component';
import { Level1Component } from './levels/level1/level1.component';
import { Level2Component } from './levels/level2/level2.component';
import { Level3Component } from './levels/level3/level3.component';
import { Level4Component } from './levels/level4/level4.component';
import { Level5Component } from './levels/level5/level5.component';
import { Level6Component } from './levels/level6/level6.component';
//import { PopupComponent } from './popup/popup.component';
import { Level7Component } from './levels/level7/level7.component';
import { Level8Component } from './levels/level8/level8.component';
import { Level9Component } from './levels/level9/level9.component';
import { Level10Component } from './levels/level10/level10.component';
//import { Level11Component } from './level11/level11.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { PopupComponent } from './popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

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
    Level7Component,
    Level8Component,
    Level9Component,
    Level10Component,
    PopupComponent,
   // Level11Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NgIf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
