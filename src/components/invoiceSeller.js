// src/components/TaxInvoiceSeller.js
import React, { useState } from 'react';
import img_lp from '../assets/img_lp.jpeg';
import sign_lp from '../assets/sign_lp.png';

// TaxInvoiceSeller Component
function TaxInvoiceSeller({ invoiceData }) {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: '20px',
      fontSize: '12px',
      lineHeight: '1.4',
      backgroundColor: '#ffffff',
      transform: 'scale(0.8)',
      transformOrigin: 'center top',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
    
    invoiceContainer: {
      maxWidth: '850px',
      margin: '0 auto',
      border: '2px solid #d0d0d0',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      tableLayout: 'fixed',
      pageBreakInside: 'auto',
    },
    
    td: {
      border: '1px solid #e8e7e7',
      padding: '8px 10px',
      verticalAlign: 'top',
      fontSize: '12px',
    },
    
    header: {
      backgroundColor: '#e0e0e0',
      color: 'rgb(0, 0, 0)',
      textAlign: 'center',
      fontWeight: 'normal',
      fontSize: '20px',
      padding: '7px',
      letterSpacing: '1px',
    },
    
    sectionHeader: {
      backgroundColor: '#ffffff',
      color: 'rgb(0, 0, 0)',
      fontWeight: 'normal',
      fontSize: '12px',
      padding: '8px 10px',
    },
    
    partyHeader: {
      backgroundColor: '#f0f0f0',
      color: 'rgb(0, 0, 0)',
      textAlign: 'center',
      fontWeight: 'normal',
      fontSize: '13px',
      padding: '10px',
    },
    
    productTable: {
      width: '100%',
      tableLayout: 'fixed',
      pageBreakInside: 'auto',
    },
    
    colSr: { width: '5%' },
    colDesc: { width: '35%' },
    colHsn: { width: '12%' },
    colUnit: { width: '8%' },
    colQty: { width: '8%' },
    colRate: { width: '12%' },
    colDiscount: { width: '12%' },
    colIgst: { width: '8%' },
    
    productHeader: {
      backgroundColor: '#e8e8e8',
      color: 'rgb(0, 0, 0)',
      textAlign: 'center',
      fontWeight: 'normal',
      fontSize: '11px',
      padding: '6px 4px',
    },
    
    productCell: {
      padding: '6px 4px',
      textAlign: 'center',
      fontSize: '12px',
    },
    
    totalRow: {
      backgroundColor: '#e3e3e3',
      color: 'rgb(0, 0, 0)',
      fontWeight: 'normal',
      textAlign: 'center',
      fontSize: '12px',
    },
    
    bold: {
      fontWeight: 'normal',
      fontSize: '12px',
      color: '#000000',
    },
    
    center: {
      textAlign: 'center',
    },
    
    left: {
      textAlign: 'left',
    },

    right: {
      textAlign: 'right',
    },
    
    productRow: {
      transition: 'none',
    },

    amountSection: {
      backgroundColor: '#f5f5f5',
    },

    declarationSection: {
      backgroundColor: '#f5f5f5',
    },

    spacerRow: {
      height: '1px',
      backgroundColor: '#ffffff',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.invoiceContainer}>
        <table style={styles.table}>
          <tbody>
            {/* Header */}
            <tr>
              <td colSpan="8" style={{...styles.td, ...styles.header}}>TAX INVOICE</td>
            </tr>
            
            {/* Company Information */}
            <tr>
              <td colSpan="5" style={{...styles.td, ...styles.sectionHeader, ...styles.left}}>{invoiceData.company.name}</td>
              <td colSpan="3" style={{...styles.td, ...styles.sectionHeader, ...styles.left}}>GSTIN : {invoiceData.company.gstin}</td>
            </tr>
            <tr>
              <td colSpan="5" style={{...styles.td, ...styles.sectionHeader, ...styles.left}}>{invoiceData.company.address}</td>
              <td colSpan="3" style={{...styles.td, ...styles.sectionHeader, ...styles.left}}>PAN : {invoiceData.company.pan}</td>
            </tr>
            <tr>
              <td colSpan="4" style={{...styles.td, ...styles.left}}>Contact / Email : {invoiceData.company.contact} / {invoiceData.company.email}</td>
              <td colSpan="4" style={{...styles.td, ...styles.left}}>FSSAI : {invoiceData.company.fssai}</td>
            </tr>

            {/* Invoice Details */}
            <tr>
              <td colSpan="3" style={{...styles.td, ...styles.left}}>Invoice No : {invoiceData.invoice.number}</td>
              <td colSpan="2" style={{...styles.td, ...styles.left}}>Invoice Date : {invoiceData.invoice.date}</td>
              <td colSpan="3" style={{...styles.td, ...styles.left}}>Place of Supply : {invoiceData.shipping.placeOfSupply}</td>
            </tr>
            
            {/* Spacer */}
            <tr>
              <td colSpan="8" style={{...styles.td, ...styles.spacerRow}}></td>
            </tr>
            
            {/* Party Headers */}
            <tr>
              <td colSpan="4" style={{...styles.td, ...styles.partyHeader}}>Bill to Party</td>
              <td colSpan="4" style={{...styles.td, ...styles.partyHeader}}>Ship to Party</td>
            </tr>
            
            {/* Party Information */}
            <tr>
              <td colSpan="4" style={{...styles.td, ...styles.bold, ...styles.left}}>{invoiceData.billTo.name}</td>
              <td colSpan="4" style={{...styles.td, ...styles.bold, ...styles.left}}>{invoiceData.shipTo.name}</td>
            </tr>
            <tr>
              <td colSpan="4" style={{...styles.td, ...styles.bold, ...styles.left}}>{invoiceData.billTo.address1}</td>
              <td colSpan="4" style={{...styles.td, ...styles.bold, ...styles.left}}>{invoiceData.shipTo.address1}</td>
            </tr>
            <tr>
              <td colSpan="4" style={{...styles.td, ...styles.bold, ...styles.left}}>{invoiceData.billTo.address2}</td>
              <td colSpan="4" style={{...styles.td, ...styles.bold, ...styles.left}}>{invoiceData.shipTo.address2}</td>
            </tr>
            <tr>
              <td colSpan="4" style={{...styles.td, ...styles.bold, ...styles.left}}>GSTIN : {invoiceData.billTo.gstin}</td>
              <td colSpan="4" style={{...styles.td, ...styles.bold, ...styles.left}}></td>
            </tr>
            
            {/* Spacer */}
            <tr>
              <td colSpan="8" style={{...styles.td, ...styles.spacerRow}}></td>
            </tr>
          </tbody>
        </table>
        
        {/* Product Table */}
        <table style={{...styles.table, ...styles.productTable}}>
          <tbody>
            {/* Product Headers - Simplified */}
            <tr>
              <td style={{...styles.td, ...styles.productHeader, ...styles.colSr}}>Sr. No</td>
              <td style={{...styles.td, ...styles.productHeader, ...styles.colDesc}}>Product Description</td>
              <td style={{...styles.td, ...styles.productHeader, ...styles.colHsn}}>HSN Code</td>
              <td style={{...styles.td, ...styles.productHeader, ...styles.colUnit}}>Unit</td>
              <td style={{...styles.td, ...styles.productHeader, ...styles.colQty}}>Qty</td>
              <td style={{...styles.td, ...styles.productHeader, ...styles.colRate}}>Rate</td>
              <td style={{...styles.td, ...styles.productHeader, ...styles.colDiscount}}>Discount</td>
              <td style={{...styles.td, ...styles.productHeader, ...styles.colIgst}}>IGST %</td>
            </tr>
            
            {/* Product Rows */}
            {invoiceData.products.map((product, index) => (
              <tr key={index} style={styles.productRow}>
                <td style={{...styles.td, ...styles.productCell, ...styles.colSr}}>{index + 1}</td>
                <td style={{...styles.td, ...styles.productCell, ...styles.colDesc, ...styles.left}}>{product.description}</td>
                <td style={{...styles.td, ...styles.productCell, ...styles.colHsn}}>{product.hsnCode}</td>
                <td style={{...styles.td, ...styles.productCell, ...styles.colUnit}}>{product.unit}</td>
                <td style={{...styles.td, ...styles.productCell, ...styles.colQty}}>{product.quantity}</td>
                <td style={{...styles.td, ...styles.productCell, ...styles.colRate}}>₹{product.rate}</td>
                <td style={{...styles.td, ...styles.productCell, ...styles.colDiscount}}>₹{product.discount}<br/>({product.discountPercent}%)</td>
                <td style={{...styles.td, ...styles.productCell, ...styles.colIgst}}>{product.igst}%</td>
              </tr>
            ))}

            {/* Total Row */}
            <tr>
              <td colSpan="4" style={{...styles.td, ...styles.totalRow}}>TOTAL</td>
              <td style={{...styles.td, ...styles.center, ...styles.totalRow}}>{invoiceData.totals.totalQuantity}</td>
              <td style={{...styles.td, ...styles.right, ...styles.totalRow}}></td>
              <td style={{...styles.td, ...styles.right, ...styles.totalRow}}></td>
              <td style={{...styles.td, ...styles.right, ...styles.totalRow}}></td>
            </tr>
          </tbody>
        </table>
        
        <table style={styles.table}>
          <tbody>
            {/* Amount Details - Simplified */}
            <tr style={styles.amountSection}>
              <td colSpan="4" style={{...styles.td, ...styles.center}}>Total Amount In Words</td>
              <td colSpan="2" style={{...styles.td, ...styles.right}}>Taxable Amount :</td>
              <td colSpan="2" style={{...styles.td, ...styles.right}}>₹{invoiceData.totals.taxableAmount}</td>
            </tr>
            <tr style={styles.amountSection}>
              <td colSpan="4" style={{...styles.td, ...styles.left}}>{invoiceData.totals.amountInWords}</td>
              <td colSpan="2" style={{...styles.td, ...styles.right}}>IGST :</td>
              <td colSpan="2" style={{...styles.td, ...styles.right}}>₹{invoiceData.totals.igst}</td>
            </tr>
            <tr style={styles.amountSection}>
              <td colSpan="4" style={{...styles.td, ...styles.center}}>Bank Details</td>
              <td colSpan="2" style={{...styles.td, ...styles.right}}>Total Amount :</td>
              <td colSpan="2" style={{...styles.td, ...styles.right}}>₹{invoiceData.totals.totalAmount}</td>
            </tr>
            <tr style={styles.amountSection}>
              <td colSpan="4" style={{...styles.td, ...styles.left}}>A/C Name : {invoiceData.bankDetails.accountName}</td>
              <td colSpan="4" style={{...styles.td, ...styles.left}}></td>
            </tr>
            <tr style={styles.amountSection}>
              <td colSpan="4" style={{...styles.td, ...styles.left}}>Bank A/C Number : {invoiceData.bankDetails.accountNumber}</td>
              <td colSpan="4" style={{...styles.td, ...styles.left}}></td>
            </tr>
            <tr style={styles.amountSection}>
              <td colSpan="4" style={{...styles.td, ...styles.left}}>IFSC Code: {invoiceData.bankDetails.ifscCode}</td>
              <td colSpan="4" style={{...styles.td, ...styles.left}}></td>
            </tr>
            
            {/* Declarations */}
            <tr>
              <td colSpan="4" style={{...styles.td, ...styles.declarationSection, ...styles.left, height: '80px', verticalAlign: 'top', padding: '12px'}}>
                <strong>Declaration:</strong><br/>
                We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.<br/><br/>
                For any queries, please contact us at {invoiceData.company.email}
              </td>
              <td colSpan="2" style={{...styles.td, ...styles.center, verticalAlign: 'middle'}}>
                <img 
                  src={img_lp}
                  alt="Company Seal" 
                  style={{maxWidth: '120px', maxHeight: '80px', display: 'block', margin: '0 auto'}}
                />
                <br/>
                <span>Company Seal</span>
              </td>
              <td colSpan="2" style={{...styles.td, ...styles.center, verticalAlign: 'middle'}}>
                For {invoiceData.company.name}<br/><br/>
                <img 
                  src={sign_lp}
                  alt="Authorized Signature" 
                  style={{maxWidth: '120px', maxHeight: '80px', display: 'block', margin: '0 auto'}}
                />
                <br/>
                <span>Authorised Signatory</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Main App Component for TaxInvoiceSeller
export default function TaxInvoiceSellerGenerator({ invoiceData }) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    
    try {
      const html2pdf = await import('html2pdf.js');
      const element = document.getElementById('invoice-seller-to-print');
      
      if (!element) {
        throw new Error('Invoice element not found');
      }

      // Configure PDF options
      const options = {
        margin: 0,
        filename: `tax-invoice-${invoiceData.invoice.number}.pdf`,
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { 
          scale: 2, 
          useCORS: true,
          letterRendering: true,
          backgroundColor: null
        },
        jsPDF: { 
          unit: 'in', 
          format: 'a4', 
          orientation: 'portrait',
          compress: true
        },
        pagebreak: { mode: 'avoid-all' }
      };

      await html2pdf.default().set(options).from(element).save();
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please install html2pdf.js: npm install html2pdf.js');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f8f9fa', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Download Button */}
        <div style={{ 
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          <button
            onClick={generatePDF}
            disabled={isGenerating}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '8px',
              cursor: isGenerating ? 'not-allowed' : 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              opacity: isGenerating ? 0.7 : 1,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}
          >
            {isGenerating ? 'Generating PDF...' : 'Download PDF'}
          </button>
        </div>

        {/* Invoice Preview */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          <div id="invoice-seller-to-print">
            <TaxInvoiceSeller invoiceData={invoiceData} />
          </div>
        </div>
      </div>
    </div>
  );
}