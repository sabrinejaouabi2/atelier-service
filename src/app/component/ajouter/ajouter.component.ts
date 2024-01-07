import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Invoice } from 'src/app/modele/Invoice';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {

  //invoice: Invoice = new Invoice();
  invoice: Invoice = {
    id: 0,
    discountAmount: 0,
    billAmount: 0,
    dateBill: '',
    Status: true // Ou false selon votre besoin initial
  };

  constructor(private invoiceservice: InvoiceService) { }



  add(f: NgForm) {
    if (f.valid) {

      this.invoiceservice.addInvoice(this.invoice).subscribe({
        next: () => {
          this.invoice = new Invoice(); 
    
          f.reset(); 
   
          console.log("Formulaire valide et soumis avec succès!");
    },
        error: (err) => {
          console.error('Error adding product: ', err);
    
    }
      });
    }
  }


}
