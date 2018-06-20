import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwcharComponent } from './swchar.component';
import { SwcharService git } from './swchar.service';
import { AppComponent } from './app/app.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SwcharComponent,
    AppComponent
  ],
  providers: [
    SwcharService
  ],
})
export class SwcharModule { }
