import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { GetComponent } from './get/get.component';

const routes: Routes = [{path : 'post', component:PostComponent}, {path : 'post/:id', component:PostComponent}, {path : 'get', component:GetComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
