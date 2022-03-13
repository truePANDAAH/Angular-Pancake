import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DesingSystemComponent } from './pages/desing-system/desing-system.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { FaqComponent } from './shared/faq/faq.component';
import { FaqRowComponent } from './shared/faq-row/faq-row.component';
import { LanguageSelectorComponent } from './shared/language-selector/language-selector.component';
import { ModalConnectWalletComponent } from './shared/modal-connect-wallet/modal-connect-wallet.component';
import { ModalSettingsComponent } from './shared/modal-settings/modal-settings.component';
import { TableBaseRowComponent } from './shared/table-base-row/table-base-row.component';
import { TableBaseTitleComponent } from './shared/table-base-title/table-base-title.component';
import { TableBaseComponent } from './shared/table-base/table-base.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
// import { DsComponent } from './ds/ds.component';

@NgModule({
  declarations: [
    AppComponent,
    DesingSystemComponent,
    NavBarComponent,
    FaqComponent,
    FaqRowComponent,
    LanguageSelectorComponent,
    ModalConnectWalletComponent,
    ModalSettingsComponent,
    TableBaseRowComponent,
    TableBaseTitleComponent,
    TableBaseComponent,
    // DsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
