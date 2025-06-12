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
    sealImage: "../assets/img_lp.jpeg", //dynamic - company seal image path/URL
    signatureImage: "../assets/sign_lp.png", //dynamic - authorized signature image path/URL
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
    gstin: "27AALCT7781P1Z7", //fixed
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
    totalAmount: "7358.73", //sum of all product amounts + IGST (final invoice total)
    taxableAmount: "6648.85", //sum of product amounts (rate × qty - discount) before IGST
    igst: "709.88", //total IGST amount calculated on taxable amount
    amountInWords: "Seven Thousand Three Hundred Fifty Eight Rupees Seventy Three Paise Only" //total amount in words
  },
  bankDetails: {
    accountName: "TEZTRADE EXPORTS PRIVATE LIMITED", //fixed
    accountNumber: "251204042025", //fixed
    ifscCode: "INDB0001756", //fixed
  }
};