export const buyerInvoice = {
    company: {
      name: "TEZTRADE EXPORTS PRIVATE LIMITED", //fixed
      gstin: "27AALCT7781P1Z7", //fixed
      address: "D5 / 527 ASHRAY CO OP HSG LTD, SEC 05, CHARKOP KANDIVALI WEST, MUMBAI - 400067, INDIA", //fixed
      iecPan: "AALCT7781P", //fixed
      contact: "+916262462162", //fixed
      email: "contact@totallyindian.com", //fixed
      fssai: "", //fixed
      shippingPolicy: "https://totallyindian.com/policies/shipping-policy", //fixed
      refundPolicy: "https://totallyindian.com/policies/refund-policy" //fixed
    },
    invoice: {
      number: "TTE/25-26/10", //dynamic
      date: "31/05/2025", //dynamic realtime code
      currency: "INR / 1.00", //fixed
      exportType: "Export Against Payment of IGST", //fixed
      terms: "Cost, Insurance, and Freight (CIF)" //fixed
    },
    shipping: {
      logistics: "DHL", //dynamic
      port: "BOM", //dynamic
      airwayBill: "4578627922", //dynamic
      shippingBill: "17083", //dynamic
      date: "05/06/2025", //dynamic
      egmNumber: "0012489", //dynamic
      countryOfSupply: "France", //dynamic
      countryCode: "FR" //dynamic
    },
    billTo: {
      name: "Radha Govind Exports LLC", //dynamic
      address1: "36 S 18Th Ave Ste D, Brighton", //dynamic
      address2: "Colorado, United States Of America - 80601" //dynamic
    },
    shipTo: {
      name: "Denis Jouin", //dynamic
      address1: "204 Rue De Brest", //dynamic
      address2: "Rennes, France - 35000" //dynamic
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
        netRate: "251.39", //dynamic
        igst: "5", //dynamic
        amount: "1256.95" //dynamic
      },
      {
        description: "Himalaya Gasex Tablet", //dynamic
        hsnCode: "30049011", //dynamic
        unit: "Pcs", //fixed
        quantity: 10, //dynamic
        rate: "196.37", //dynamic
        discount: "0.00", //dynamic
        discountPercent: "0", //dynamic
        netRate: "196.37", //dynamic
        igst: "12", //dynamic
        amount: "1963.70" //dynamic
      },
      {
        description: "Himalaya Serpina Tablet", //dynamic
        hsnCode: "30049011", //dynamic
        unit: "Pcs", //fixed
        quantity: 10, //dynamic
        rate: "148.60", //dynamic
        discount: "0.00", //dynamic
        discountPercent: "0", //dynamic
        netRate: "148.60", //dynamic
        igst: "12", //dynamic
        amount: "1486.00" //dynamic
      },
      {
        description: "Himalaya Herbolax Tablet", //dynamic
        hsnCode: "30049011", //dynamic
        unit: "Pcs", //fixed
        quantity: 10, //dynamic
        rate: "194.22", //dynamic
        discount: "0.00", //dynamic
        discountPercent: "0", //dynamic
        netRate: "194.22", //dynamic
        igst: "12", //dynamic
        amount: "1942.20" //dynamic
      }
    ],
    totals: {
      totalQuantity: 35, //sum of quantities
      totalAmount: "6648.85", //sum of amounts
      freight: "0.00", //dynamic
      insurance: "0.00", //dynamic
      taxableAmount: "5999.62", // freight + insurance
      igst: "649.23", //sum of igst of all the products + 18% of freight and insurance
      amountInWords: "Six Thousand Six Hundred Forty Eight Rupees Eighty Five Paise Only" //taxable amount in words
    },
    bankDetails: {
      accountName: "TEZTRADE EXPORTS PRIVATE LIMITED", //fixed
      accountNumber: "251204042025", //fixed
      ifscCode: "INDB0001756", //fixed
      swiftCode: "INDBINBBXXX", //fixed
      adCode: "6380282 - 2910009" //fixed
    }
  };