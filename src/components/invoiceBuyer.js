// src/components/InvoicePDFGenerator.js
import React, { useState } from 'react';
import img_lp from '../assets/img_lp.jpeg';
import sign_lp from '../assets/sign_lp.png';

// Invoice Component
function TaxInvoiceComponent({ invoiceData }) {
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
    colDesc: { width: '30%' },
    colHsn: { width: '10%' },
    colUnit: { width: '5%' },
    colQty: { width: '5%' },
    colRate: { width: '11.25%' },
    colDiscount: { width: '11.25%' },
    colNetrate: { width: '11.25%' },
    colIgst: { width: '5%' },
    colAmount: { width: '11.25%' },
    
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
    
    blue: {
      color: '#0000ff',
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.invoiceContainer}>
        <table style={styles.table}>
          <tbody>
            {/* Header */}
            <tr>
              <td colSpan="10" style={{...styles.td, ...styles.header}}>EXPORT INVOICE</td>
            </tr>
            
            {/* Company Information */}
            <tr>
              <td colSpan="7" style={{...styles.td, ...styles.sectionHeader, ...styles.left}}>{invoiceData.company.name}</td>
              <td colSpan="3" style={{...styles.td, ...styles.sectionHeader, ...styles.left}}>GSTIN : {invoiceData.company.gstin}</td>
            </tr>
            <tr>
              <td colSpan="7" style={{...styles.td, ...styles.sectionHeader, ...styles.left}}>{invoiceData.company.address}</td>
              <td colSpan="3" style={{...styles.td, ...styles.sectionHeader, ...styles.left}}>IEC/PAN : {invoiceData.company.iecPan}</td>
            </tr>
            <tr>
              <td colSpan="6" style={{...styles.td, ...styles.left}}>Contact / Email : {invoiceData.company.contact} / {invoiceData.company.email}</td>
              <td colSpan="4" style={{...styles.td, ...styles.left}}>FSSAI : {invoiceData.company.fssai}</td>
            </tr>

            {/* Invoice Details */}
            <tr>
              <td colSpan="3" style={{...styles.td, ...styles.left}}>Invoice No : {invoiceData.invoice.number}</td>
              <td colSpan="3" style={{...styles.td, ...styles.left}}>Invoice Date : {invoiceData.invoice.date}</td>
              <td colSpan="4" style={{...styles.td, ...styles.left}}>Currency Code / Rate : {invoiceData.invoice.currency}</td>
            </tr>
            
            <tr>
              <td colSpan="4" style={{...styles.td, ...styles.left}}>Export Type : {invoiceData.invoice.exportType}</td>
              <td colSpan="6" style={{...styles.td, ...styles.left}}>Terms of trade : {invoiceData.invoice.terms}</td>
            </tr>
            
            <tr>
              <td colSpan="5" style={{...styles.td, ...styles.left}}>Logistics Partner : {invoiceData.shipping.logistics}</td>
              <td colSpan="5" style={{...styles.td, ...styles.left}}>Port of Lading : {invoiceData.shipping.port}</td>
            </tr>
            
            <tr>
              <td colSpan="3" style={{...styles.td, ...styles.left}}>Airway Bill : {invoiceData.shipping.airwayBill}</td>
              <td colSpan="2" style={{...styles.td, ...styles.left}}>Shipping Bill : {invoiceData.shipping.shippingBill}</td>
              <td colSpan="2" style={{...styles.td, ...styles.left}}>Shipping Date : {invoiceData.shipping.date}</td>
              <td colSpan="3" style={{...styles.td, ...styles.left}}>EGM Number : {invoiceData.shipping.egmNumber}</td>
            </tr>

            <tr>
              <td colSpan="5" style={{...styles.td, ...styles.left}}>Country of Supply : {invoiceData.shipping.countryOfSupply}</td>
              <td colSpan="5" style={{...styles.td, ...styles.left}}>Country Code : {invoiceData.shipping.countryCode}</td>
            </tr>
            
            {/* Spacer */}
            <tr>
              <td colSpan="10" style={{...styles.td, ...styles.spacerRow}}></td>
            </tr>
            
            {/* Party Headers */}
            <tr>
              <td colSpan="5" style={{...styles.td, ...styles.partyHeader}}>Bill to Party</td>
              <td colSpan="5" style={{...styles.td, ...styles.partyHeader}}>Ship to Party</td>
            </tr>
            
            {/* Party Information */}
            <tr>
              <td colSpan="5" style={{...styles.td, ...styles.bold, ...styles.left}}>{invoiceData.billTo.name}</td>
              <td colSpan="5" style={{...styles.td, ...styles.bold, ...styles.left}}>{invoiceData.shipTo.name}</td>
            </tr>
            <tr>
              <td colSpan="5" style={{...styles.td, ...styles.bold, ...styles.left}}>{invoiceData.billTo.address1}</td>
              <td colSpan="5" style={{...styles.td, ...styles.bold, ...styles.left}}>{invoiceData.shipTo.address1}</td>
            </tr>
            <tr>
              <td colSpan="5" style={{...styles.td, ...styles.bold, ...styles.left}}>{invoiceData.billTo.address2}</td>
              <td colSpan="5" style={{...styles.td, ...styles.bold, ...styles.left}}>{invoiceData.shipTo.address2}</td>
            </tr>
            
            {/* Spacer */}
            <tr>
              <td colSpan="10" style={{...styles.td, ...styles.spacerRow}}></td>
            </tr>
          </tbody>
        </table>
        
        {/* Product Table */}
        <table style={{...styles.table, ...styles.productTable}}>
          <tbody>
            {/* Product Headers */}
            <tr>
              <td style={{...styles.td, ...styles.productHeader, ...styles.colSr}}>Sr. No</td>
              <td style={{...styles.td, ...styles.productHeader, ...styles.colDesc}}>Product Description</td>
              <td style={{...styles.td, ...styles.productHeader, ...styles.colHsn}}>HSN Code</td>
              <td style={{...styles.td, ...styles.productHeader, ...styles.colUnit}}>Unit</td>
              <td style={{...styles.td, ...styles.productHeader, ...styles.colQty}}>Qty</td>
              <td style={{...styles.td, ...styles.productHeader, ...styles.colRate}}>Rate</td>
              <td style={{...styles.td, ...styles.productHeader, ...styles.colDiscount}}>Discount</td>
              <td style={{...styles.td, ...styles.productHeader, ...styles.colNetrate}}>Net Rate</td>
              <td style={{...styles.td, ...styles.productHeader, ...styles.colIgst}}>IGST</td>
              <td style={{...styles.td, ...styles.productHeader, ...styles.colAmount}}>Amount</td>
            </tr>
            
            {/* Product Rows */}
            {invoiceData.products.map((product, index) => (
              <tr key={index} style={styles.productRow}>
                <td style={{...styles.td, ...styles.productCell, ...styles.colSr}}>{index + 1}</td>
                <td style={{...styles.td, ...styles.productCell, ...styles.colDesc}}>{product.description}</td>
                <td style={{...styles.td, ...styles.productCell, ...styles.colHsn}}>{product.hsnCode}</td>
                <td style={{...styles.td, ...styles.productCell, ...styles.colUnit}}>{product.unit}</td>
                <td style={{...styles.td, ...styles.productCell, ...styles.colQty}}>{product.quantity}</td>
                <td style={{...styles.td, ...styles.productCell, ...styles.colRate}}>₹{product.rate}</td>
                <td style={{...styles.td, ...styles.productCell, ...styles.colDiscount}}>₹{product.discount}<br/>({product.discountPercent}%)</td>
                <td style={{...styles.td, ...styles.productCell, ...styles.colNetrate}}>₹{product.netRate}</td>
                <td style={{...styles.td, ...styles.productCell, ...styles.colIgst}}>{product.igst}%</td>
                <td style={{...styles.td, ...styles.productCell, ...styles.colAmount}}>₹{product.amount}</td>
              </tr>
            ))}

            {/* Total Row */}
            <tr>
              <td colSpan="4" style={{...styles.td, ...styles.totalRow}}>TOTAL</td>
              <td style={{...styles.td, ...styles.center, ...styles.totalRow}}>{invoiceData.totals.totalQuantity}</td>
              <td style={{...styles.td, ...styles.right, ...styles.totalRow}}></td>
              <td style={{...styles.td, ...styles.right, ...styles.totalRow}}></td>
              <td style={{...styles.td, ...styles.right, ...styles.totalRow}}></td>
              <td style={{...styles.td, ...styles.right, ...styles.totalRow}}></td>
              <td style={{...styles.td, ...styles.right, ...styles.totalRow}}>₹{invoiceData.totals.totalAmount}</td>
            </tr>
          </tbody>
        </table>
        
        <table style={styles.table}>
          <tbody>
            {/* Amount Details */}
            <tr style={styles.amountSection}>
              <td colSpan="6" style={{...styles.td, ...styles.center}}>Total Amount In Words</td>
              <td colSpan="2" style={{...styles.td, ...styles.right}}>Freight (996812) :</td>
              <td colSpan="2" style={{...styles.td, ...styles.right}}>₹{invoiceData.totals.freight}</td>
            </tr>
            <tr style={styles.amountSection}>
              <td colSpan="6" style={{...styles.td, ...styles.left}}>{invoiceData.totals.amountInWords}</td>
              <td colSpan="2" style={{...styles.td, ...styles.right}}>Insurance :</td>
              <td colSpan="2" style={{...styles.td, ...styles.right}}>₹{invoiceData.totals.insurance}</td>
            </tr>
            <tr style={styles.amountSection}>
              <td colSpan="6" style={{...styles.td, ...styles.center}}>Bank Details</td>
              <td colSpan="2" style={{...styles.td, ...styles.right}}>Taxable Amount :</td>
              <td colSpan="2" style={{...styles.td, ...styles.right}}>₹{invoiceData.totals.taxableAmount}</td>
            </tr>
            <tr style={styles.amountSection}>
              <td colSpan="6" style={{...styles.td, ...styles.left}}>A/C Name : {invoiceData.bankDetails.accountName}</td>
              <td colSpan="2" style={{...styles.td, ...styles.right}}>IGST :</td>
              <td colSpan="2" style={{...styles.td, ...styles.right}}>₹{invoiceData.totals.igst}</td>
            </tr>
            <tr style={styles.amountSection}>
              <td colSpan="6" style={{...styles.td, ...styles.left}}>Bank A/C Number : {invoiceData.bankDetails.accountNumber}</td>
              <td colSpan="2" style={{...styles.td, ...styles.right}}>Total Amount :</td>
              <td colSpan="2" style={{...styles.td, ...styles.right}}>₹{invoiceData.totals.totalAmount}</td>
            </tr>
            
            {/* Bank Details */}
            <tr>
              <td colSpan="3" style={{...styles.td, ...styles.bold, ...styles.left}}>IFSC Code: {invoiceData.bankDetails.ifscCode}</td>
              <td colSpan="3" style={{...styles.td, ...styles.bold, ...styles.left}}>SWIFT CODE : {invoiceData.bankDetails.swiftCode}</td>
              <td colSpan="4" style={{...styles.td, ...styles.left}}>Bank AD code : {invoiceData.bankDetails.adCode}</td>
            </tr>
            
            {/* Declarations */}
            <tr>
              <td colSpan="3" style={{...styles.td, ...styles.declarationSection, ...styles.left, height: '66px', verticalAlign: 'top', padding: '12px'}}>
                Shipper Declaration : Please refer to these links for our shipping policy and cancellation/refund policy:<br/><br/>
                Shipping Policy : <span style={styles.blue}>{invoiceData.company.shippingPolicy}</span><br/><br/>
                Cancellation/Refund Policy : <span style={styles.blue}>{invoiceData.company.refundPolicy}</span><br/><br/>
                For any queries, please contact us at {invoiceData.company.email}
              </td>
              <td colSpan="3" style={{...styles.td, ...styles.center, verticalAlign: 'middle'}}>
                <img 
                  src={img_lp}
                  alt="Company Seal" 
                  style={{maxWidth: '150px', maxHeight: '100px', display: 'block', margin: '0 auto'}}
                />
                <br/>
                <span>Company Seal</span>
              </td>
              <td colSpan="4" style={{...styles.td, ...styles.center, verticalAlign: 'middle'}}>
                For {invoiceData.company.name}<br/><br/>
                <img 
                  src={sign_lp}
                  alt="Authorized Signature" 
                  style={{maxWidth: '150px', maxHeight: '100px', display: 'block', margin: '0 auto'}}
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

// Main App Component
export default function InvoicePDFGenerator({ invoiceData }) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    
    try {
      const html2pdf = await import('html2pdf.js');
      const element = document.getElementById('invoice-to-print');
      
      if (!element) {
        throw new Error('Invoice element not found');
      }

      // Configure PDF options
      const options = {
        margin: 0,
        filename: `invoice-${invoiceData.invoice.number}.pdf`,
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
          <div id="invoice-to-print">
            <TaxInvoiceComponent invoiceData={invoiceData} />
          </div>
        </div>
      </div>
    </div>
  );
}
