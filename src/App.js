// src/App.js
import React from 'react';
import TaxInvoiceBuyer from './components/invoiceBuyer';
import TaxInvoiceSeller from './components/invoiceSeller';
import { buyerInvoice } from './data/buyerInvoice';
import { sellerInvoice } from './data/sellerInvoice';
import './App.css';

function App() {
  return (
    <div className="App">
      <TaxInvoiceSeller invoiceData={sellerInvoice} />
      <TaxInvoiceBuyer invoiceData={buyerInvoice} />
    </div>
  );
}

export default App;