import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LevelPageComponent} from "./level-page/level-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {EndingComponent} from "./ending/ending.component";

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'end/:id', component: EndingComponent },
  { path: 'level/:id', component: LevelPageComponent }]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
