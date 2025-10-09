import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxSwitchModule } from 'devextreme-angular/ui/switch';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxSwitchModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
