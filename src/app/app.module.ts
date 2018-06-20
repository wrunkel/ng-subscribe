import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SwcharComponent } from './swchar/swchar.component';
import { DemoComponent } from './demo/demo.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: DemoComponent },
    { path: 'SwcharComponent', component: SwcharComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SwcharComponent,
    DemoComponent
  ],
  imports: [
      HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(
        appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
