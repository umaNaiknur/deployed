import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {HttpClientModule} from '@angular/common/http';
import { App1Component } from './app1/app1.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component'
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipePipe } from './pipe/pipe.pipe';
import { PostsComponent } from './unitTesting/posts/posts.component';
import { DisplayComponent } from './unitTesting/display/display.component';
import { PostDetailsComponent } from './unitTesting/post-details/post-details.component';
import { ObservableComponent } from './observable/observable.component';
import { App2Component } from './app2/app2.component';
import { DebounceComponent } from './debounce/debounce.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    App1Component,
    ViewEncapsulationComponent,
    HomeComponent,
    MapsComponent,
    PipePipe,
    PostsComponent,
    DisplayComponent,
    PostDetailsComponent,
    ObservableComponent,
    App2Component,
    DebounceComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId:'serverApp'}),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
