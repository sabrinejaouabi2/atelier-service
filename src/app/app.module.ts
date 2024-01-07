import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainInvoiceComponent } from './component/main-invoice/main-invoice.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './component/details/details.component';
import { AjouterComponent } from './component/ajouter/ajouter.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UpdateComponent } from './component/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    MainInvoiceComponent,
    DetailsComponent,
    AjouterComponent,
    NavbarComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
