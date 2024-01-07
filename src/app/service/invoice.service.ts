import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../modele/Invoice';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {


  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000';


  getAllInvoice(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${this.apiUrl}/invoices`);
  }

  getInvoiceById(id: number): Observable<Invoice> {
    const url = `${this.apiUrl}/invoices/${id}`;
    return this.http.get<Invoice>(url);
  }

    // Ajouter un produit à la liste des produits
    addInvoice(invoices: Invoice): Observable<Invoice> {
      return this.http.post<Invoice>(`${this.apiUrl}/invoices`, invoices);
    }

    updateInvoice(invoices: Invoice): Observable<Invoice> {
      const url = `${this.apiUrl}/invoices/${invoices.id}`;
      return this.http.put<Invoice>(url, invoices);
    }

    deleteInvoice(id: number): Observable<Invoice> {
      const url = `${this.apiUrl}/invoices/${id}`;
      return this.http.delete<Invoice>(url);
    }
  


  
  






}
