import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HeroesComponent} from "./heroes/heroes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroeDetailsComponent} from "./heroe-details/heroe-details.component";

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: DashboardComponent, pathMatch: 'full'},
  {path: 'detail/:id', component: HeroeDetailsComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}


