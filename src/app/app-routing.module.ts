import {NgModule} from "@angular/core";
import {PreloadAllModules, PreloadingStrategy, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {WorkComponent} from "./work/work.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'work', component: WorkComponent}
];


@NgModule({
  imports: [
    //Preloading takes advantage of idle time to preload lazy loading
    RouterModule.forRoot(appRoutes)
  //   {preloadingStrategy: PreloadAllModules}
  ],
  //exports so that it is available in other modules!
  exports: [RouterModule]
})
export class AppRoutingModule {
}
