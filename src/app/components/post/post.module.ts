import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { AllPostComponent } from './all-post/all-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { BreadCrumbsMaterialModules } from 'src/app/material.module';
@NgModule({
  declarations: [AllPostComponent, EditPostComponent, ViewPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    BreadCrumbsMaterialModules
  ]
})
export class PostModule { }
