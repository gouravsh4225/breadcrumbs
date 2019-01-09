import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllPostComponent } from './all-post/all-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const postRoute:Routes=[
//   {path:'',redirectTo:'all-post',pathMatch:'full'},
//   {path:'all-post',
//   component:AllPostComponent,pathMatch:'full',
//   data:{title:'all-post'},
//     children:[
//       {path:'view-post',component:ViewPostComponent,data:{title:'View-post'} },
//       { path:'edit-post',component:EditPostComponent, data:{title:'edit-post'}},
//     ]
// }
{path:'',
children:[
  {path:'',redirectTo:'all-post',pathMatch:'full'},
  {path:'all-post',component:AllPostComponent,data:{title:"All-post"}},
  {path:'view-post',component:ViewPostComponent,data:{title:"edit-post"}},
  {path:'all-post/edit-post',component:EditPostComponent,data:{title:"edit-post"}},

]
}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(postRoute)
  ],
  exports:[
RouterModule
  ]
})
export class PostRoutingModule { }
