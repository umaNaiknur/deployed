import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './unitTesting/posts/posts.component';
import { DisplayComponent } from './unitTesting/display/display.component';
import { PostDetailsComponent } from './unitTesting/post-details/post-details.component';
import { App2Component } from './app2/app2.component';

const routes: Routes = [
  {path:'post',component:PostsComponent},
  {path:'details/:id',component:PostDetailsComponent},
  {path:'app2',component:App2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
