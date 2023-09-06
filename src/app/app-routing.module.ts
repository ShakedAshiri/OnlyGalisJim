import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {EndingComponent} from "./ending/ending.component";
import { LevelPageComponent } from './Levels/level-page/level-page.component';
import { Level2Component } from './levels/level2/level2.component';
import { Level4Component } from './levels/level4/level4.component';
import { Level5Component } from './levels/level5/level5.component';
import { Level7Component } from './levels/level7/level7.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'end/:id', component: EndingComponent },
  {
    path: 'level',
    component: LevelPageComponent,
    children: [
      { path: '', redirectTo: '2', pathMatch: 'full'},
      { path: '2', component: Level2Component },
      { path: '4', component: Level4Component },
      { path: '5', component: Level5Component },
      { path: '7', component: Level7Component }
    ]
  }]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ]
})
export class AppRoutingModule {
}
