import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from 'src/app/modele/Invoice';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  selector: 'app-main-invoice',
  templateUrl: './main-invoice.component.html',
  styleUrls: ['./main-invoice.component.css']
})
export class MainInvoiceComponent implements OnInit {
  invoiceees: Invoice[] = [];

  selectedInvoiceId: number | undefined;
  selectedInvoice: Invoice | undefined;

  constructor(private serviceinvoice: InvoiceService, private route: Router) { }

  ngOnInit(): void {
    this.serviceinvoice.getAllInvoice(
    ).subscribe((data: Invoice[]) => {
      this.invoiceees = data;
    });
  }

  loadInvoice(): void {
    this.serviceinvoice.getAllInvoice().subscribe((items:
      Invoice[]) => {
      this.invoiceees = items;
    });
  }


  ajout() {
    this.route.navigate(['/ajouterinvoice']);
  }


  deleteProduct(id: number): void {
    this.serviceinvoice.deleteInvoice(id).subscribe(
      () => {
        this.loadInvoice();

      },


      (error) => {
        console.error('Error deleting product:', error);

        alert('Error deleting product: ' + error);
      }
    );
  }

  loadSelectedInvoice(id: number): void {
    this.serviceinvoice.getInvoiceById(id).subscribe((invoice: Invoice) => {
      this.selectedInvoice = invoice;
      // Faire quelque chose avec la facture sélectionnée, par exemple remplir un formulaire de modification
    });
  }
  modifyInvoice(id: number): void {
    this.loadSelectedInvoice(id);
    // Naviguer vers la page de modification avec les détails de la facture sélectionnée
    this.route.navigate(['/modifierinvoice', id]); // Assurez-vous que '/modifierinvoice' est votre chemin de route pour la modification
  }

}
