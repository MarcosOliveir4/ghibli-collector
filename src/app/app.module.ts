import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { GhibliCardComponent } from './components';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    GhibliCardComponent,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
