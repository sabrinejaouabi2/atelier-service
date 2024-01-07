import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/modele/Invoice';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  invoiceToUpdate: Invoice | undefined;


  constructor(
    private invoiceService: InvoiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const invoiceId = Number(params['id']); // Récupère l'ID de la facture depuis les paramètres d'URL
      this.loadInvoiceToUpdate(invoiceId); // Charge les détails de la facture à mettre à jour
    });
  }

  loadInvoiceToUpdate(id: number): void {
    this.invoiceService.getInvoiceById(id).subscribe((invoice: Invoice) => {
      this.invoiceToUpdate = invoice;
    });
  }


  updateInvoice(): void {
    if (this.invoiceToUpdate) {
      this.invoiceService.updateInvoice(this.invoiceToUpdate)
        .subscribe(updatedInvoice => {
          console.log('Facture mise à jour : ', updatedInvoice);
          // Redirection vers la page des détails de la facture mise à jour après la réussite de la mise à jour
          this.router.navigate(['/details', this.invoiceToUpdate!.id]); // Remplacez '/details' par votre chemin de route pour les détails
        }, error => {
          console.error('Erreur lors de la mise à jour de la facture : ', error);
          // Gérer les erreurs éventuelles
        });
    }
  }

}
