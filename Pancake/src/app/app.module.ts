import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DesingSystemComponent } from './pages/desing-system/desing-system.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { ButtonsComponent } from './shared/buttons/buttons.component';
// import { DsComponent } from './ds/ds.component';

@NgModule({
  declarations: [
    AppComponent,
    DesingSystemComponent,
    NavBarComponent,
    ButtonsComponent,
    // DsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
