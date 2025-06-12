// src/data/sampleData2.js

// Sample data structure for reference
export const sellerInvoice = {
  company: {
    name: "TEZTRADE EXPORTS PRIVATE LIMITED", //seller's name
    gstin: "27AALCT7781P1Z7", //seller's GSTIN
    address: "D5 / 527 ASHRAY CO OP HSG LTD, SEC 05, CHARKOP KANDIVALI WEST, MUMBAI - 400067, INDIA", //seller's billing address
    pan: "AALCT7781P", //seller's PAN CARD
    contact: "+916262462162", //seller's contact number
    email: "contact@totallyindian.com", //seller's email
    fssai: "", //seller's FSSAI number
  },
  invoice: {
    number: "TTE/25-26/10", //dynamic series will be randomly generated with series for a particular seller
    date: "31/05/2025",  //dynamic realtime code
  },
  shipping: {
    placeOfSupply: "27 Maharashtra", //fixed
  },
  billTo: {
    name: "TezTrade Exports Private Limited", //fixed
    address1: "D5 / 527 ASHRAY CO OP HSG LTD, SEC 05", //fixed
    address2: "CHARKOP KANDIVALI WEST, MUMBAI - 400067, INDIA", //fixed
    gstin: "27AALCT7781P1Z7", //fixed
  },
  shipTo: {
    name: "TezTrade Exports Private Limited", //fixed
    address1: "D5 / 527 ASHRAY CO OP HSG LTD, SEC 05", //fixed
    address2: "CHARKOP KANDIVALI WEST, MUMBAI - 400067, INDIA", //fixed
  },
  products: [
    {
      description: "Himalaya Tagara Tablet", //dynamic
      hsnCode: "30049011", //dynamic
      unit: "Pcs", //fixed
      quantity: 5, //dynamic
      rate: "251.39", //dynamic
      discount: "0.00", //dynamic
      discountPercent: "0", //dynamic
      igst: "5", //dynamic
    },
    {
      description: "Himalaya Gasex Tablet", //dynamic
      hsnCode: "30049011", //dynamic
      unit: "Pcs", //fixed
      quantity: 10, //dynamic
      rate: "196.37", //dynamic
      discount: "0.00", //dynamic
      discountPercent: "0", //dynamic
      igst: "12", //dynamic
    },
    {
      description: "Himalaya Serpina Tablet", //dynamic
      hsnCode: "30049011", //dynamic
      unit: "Pcs", //fixed
      quantity: 10, //dynamic
      rate: "148.60", //dynamic
      discount: "0.00", //dynamic
      discountPercent: "0", //dynamic
      igst: "12", //dynamic
    },
    {
      description: "Himalaya Herbolax Tablet", //dynamic
      hsnCode: "30049011", //dynamic
      unit: "Pcs", //fixed
      quantity: 10, //dynamic
      rate: "194.22", //dynamic
      discount: "0.00", //dynamic
      discountPercent: "0", //dynamic
      igst: "12", //dynamic
    }
  ],
  totals: {
    totalQuantity: 35, //sum of quantities
    totalAmount: "6648.85", //sum of amounts
    taxableAmount: "5999.62", // same amount as total amount
    igst: "649.23", //sum of igst of all the products
    amountInWords: "Six Thousand Six Hundred Forty Eight Rupees Eighty Five Paise Only" //taxable amount in words
  },
  bankDetails: {
    accountName: "TEZTRADE EXPORTS PRIVATE LIMITED", //fixed
    accountNumber: "251204042025", //fixed
    ifscCode: "INDB0001756", //fixed
  }
};
