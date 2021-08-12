import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WafComponent } from './view/pages/waf/waf.component';
import { ScriptsComponent } from './view/pages/scripts/scripts.component';


const routes: Routes = [
  {path: 'waf', component: WafComponent},
  {path: 'scripts', component: ScriptsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
