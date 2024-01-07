import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterComponent } from './component/ajouter/ajouter.component';
import { MainInvoiceComponent } from './component/main-invoice/main-invoice.component';
import { DetailsComponent } from './component/details/details.component';
import { UpdateComponent } from './component/update/update.component';

const routes: Routes = [
  {path:'ajouterinvoice', component:AjouterComponent},
  {path:'maininvoice',component:MainInvoiceComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'modifierinvoice/:id',component:UpdateComponent}

    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
