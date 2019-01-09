import { NgModule } from '@angular/core';
import { Routes, RouterModule,   } from '@angular/router';
 
const routes: Routes = [
  // {path:'',redirectTo:'home',pathMatch:'full'},
  // {path:'home',component:HomeComponent,pathMatch:'full',data:{title:'Home'}},
{path:'post',loadChildren:'./components/post/post.module#PostModule',data:{title:'post'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
