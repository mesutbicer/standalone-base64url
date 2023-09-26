/**
 * Asagidaki calisma FE <=> FE iletisim icin de kullanilabilir! (query parammeters uzerinden)
 *
 * Source: https://www.npmjs.com/package/base64url
 */

// run `node index.js` in the terminal
const base64url = require('base64url');

const datax = {
  tax: '7.21',
  agent: 'web order',
  total: '129.16',
  domain: 'ruthsroses.com',
  order_id: 'R-6375-268048-6718',
  products: [
    {
      id: '5e7c3818b5b3f12cefa034ac',
      addOns: [
        {
          addOns_name: 'Stuffed Animal',
          addOns_price: 12.99,
          addOns_quantity: '1',
        },
        {
          addOns_name: 'Mylar Balloons',
          addOns_price: 6.99,
          addOns_quantity: '1',
        },
        {
          addOns_name: 'Box Of Chocolates',
          addOns_price: 12.99,
          addOns_quantity: '1',
        },
      ],
      prices: '102.96',
      skuName: '1 Dozen Roses - Red',
      product_url: 'https://ruthsroses.com/products/1-dozen-roses-red',
      product_name: '1 Dozen Roses - Red',
      product_price: 69.99,
      product_skuId: 'BF231-11KM',
      product_mainskuId: 'BF231-11KM',
    },
  ],
  client_ip: '2600:387:15:716::2',
  orderinfo: {
    CITY: 'Jefferson City',
    EMAIL: 'xvaughn7@gmail.com',
    FNAME: 'Xavier',
    LNAME: 'Vaughn',
    PHONE: '573-619-3379',
    R_MSG: 'I luvvv ya sweet potato ',
    STATE: 'MO',
    R_CITY: 'Kansas City',
    R_FNAME: 'Natalee',
    R_LNAME: 'Ferrara',
    R_PHONE: '816-809-2951',
    R_STATE: 'MO',
    ZIPCODE: '65101',
    ADDRESS1: '4627 Shepherd Hills Rd',
    ADDRESS2: '',
    lastFour: '',
    occasion: 'Anniversary',
    R_ZIPCODE: '64150',
    MerchantID: null,
    R_ADDRESS1: '1805 NW Platte Rd',
    R_ADDRESS2: 'Suite #120',
    INSTITUTION: 'Business',
    DELIVERYDATE: '09/06/2023',
    R_SPECIAL_INS: '',
    INSTITUTION_NAME: 'Epiphany Dermatology',
  },
  ip_address: '2600:387:15:716::2, 172.69.58.25, 10.0.27.184',
  order_date: '2023-09-06',
  order_time: '11:37',
  lead_source: 'PPC_GOOGLE',
  paymentInfo: {
    name: 'pOp/qnB4vNbnBBTlFVenYpODHP8DWOCLvK7ZIsXgLJ17bqxIyNZbOkM8PY61Jqw=',
    year: '2026',
    month: '08',
    expDate: '08/2026',
    cardCode: '123',
    cardNumber: '123456',
  },
  ad_id_google: 'florist_riverside',
  order_status: 'ok',
  utm_campaign: 'C_MISSOURI',
  project_domain: 'www.ruthroses.com',
  ad_id_microsoft: 'florist_riverside',
};

const params = base64url(JSON.stringify(datax)); // buraya her zaman JSON object string gelmeli
console.log(`params : ${params}`);

const dataxDecoded = base64url.decode(params); // buraya her zaman base64url string gelmeli
const data = JSON.parse(dataxDecoded);

console.log(`data : ${JSON.stringify(data)}`);
