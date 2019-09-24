import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TaskDetailsComponent } from './component/task-details/task-details.component';
import { LayoutComponent } from './component/layout/layout.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { SidenavComponent } from './component/layout/sidenav/sidenav.component';
import { FooterComponent } from './component/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TaskDetailsComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
