import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from 'src/app/modele/Invoice';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  implements OnInit {
  invoice: Invoice |undefined;
  id: number |undefined;
  constructor(private route: ActivatedRoute,private invoiceService: InvoiceService) { }


  ngOnInit(): void {
  this.id =Number(this.route.snapshot.paramMap.get('id'));
 
 
  if (this.id) { this.invoiceService.getInvoiceById(this.id).subscribe((data:Invoice) => {this.invoice =data;
  });
  }
  }
}