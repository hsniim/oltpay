// src/data/products.js

export const pulsaProviders = [
  {
    name: 'telkomsel-pulsa',
    title: 'Telkomsel',
    prefixes: ['0811', '0812', '0813', '0821', '0822', '0823', '0851', '0852', '0853'],
    packages: [
      { code: 'S5',    name: '5.000',   desc: 'Pulsa Reguler Telkomsel', price: 6450 },
      { code: 'S10',   name: '10.000',  desc: 'Pulsa Reguler Telkomsel', price: 11400 },
      { code: 'S15',   name: '15.000',  desc: 'Pulsa Reguler Telkomsel', price: 16150 },
      { code: 'S20',   name: '20.000',  desc: 'Pulsa Reguler Telkomsel', price: 21150 },
      { code: 'S25',   name: '25.000',  desc: 'Pulsa Reguler Telkomsel', price: 26100 },
      { code: 'S30',   name: '30.000',  desc: 'Pulsa Reguler Telkomsel', price: 31000 },
      { code: 'S35',   name: '35.000',  desc: 'Pulsa Reguler Telkomsel', price: 36150 },
      { code: 'S40',   name: '40.000',  desc: 'Pulsa Reguler Telkomsel', price: 40900 },
      { code: 'S45',   name: '45.000',  desc: 'Pulsa Reguler Telkomsel', price: 46100 },
      { code: 'S50',   name: '50.000',  desc: 'Pulsa Reguler Telkomsel', price: 51050 },
      { code: 'S55',   name: '55.000',  desc: 'Pulsa Reguler Telkomsel', price: 56200 },
      { code: 'S60',   name: '60.000',  desc: 'Pulsa Reguler Telkomsel', price: 61250 },
      { code: 'S65',   name: '65.000',  desc: 'Pulsa Reguler Telkomsel', price: 66150 },
      { code: 'S70',   name: '70.000',  desc: 'Pulsa Reguler Telkomsel', price: 71200 },
      { code: 'S75',   name: '75.000',  desc: 'Pulsa Reguler Telkomsel', price: 75450 },
      { code: 'S80',   name: '80.000',  desc: 'Pulsa Reguler Telkomsel', price: 81400 },
      { code: 'S85',   name: '85.000',  desc: 'Pulsa Reguler Telkomsel', price: 86400 },
      { code: 'S90',   name: '90.000',  desc: 'Pulsa Reguler Telkomsel', price: 91550 },
      { code: 'S95',   name: '95.000',  desc: 'Pulsa Reguler Telkomsel', price: 96600 },
      { code: 'S100',  name: '100.000', desc: 'Pulsa Reguler Telkomsel', price: 100500 }
    ]
  },
  {
    name: 'indosat-pulsa',
    title: 'Indosat',
    prefixes: ['0814', '0815', '0816', '0855', '0856', '0857', '0858'],
    packages: [
      { code: 'I5P',   name: '5.000',   desc: 'Indosat Mix Transfer Lambat', price: 7100 },
      { code: 'I5',    name: '5.000',   desc: 'Pulsa Reguler Indosat',      price: 7850 },
      { code: 'I10P',  name: '10.000',  desc: 'Indosat Mix Transfer Lambat', price: 12050 },
      { code: 'I10',   name: '10.000',  desc: 'Pulsa Reguler Indosat',      price: 12750 },
      { code: 'I12',   name: '12.000',  desc: 'Pulsa Reguler Indosat',      price: 14350 },
      { code: 'I15P',  name: '15.000',  desc: 'Indosat Mix Transfer Lambat', price: 16800 },
      { code: 'I15',   name: '15.000',  desc: 'Pulsa Reguler Indosat',      price: 17200 },
      { code: 'I20P',  name: '20.000',  desc: 'Indosat Mix Transfer Lambat', price: 21700 },
      { code: 'I20',   name: '20.000',  desc: 'Pulsa Reguler Indosat',      price: 22100 },
      { code: 'I25P',  name: '25.000',  desc: 'Indosat Mix Transfer Lambat', price: 26750 },
      { code: 'I25',   name: '25.000',  desc: 'Pulsa Reguler Indosat',      price: 27150 },
      { code: 'I30P',  name: '30.000',  desc: 'Indosat Mix Transfer Lambat', price: 31800 },
      { code: 'I30',   name: '30.000',  desc: 'Pulsa Reguler Indosat',      price: 32050 },
      { code: 'I40P',  name: '40.000',  desc: 'Indosat Mix Transfer Lambat', price: 41250 },
      { code: 'I40',   name: '40.000',  desc: 'Pulsa Reguler Indosat',      price: 41650 },
      { code: 'I50P',  name: '50.000',  desc: 'Indosat Mix Transfer Lambat', price: 50450 },
      { code: 'I50',   name: '50.000',  desc: 'Pulsa Reguler Indosat',      price: 51400 },
      { code: 'I60',   name: '60.000',  desc: 'Pulsa Reguler Indosat',      price: 61500 },
      { code: 'I70',   name: '70.000',  desc: 'Pulsa Reguler Indosat',      price: 71050 },
      { code: 'I80',   name: '80.000',  desc: 'Pulsa Reguler Indosat',      price: 81400 },
      { code: 'I90',   name: '90.000',  desc: 'Pulsa Reguler Indosat',      price: 91300 },
      { code: 'I100',  name: '100.000', desc: 'Pulsa Reguler Indosat',      price: 100750 }
    ]
  },
  {
    name: 'xl-pulsa',
    title: 'XL',
    prefixes: ['0817', '0818', '0819', '0859', '0877', '0878'],
    packages: [
      { code: 'X5',    name: '5.000',   desc: 'Pulsa Reguler XL', price: 7100 },
      { code: 'X10',   name: '10.000',  desc: 'Pulsa Reguler XL', price: 12100 },
      { code: 'X15',   name: '15.000',  desc: 'Pulsa Reguler XL', price: 16300 },
      { code: 'X25',   name: '25.000',  desc: 'Pulsa Reguler XL', price: 26450 },
      { code: 'X30',   name: '30.000',  desc: 'Pulsa Reguler XL', price: 31400 },
      { code: 'X50',   name: '50.000',  desc: 'Pulsa Reguler XL', price: 51500 },
      { code: 'X100',  name: '100.000', desc: 'Pulsa Reguler XL', price: 101550 }
    ]
  },
  {
    name: 'tri-pulsa',
    title: 'Tri',
    prefixes: ['0895', '0896', '0897', '0898', '0899'],
    packages: [
      { code: 'T5',    name: '5.000',   desc: 'Pulsa Reguler Tri', price: 6500 },
      { code: 'T10',   name: '10.000',  desc: 'Pulsa Reguler Tri', price: 11500 },
      { code: 'T15',   name: '15.000',  desc: 'Pulsa Reguler Tri', price: 17100 },
      { code: 'T20',   name: '20.000',  desc: 'Pulsa Reguler Tri', price: 21100 },
      { code: 'T25',   name: '25.000',  desc: 'Pulsa Reguler Tri', price: 26050 },
      { code: 'T30',   name: '30.000',  desc: 'Pulsa Reguler Tri', price: 31100 },
      { code: 'T40',   name: '40.000',  desc: 'Pulsa Reguler Tri', price: 41100 },
      { code: 'T50',   name: '50.000',  desc: 'Pulsa Reguler Tri', price: 50600 },
      { code: 'T60',   name: '60.000',  desc: 'Pulsa Reguler Tri', price: 60500 },
      { code: 'T70',   name: '70.000',  desc: 'Pulsa Reguler Tri', price: 70300 },
      { code: 'T75',   name: '75.000',  desc: 'Pulsa Reguler Tri', price: 75100 },
      { code: 'T80',   name: '80.000',  desc: 'Pulsa Reguler Tri', price: 79800 },
      { code: 'T90',   name: '90.000',  desc: 'Pulsa Reguler Tri', price: 90300 },
      { code: 'T100',  name: '100.000', desc: 'Pulsa Reguler Tri', price: 98300 }
    ]
  },
  {
    name: 'axis-pulsa',
    title: 'Axis',
    prefixes: ['0831', '0832', '0833', '0838'],
    packages: [
      { code: 'AX5',    name: '5.000',   desc: 'Pulsa Reguler Axis', price: 7100 },
      { code: 'AX10',   name: '10.000',  desc: 'Pulsa Reguler Axis', price: 12150 },
      { code: 'AX15',   name: '15.000',  desc: 'Pulsa Reguler Axis', price: 16350 },
      { code: 'AX25',   name: '25.000',  desc: 'Pulsa Reguler Axis', price: 26500 },
      { code: 'AX30',   name: '30.000',  desc: 'Pulsa Reguler Axis', price: 31550 },
      { code: 'AX50',   name: '50.000',  desc: 'Pulsa Reguler Axis', price: 51700 },
      { code: 'AX100',  name: '100.000', desc: 'Pulsa Reguler Axis', price: 101650 }
    ]
  },
  {
    name: 'smartfren-pulsa',
    title: 'Smartfren',
    prefixes: ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'],
    packages: [
      { code: 'SM5',    name: '5.000',   desc: 'Pulsa Reguler Smartfren', price: 6300 },
      { code: 'SM10',   name: '10.000',  desc: 'Pulsa Reguler Smartfren', price: 11300 },
      { code: 'SM15',   name: '15.000',  desc: 'Pulsa Reguler Smartfren', price: 16450 },
      { code: 'SM20',   name: '20.000',  desc: 'Pulsa Reguler Smartfren', price: 21350 },
      { code: 'SM25',   name: '25.000',  desc: 'Pulsa Reguler Smartfren', price: 26400 },
      { code: 'SM30',   name: '30.000',  desc: 'Pulsa Reguler Smartfren', price: 31500 },
      { code: 'SM50',   name: '50.000',  desc: 'Pulsa Reguler Smartfren', price: 51600 },
      { code: 'SM60',   name: '60.000',  desc: 'Pulsa Reguler Smartfren', price: 61800 },
      { code: 'SM75',   name: '75.000',  desc: 'Pulsa Reguler Smartfren', price: 77000 },
      { code: 'SM100',  name: '100.000', desc: 'Pulsa Reguler Smartfren', price: 102000 }
    ]
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAKET DATA — INJECT (OTOMATIS)
// Kuota langsung aktif setelah transaksi, tanpa perlu aktivasi manual.
// ─────────────────────────────────────────────────────────────────────────────
export const paketDataInjectProviders = [
  {
    name: 'telkomsel-data',
    title: 'Telkomsel',
    prefixes: ['0811', '0812', '0813', '0821', '0822', '0823', '0851', '0852', '0853'],
    subCategories: [
      {
        name: 'tel-data',
        title: 'Telkomsel Data (Flash)',
        packages: [
          { code: 'SDF100', name: '100MB', desc: 'FLASH 100MB 7Hr',  price: 6000 },
          { code: 'SDF250', name: '250MB', desc: 'FLASH 250MB 7Hr',  price: 8050 },
          { code: 'SDF500', name: '500MB', desc: 'FLASH 500MB 15Hr', price: 10050 },
          { code: 'SDF1',   name: '1GB',   desc: 'FLASH 1GB 28Hr',   price: 13100 },
          { code: 'SDF2',   name: '2GB',   desc: 'FLASH 2GB 28Hr',   price: 24150 },
          { code: 'SDF3',   name: '3GB',   desc: 'FLASH 3GB 28Hr',   price: 27150 },
          { code: 'SDF4',   name: '4GB',   desc: 'FLASH 4GB 28Hr',   price: 37250 },
          { code: 'SDF5',   name: '5GB',   desc: 'FLASH 5GB 28Hr',   price: 39250 },
          { code: 'SDF6',   name: '6GB',   desc: 'FLASH 6GB 28Hr',   price: 41300 },
          { code: 'SDF7',   name: '7GB',   desc: 'FLASH 7GB 28Hr',   price: 45300 },
          { code: 'SDF8',   name: '8GB',   desc: 'FLASH 8GB 28Hr',   price: 47350 },
          { code: 'SDF9',   name: '9GB',   desc: 'FLASH 9GB 28Hr',   price: 55400 },
          { code: 'SDF10',  name: '10GB',  desc: 'FLASH 10GB 28Hr',  price: 57400 },
          { code: 'SDF11',  name: '11GB',  desc: 'FLASH 11GB 28Hr',  price: 58400 },
          { code: 'SDF12',  name: '12GB',  desc: 'FLASH 12GB 28Hr',  price: 59400 },
          { code: 'SDF13',  name: '13GB',  desc: 'FLASH 13GB 30Hr',  price: 61450 },
          { code: 'SDF15',  name: '15GB',  desc: 'FLASH 15GB 28Hr',  price: 65450 },
          { code: 'SDF23',  name: '23GB',  desc: 'FLASH 23GB 28Hr',  price: 85600 },
          { code: 'SDF25',  name: '25GB',  desc: 'FLASH 25GB 28Hr',  price: 101700 },
          { code: 'SDF30',  name: '30GB',  desc: 'FLASH 30GB 28Hr',  price: 102700 },
        ],
      },
      {
        name: 'tel-bulk',
        title: 'Telkomsel Data Bulk',
        packages: [
          { code: 'SDB3',  name: '4GB',  desc: 'BULK 3GB + 1GB OMG 30hr',  price: 45850 },
          { code: 'SDB5',  name: '7GB',  desc: 'BULK 5GB + 2GB OMG 30hr',  price: 70400 },
          { code: 'SDB8',  name: '10GB', desc: 'BULK 8GB + 2GB OMG 30hr',  price: 93600 },
          { code: 'SDB12', name: '14GB', desc: 'BULK 12GB + 2GB OMG 30hr', price: 103650 },
          { code: 'SDB25', name: '27GB', desc: 'BULK 25GB + 2GB OMG 30hr', price: 167100 },
          { code: 'SDB50', name: '52GB', desc: 'BULK 50GB + 2GB OMG 30hr', price: 214450 },
        ],
      },
      {
        name: 'tel-bulk-alternatif',
        title: 'Bulk Alternatif',
        packages: [
          { code: 'SDB3A',  name: '4GB',  desc: 'BULK 3GB + 1GB OMG 30hr [Alt]',  price: 57350 },
          { code: 'SDB5A',  name: '7GB',  desc: 'BULK 5GB + 2GB OMG 30hr [Alt]',  price: 89550 },
          { code: 'SDB8A',  name: '10GB', desc: 'BULK 8GB + 2GB OMG 30hr [Alt]',  price: 108700 },
          { code: 'SDB12A', name: '14GB', desc: 'BULK 12GB + 2GB OMG 30hr [Alt]', price: 117750 },
          { code: 'SDB25A', name: '27GB', desc: 'BULK 25GB + 2GB OMG 30hr [Alt]', price: 198300 },
          { code: 'SDB50A', name: '52GB', desc: 'BULK 50GB + 2GB OMG 30hr [Alt]', price: 239600 },
        ],
      },
      {
        name: 'tel-bulk-promo',
        title: 'Bulk Promo',
        packages: [
          { code: 'SDB3P',  name: '4GB',  desc: 'BULK 3GB + 1GB OMG 30hr [Promo]',  price: 40900 },
          { code: 'SDB5P',  name: '7GB',  desc: 'BULK 5GB + 2GB OMG 30hr [Promo]',  price: 66400 },
          { code: 'SDB8P',  name: '10GB', desc: 'BULK 8GB + 2GB OMG 30hr [Promo]',  price: 87600 },
          { code: 'SDB12P', name: '14GB', desc: 'BULK 12GB + 2GB OMG 30hr [Promo]', price: 101700 },
        ],
      },
      {
        name: 'tel-gigamax',
        title: 'Telkomsel Gigamax',
        packages: [
          { code: 'SDG1',  name: '1GB',  desc: '1GB Maxstream 3Hr',   price: 9300 },
          { code: 'SDG5',  name: '5GB',  desc: '5GB Maxstream 3Hr',   price: 16000 },
          { code: 'SDG6',  name: '6GB',  desc: '6GB Maxstream 7Hr',   price: 17000 },
          { code: 'SDG4',  name: '4GB',  desc: '4GB Maxstream 30Hr',  price: 22750 },
          { code: 'SDG10', name: '10GB', desc: '10GB Maxstream 30Hr', price: 33250 },
          { code: 'SDG30', name: '30GB', desc: '30GB Maxstream 30Hr', price: 64850 },
          { code: 'SDG50', name: '50GB', desc: '50GB Maxstream 30Hr', price: 93700 },
        ],
      },
      {
        name: 'tel-reguler',
        title: 'Telkomsel Reguler',
        packages: [
          { code: 'STG5',   name: '20MB-50MB',   desc: 'REG 20MB-50MB 7hr',     price: 8050 },
          { code: 'STG10',  name: '60MB-110MB',  desc: 'REG 60MB-110MB 7hr',    price: 11500 },
          { code: 'STG20',  name: '250MB-400MB', desc: 'REG 250MB-400MB 7hr',   price: 14100 },
          { code: 'STG25',  name: '400MB-500MB', desc: 'REG 400MB-500MB 30hr',  price: 19150 },
          { code: 'STG50',  name: '1GB-1.5GB',   desc: 'REG 1GB-1.5GB 30hr',    price: 36800 },
          { code: 'STG100', name: '5GB',         desc: 'KUOTA 5GB FULL ALL 30hr', price: 97950 },
        ],
      },
      {
        name: 'tel-byu',
        title: 'Telkomsel By.U',
        packages: [
          { code: 'SBDF1',  name: '1GB',  desc: 'BY.U FLASH 1GB 30Hr',    price: 25200 },
          { code: 'SBDF2',  name: '2GB',  desc: 'BY.U FLASH 2GB 14-30Hr', price: 28200 },
          { code: 'SBDF3',  name: '3GB',  desc: 'BY.U FLASH 3GB 14-30Hr', price: 36950 },
          { code: 'SBDF4',  name: '4GB',  desc: 'BY.U FLASH 4GB 30Hr',    price: 31200 },
          { code: 'SBDF5',  name: '5GB',  desc: 'BY.U FLASH 5GB 14-30Hr', price: 37350 },
          { code: 'SBDF6',  name: '6GB',  desc: 'BY.U FLASH 6GB 30Hr',    price: 33250 },
          { code: 'SBDF7',  name: '7GB',  desc: 'BY.U FLASH 7GB 30Hr',    price: 34250 },
          { code: 'SBDF8',  name: '8GB',  desc: 'BY.U FLASH 8GB 30Hr',    price: 36750 },
          { code: 'SBDF9',  name: '9GB',  desc: 'BY.U FLASH 9GB 30Hr',    price: 37250 },
          { code: 'SBDF10', name: '10GB', desc: 'BY.U FLASH 10GB 30Hr',   price: 40300 },
          { code: 'SBDF12', name: '12GB', desc: 'BY.U FLASH 12GB 30Hr',   price: 47950 },
          { code: 'SBDF14', name: '14GB', desc: 'BY.U FLASH 14GB 30Hr',   price: 48350 },
          { code: 'SBDF20', name: '20GB', desc: 'BY.U FLASH 20GB 30Hr',   price: 77550 },
          { code: 'SBDF23', name: '23GB', desc: 'BY.U FLASH 23GB 30Hr',   price: 82600 },
          { code: 'SBDF42', name: '42GB', desc: 'BY.U FLASH 42GB 30Hr',   price: 101850 },
          { code: 'SBDF50', name: '50GB', desc: 'BY.U FLASH 50GB 30Hr',   price: 111800 },
        ],
      },
    ],
  },
  {
    name: 'tri-data',
    title: 'Tri',
    prefixes: ['0895', '0896', '0897', '0898', '0899'],
    subCategories: [
      {
        name: 'tri-data',
        title: 'Tri Data',
        packages: [
          { code: 'TD5',  name: '5GB',  desc: 'KUOTA 5 GB 30hr',  price: 33250 },
          { code: 'TD10', name: '10GB', desc: 'KUOTA 10 GB 30hr', price: 59950 },
        ],
      },
      {
        name: 'tri-aon',
        title: 'Tri Data AON',
        packages: [
          { code: 'TDA2',  name: '2.5GB', desc: 'TRI AON 2.5GB',  price: 25000 },
          { code: 'TDA35', name: '3.5GB', desc: 'TRI AON 3.5GB',  price: 27150 },
          { code: 'TDA3',  name: '3GB',   desc: 'TRI AON 3GB',    price: 26700 },
          { code: 'TDA4',  name: '4GB',   desc: 'TRI AON 4GB',    price: 30200 },
          { code: 'TDA5',  name: '5GB',   desc: 'TRI AON 5GB',    price: 32200 },
          { code: 'TDA6',  name: '6GB',   desc: 'TRI AON 6GB',    price: 34250 },
          { code: 'TDA7',  name: '7GB',   desc: 'TRI AON 7GB',    price: 47700 },
          { code: 'TDA9',  name: '9GB',   desc: 'TRI AON 9GB',    price: 54150 },
          { code: 'TDA8',  name: '8GB',   desc: 'TRI AON 8GB',    price: 51350 },
          { code: 'TDA10', name: '10GB',  desc: 'TRI AON 10GB',   price: 59700 },
          { code: 'TDA12', name: '12GB',  desc: 'TRI AON 12GB',   price: 59850 },
          { code: 'TDA14', name: '14GB',  desc: 'TRI AON 14GB',   price: 67350 },
          { code: 'TDA40', name: '40GB',  desc: 'TRI AON 40GB',   price: 112550 },
        ],
      },
      {
        name: 'tri-bm',
        title: 'Tri Data BM',
        packages: [
          { code: 'TBM3', name: '3GB', desc: 'BM 3GB 7Hr', price: 19550 },
        ],
      },
      {
        name: 'tri-bulk',
        title: 'Tri Data Bulk',
        packages: [
          { code: 'TDB1',  name: '200MB', desc: 'TRI DATA BULK 200MB, 30HR (Gangguan)', price: 2500 },
          { code: 'TDB3',  name: '500MB', desc: 'TRI DATA BULK 500MB, 30HR',            price: 5100 },
          { code: 'TDB5',  name: '1GB',   desc: 'TRI DATA BULK 1GB, 14HR',              price: 7650 },
          { code: 'TDB8',  name: '1.5GB', desc: 'TRI DATA BULK 1.5GB, 14HR',            price: 10050 },
          { code: 'TDB2',  name: '2GB',   desc: 'TRI DATA BULK 2GB 7HR',                price: 12950 },
          { code: 'TDB15', name: '2.5GB', desc: 'TRI DATA BULK 2.5GB, 14HR',            price: 16100 },
          { code: 'TDB13', name: '3GB',   desc: 'TRI DATA BULK 3GB, 30HR',              price: 22750 },
          { code: 'TDB25', name: '4GB',   desc: 'TRI DATA BULK 4GB, 14HR',              price: 26100 },
          { code: 'TDB14', name: '4GB',   desc: 'TRI DATA BULK 4GB, 30HR',              price: 27800 },
          { code: 'TDB28', name: '5GB',   desc: 'TRI DATA BULK 5GB, 30HR',              price: 33250 },
          { code: 'TDB50', name: '10GB',  desc: 'TRI DATA BULK 10GB, 30HR',             price: 57400 },
        ],
      },
      {
        name: 'tri-getmore',
        title: 'Tri Data Getmore',
        packages: [
          { code: 'TGM2', name: '2GB', desc: 'GETMORE 2GB + 2GB Youtube 30Hr', price: 21450 },
          { code: 'TGM3', name: '4GB', desc: 'GETMORE 4GB + 4GB Youtube 30Hr', price: 34250 },
          { code: 'TGM5', name: '5GB', desc: 'GETMORE 5GB + 5GB Youtube 30Hr', price: 39250 },
        ],
      },
      {
        name: 'tri-happy',
        title: 'Tri Data Happy',
        packages: [
          { code: 'TDP3',   name: '3GB',   desc: 'TRI HAPPY 3GB 14HR',               price: 22950 },
          { code: 'TDP7',   name: '7GB',   desc: 'TRI HAPPY 7GB 28HR',               price: 33600 },
          { code: 'TDP6',   name: '6GB',   desc: 'TRI HAPPY 6GB 28HR (Gangguan)',     price: 33850 },
          { code: 'TDP10',  name: '10GB',  desc: 'TRI HAPPY 10GB 28HR',              price: 36850 },
          { code: 'TDP9',   name: '9GB',   desc: 'TRI HAPPY 9GB 28HR',               price: 36400 },
          { code: 'TDP14',  name: '14GB',  desc: 'TRI HAPPY 14GB 28HR',              price: 48200 },
          { code: 'TDP11',  name: '11GB',  desc: 'TRI HAPPY 11GB 28HR',              price: 43300 },
          { code: 'TDP12',  name: '12GB',  desc: 'TRI HAPPY 12GB 28HR (Gangguan)',   price: 47500 },
          { code: 'TDP15',  name: '15GB',  desc: 'TRI HAPPY 15GB 28HR',              price: 49200 },
          { code: 'TDP18',  name: '18GB',  desc: 'TRI HAPPY 18GB 28HR',              price: 51250 },
          { code: 'TDP20',  name: '20GB',  desc: 'TRI HAPPY 20GB 28HR',              price: 57350 },
          { code: 'TDP25',  name: '25GB',  desc: 'TRI HAPPY 25GB 28HR',              price: 65750 },
          { code: 'TDP30',  name: '30GB',  desc: 'TRI HAPPY 30GB 28HR',              price: 72000 },
          { code: 'TDP42',  name: '42GB',  desc: 'TRI HAPPY 42GB 28HR',              price: 76100 },
          { code: 'TDP55',  name: '55GB',  desc: 'TRI HAPPY 55GB 28HR',              price: 93650 },
          { code: 'TDP100', name: '100GB', desc: 'TRI HAPPY 100GB 28HR',             price: 119250 },
        ],
      },
      {
        name: 'tri-happy-mini',
        title: 'Tri Data Happy Mini',
        packages: [
          { code: 'TDH1M', name: '1.5GB', desc: 'TRI HAPPY 1.5GB, 1HR', price: 6950 },
          { code: 'TDH2',  name: '2.5GB', desc: 'TRI HAPPY 2.5GB, 1HR', price: 7500 },
          { code: 'TDH1',  name: '1GB',   desc: 'TRI HAPPY 1GB, 3HR',   price: 8400 },
          { code: 'TDH31', name: '3GB',   desc: 'TRI HAPPY 3GB, 1HR',   price: 9350 },
          { code: 'TDH3',  name: '3GB',   desc: 'TRI HAPPY 3GB, 3HR',   price: 13050 },
          { code: 'TDH53', name: '5GB',   desc: 'TRI HAPPY 5GB, 3HR',   price: 15100 },
          { code: 'TDH35', name: '3.5GB', desc: 'TRI HAPPY 3.5GB, 5HR', price: 16550 },
          { code: 'TDH4',  name: '4,5GB', desc: 'TRI HAPPY 4,5GB 5HR',  price: 16950 },
          { code: 'TDH6',  name: '6GB',   desc: 'TRI HAPPY 6GB 5HR',    price: 20450 },
          { code: 'TDH5',  name: '5GB',   desc: 'TRI HAPPY 5GB 7HR',    price: 22000 },
          { code: 'TDH97', name: '9GB',   desc: 'TRI HAPPY 9GB, 7HR',   price: 24250 },
          { code: 'TDH10', name: '10GB',  desc: 'TRI HAPPY 10GB, 7HR',  price: 24250 },
          { code: 'TDH15', name: '15GB',  desc: 'TRI HAPPY 15GB 7HR',   price: 29100 },
          { code: 'TDH9',  name: '9GB',   desc: 'TRI HAPPY 9GB, 10HR',  price: 36900 },
        ],
      },
      {
        name: 'tri-reguler',
        title: 'Tri Data Reguler',
        packages: [
          { code: 'TDR80', name: '80MB',   desc: 'REGULER 80MB',   price: 6500 },
          { code: 'TDR30', name: '300MB',  desc: 'REGULER 300MB',  price: 11350 },
          { code: 'TDR65', name: '650MB',  desc: 'REGULER 650MB',  price: 21750 },
          { code: 'TDR12', name: '1.25GB', desc: 'REGULER 1.25GB', price: 34300 },
          { code: 'TDR42', name: '4.25GB', desc: 'REGULER 4.25GB', price: 82500 },
        ],
      },
      {
        name: 'tri-unlimited',
        title: 'Tri Data Unlimited',
        packages: [
          { code: 'TDL6',  name: '6GB+20GB', desc: '6GB + Unlimited App (00:00-17:00) 30Hr', price: 75550 },
          { code: 'TDL22', name: '42GB',     desc: '30GB + 12GB Kuota Lokal 28Hr',            price: 76050 },
        ],
      },
    ],
  },
  {
    name: 'indosat-data',
    title: 'Indosat Ooredoo',
    prefixes: ['0814', '0815', '0816', '0855', '0856', '0857', '0858'],
    subCategories: [
      {
        name: 'indosat-harian',
        title: 'Indosat Data Harian',
        packages: [
          { code: 'IDA12',  name: '1GB',   desc: 'Kuota 1GB 2Hr',   price: 7300 },
          { code: 'IDA11',  name: '1.5GB', desc: 'Kuota 1.5GB 1Hr', price: 8250 },
          { code: 'IDA31',  name: '3GB',   desc: 'Kuota 3GB 1Hr',   price: 8475 },
          { code: 'IDA21',  name: '2GB',   desc: 'Kuota 2GB 1Hr',   price: 11450 },
          { code: 'IDA13',  name: '1.5GB', desc: 'Kuota 1.5GB 3Hr', price: 9950 },
          { code: 'IDA52',  name: '5GB',   desc: 'Kuota 5GB 2Hr',   price: 10800 },
          { code: 'IDA33',  name: '3GB',   desc: 'Kuota 3GB 3Hr',   price: 13050 },
          { code: 'IDA25',  name: '2.5GB', desc: 'Kuota 2.5GB 5Hr', price: 14050 },
          { code: 'IDA53',  name: '5GB',   desc: 'Kuota 5GB 3Hr',   price: 14080 },
          { code: 'IDA35',  name: '3.5GB', desc: 'Kuota 3.5GB 5Hr', price: 15100 },
          { code: 'IDA55',  name: '5GB',   desc: 'Kuota 5GB 5Hr',   price: 18600 },
          { code: 'IDA77',  name: '7GB',   desc: 'Kuota 7GB 7Hr',   price: 24150 },
          { code: 'IDA157', name: '15GB',  desc: 'Kuota 15GB 7Hr',  price: 31200 },
          { code: 'IDA155', name: '15GB',  desc: 'Kuota 15GB 5Hr',  price: 29990 },
        ],
      },
      {
        name: 'indosat-pure',
        title: 'Indosat Data Pure',
        packages: [
          { code: 'ID500', name: '500MB', desc: 'PURE 500MB 30Hr (Gangguan)', price: 5425 },
          { code: 'ID1',   name: '1GB',   desc: 'PURE 1GB 14Hr',              price: 9475 },
          { code: 'ID2',   name: '2GB',   desc: 'PURE 2GB 7Hr',               price: 17680 },
          { code: 'ID3',   name: '3GB',   desc: 'PURE 3GB 30Hr',              price: 24150 },
          { code: 'ID4',   name: '4GB',   desc: 'PURE 4GB 30Hr',              price: 32200 },
          { code: 'ID5',   name: '5GB',   desc: 'PURE 5GB 30Hr',              price: 35225 },
          { code: 'ID6',   name: '6GB',   desc: 'PURE 6GB 30Hr',              price: 38250 },
          { code: 'ID7',   name: '7GB',   desc: 'PURE 7GB 30Hr',              price: 41250 },
          { code: 'ID8',   name: '8GB',   desc: 'PURE 8GB 30Hr',              price: 45450 },
          { code: 'ID9',   name: '9GB',   desc: 'PURE 9GB 30Hr',              price: 55350 },
          { code: 'ID10',  name: '10GB',  desc: 'PURE 10GB 30Hr',             price: 57350 },
        ],
      },
      {
        name: 'indosat-reguler',
        title: 'Indosat Data Reguler',
        packages: [
          { code: 'IDN1M', name: '1GB+2GB',   desc: '1GB + 2GB Apps 6Hr',                             price: 16825 },
          { code: 'IDN1',  name: '1GB+4.5GB', desc: '1GB + 4.5GB Apps 28Hr',                          price: 34975 },
          { code: 'IDN2',  name: '2GB',       desc: '2GB + 8GB Apps 28Hr',                            price: 58750 },
          { code: 'IDN3',  name: '3GB+17GB',  desc: '3GB + 17GB Apps, Youtube + SMS Sesama 28Hr',     price: 81750 },
          { code: 'IDN7',  name: '7GB',       desc: '7GB + 28GB Apps, Youtube + SMS Sesama 28Hr',     price: 103750 },
        ],
      },
      {
        name: 'indosat-freedom',
        title: 'Indosat Freedom',
        packages: [
          { code: 'IDF2',  name: '2GB',   desc: 'Freedom 2GB 14Hr',  price: 21200 },
          { code: 'IDF3',  name: '3GB',   desc: 'Freedom 3GB 14Hr',  price: 21750 },
          { code: 'IDF4',  name: '4GB',   desc: 'Freedom 4GB 20Hr',  price: 29200 },
          { code: 'IDF5',  name: '5.5GB', desc: 'Freedom 5.5GB 28Hr', price: 32900 },
          { code: 'IDF8',  name: '8GB',   desc: 'Freedom 8GB 28Hr',  price: 39250 },
          { code: 'IDF6',  name: '6.5GB', desc: 'Freedom 6.5GB 28Hr', price: 35225 },
          { code: 'IDF7',  name: '7GB',   desc: 'Freedom 7GB 28Hr',  price: 37250 },
          { code: 'IDF12', name: '12GB',  desc: 'Freedom 12GB 28Hr', price: 47300 },
          { code: 'IDF9',  name: '9GB',   desc: 'Freedom 9GB 28Hr',  price: 41250 },
          { code: 'IDF10', name: '10GB',  desc: 'Freedom 10GB 28Hr', price: 43275 },
          { code: 'IDF14', name: '14GB',  desc: 'Freedom 14GB 28Hr', price: 56350 },
          { code: 'IDF13', name: '13GB',  desc: 'Freedom 13GB 28Hr', price: 54350 },
          { code: 'IDF16', name: '16GB',  desc: 'Freedom 16GB 28Hr', price: 59390 },
          { code: 'IDF20', name: '20GB',  desc: 'Freedom 20GB 28Hr', price: 68450 },
          { code: 'IDF18', name: '18GB',  desc: 'Freedom 18GB 28Hr', price: 63400 },
          { code: 'IDF25', name: '25GB',  desc: 'Freedom 25GB 28Hr', price: 77550 },
          { code: 'IDF30', name: '30GB',  desc: 'Freedom 30GB 28Hr', price: 89650 },
          { code: 'IDF28', name: '28GB',  desc: 'Freedom 28GB 28Hr', price: 85600 },
          { code: 'IDF42', name: '42GB',  desc: 'Freedom 42GB 28Hr', price: 97650 },
          { code: 'IDF45', name: '45GB',  desc: 'Freedom 45GB 28Hr', price: 101700 },
        ],
      },
      {
        name: 'indosat-freedom-combo',
        title: 'Indosat Freedom Combo',
        packages: [
          { code: 'IFC2',  name: '4GB',  desc: '3GB + 1GB Malam 28Hr (Gangguan)', price: 32100 },
          { code: 'IFC1',  name: '6GB',  desc: '4GB + 2GB Malam 28Hr',            price: 37650 },
          { code: 'IFC3',  name: '10GB', desc: '7GB + 3GB Malam 28Hr',            price: 50750 },
          { code: 'IFC5',  name: '20GB', desc: '15GB + 5GB Malam 28Hr',           price: 76350 },
          { code: 'IFC10', name: '30GB', desc: '23GB + 7GB Malam 28Hr',           price: 97650 },
        ],
      },
      {
        name: 'indosat-yellow',
        title: 'Indosat Yellow',
        packages: [
          { code: 'IDH1',  name: '1GB', desc: 'YELLOW 1GB 1Hr',  price: 6700 },
          { code: 'IDH2',  name: '1GB', desc: 'YELLOW 1GB 2Hr',  price: 6950 },
          { code: 'IDH3',  name: '1GB', desc: 'YELLOW 1GB 3Hr',  price: 8050 },
          { code: 'IDH7',  name: '1GB', desc: 'YELLOW 1GB 7Hr',  price: 11650 },
          { code: 'IDH15', name: '1GB', desc: 'YELLOW 1GB 15Hr', price: 14500 },
        ],
      },
    ],
  },
  {
    name: 'xl-data',
    title: 'XL',
    prefixes: ['0817', '0818', '0819', '0859', '0877', '0878'],
    subCategories: [
      {
        name: 'xl-data',
        title: 'XL Data Flat',
        packages: [
          { code: 'XDF100', name: '100MB', desc: 'FLAT 100MB 28HR', price: 4050 },
          { code: 'XDF500', name: '500MB', desc: 'FLAT 500MB 28HR', price: 6050 },
          { code: 'XDF800', name: '800MB', desc: 'FLAT 800MB 28HR', price: 8050 },
          { code: 'XDF1',   name: '1GB',   desc: 'FLAT 1GB 30HR',  price: 10050 },
          { code: 'XDF2',   name: '2GB',   desc: 'FLAT 2GB 30HR',  price: 16100 },
          { code: 'XDF3',   name: '3GB',   desc: 'FLAT 3GB 30HR',  price: 24150 },
          { code: 'XDF4',   name: '4GB',   desc: 'FLAT 4GB 30HR',  price: 31200 },
          { code: 'XDF5',   name: '5GB',   desc: 'FLAT 5GB 30HR',  price: 38250 },
          { code: 'XDF6',   name: '6GB',   desc: 'FLAT 6GB 30HR',  price: 45300 },
          { code: 'XDF7',   name: '7GB',   desc: 'FLAT 7GB 30HR',  price: 54350 },
          { code: 'XDF10',  name: '10GB',  desc: 'FLAT 10GB 30HR', price: 67450 },
          { code: 'XDF14',  name: '14GB',  desc: 'FLAT 14GB 28HR', price: 69480 },
          { code: 'XDF8',   name: '8GB',   desc: 'FLAT 8GB 30HR',  price: 63450 },
          { code: 'XDF18',  name: '18GB',  desc: 'FLAT 18GB 28HR', price: 74500 },
          { code: 'XDF9',   name: '9GB',   desc: 'FLAT 9GB 30HR',  price: 65650 },
        ],
      },
      {
        name: 'xl-combo-flex',
        title: 'XL Combo Flex',
        packages: [
          { code: 'XCF1',  name: '3.5GB',    desc: '3.5GB + 5Mnt Tlp, 14Hr (FLEX S)',                       price: 25750 },
          { code: 'XCF12', name: '3GB-7GB',  desc: '3GB+UpTo 7GB Lokal + 5Mnt Tlp, 28Hr (FLEX S+)',        price: 35225 },
          { code: 'XCF2',  name: '4GB-10GB', desc: '4GB+UpTo 10GB Lokal + 5Mnt Tlp, 28Hr (FLEX M)',        price: 49770 },
          { code: 'XCF26', name: '6GB-12GB', desc: '6GB+UpTo 12GB Lokal + 5Mnt Tlp, 28Hr (FLEX M+)',       price: 57450 },
          { code: 'XCF3',  name: '9GB-18GB', desc: '9GB+UpTo 18GB Lokal + 5Mnt Tlp, 28Hr (FLEX L)',        price: 66450 },
          { code: 'XCF11', name: '11GB-23GB', desc: '11GB+UpTo 23GB Lokal + 5Mnt Tlp, 28Hr (FLEX L+)',     price: 78000 },
          { code: 'XCF4',  name: '15GB-30GB', desc: '15GB+UpTo 30GB Lokal + 5Mnt Tlp, 28Hr (FLEX XL)',     price: 94800 },
        ],
      },
      {
        name: 'xl-combo-xtra',
        title: 'XL Combo Xtra',
        packages: [
          { code: 'XCX5',  name: '15GB', desc: 'COMBO XTRA 5GB+10GB ytb + 20mnt Telp. 28Hr', price: 61425 },
          { code: 'XCX10', name: '30GB', desc: 'COMBO XTRA 10GB+20GB ytb + 30mnt Telp. 28Hr', price: 90200 },
        ],
      },
      {
        name: 'xl-hotrod',
        title: 'XL HotRod',
        packages: [
          { code: 'XH5',   name: '500MB', desc: 'HotRod 500MB 7hr',            price: 6050 },
          { code: 'XH8',   name: '1GB',   desc: 'HotRod 1GB 2hr (Gangguan)',   price: 6300 },
          { code: 'XH30',  name: '800MB', desc: 'HotRod 800MB 30hr',           price: 8950 },
          { code: 'XH10',  name: '1GB',   desc: 'HotRod 1GB 7hr',              price: 9150 },
          { code: 'XH13',  name: '1.5GB', desc: 'HotRod 1.5B 3hr',            price: 11200 },
          { code: 'XH7',   name: '2GB',   desc: 'HotRod 2GB 7hr',              price: 16200 },
          { code: 'XH20',  name: '3GB',   desc: 'HotRod 3GB 7hr',              price: 19160 },
          { code: 'XH45',  name: '1.5GB', desc: 'HotRod 1.5GB 30hr',          price: 20600 },
          { code: 'XH54',  name: '3GB',   desc: 'HotRod 3GB 30hr',             price: 26700 },
          { code: 'XH90',  name: '6GB',   desc: 'HotRod 6GB 30hr',             price: 49900 },
          { code: 'XH117', name: '8GB',   desc: 'HotRod 8GB 30hr',             price: 64350 },
          { code: 'XH162', name: '12GB',  desc: 'HotRod 12GB 30hr',            price: 95000 },
        ],
      },
    ],
  },
  {
    name: 'axis-data',
    title: 'Axis',
    prefixes: ['0831', '0832', '0833', '0838'],
    subCategories: [
      {
        name: 'axis-bronet-harian',
        title: 'Axis Bronet Harian',
        packages: [
          { code: 'AXA1',  name: '1GB', desc: 'BRONET 1GB 1Hr', price: 7250 },
          { code: 'AXA2',  name: '2GB', desc: 'BRONET 2GB 1Hr', price: 9050 },
          { code: 'AXA3',  name: '3GB', desc: 'BRONET 3GB 1Hr', price: 10050 },
          { code: 'AXA5',  name: '5GB', desc: 'BRONET 5GB 1Hr', price: 12080 },
          { code: 'AXA13', name: '1GB', desc: 'BRONET 1GB 3Hr', price: 12050 },
          { code: 'AXA23', name: '2GB', desc: 'BRONET 2GB 3Hr', price: 15100 },
          { code: 'AXA33', name: '3GB', desc: 'BRONET 3GB 3Hr', price: 17100 },
          { code: 'AXA53', name: '5GB', desc: 'BRONET 5GB 3Hr', price: 21150 },
          { code: 'AXA17', name: '1GB', desc: 'BRONET 1GB 7Hr', price: 19650 },
          { code: 'AXA27', name: '2GB', desc: 'BRONET 2GB 7Hr', price: 23150 },
          { code: 'AXA37', name: '3GB', desc: 'BRONET 3GB 7Hr', price: 26200 },
          { code: 'AXA57', name: '5GB', desc: 'BRONET 5GB 7Hr', price: 32250 },
        ],
      },
      {
        name: 'axis-bronet-24jam',
        title: 'Axis Bronet 24 Jam',
        packages: [
          { code: 'AXB1',  name: '1GB',  desc: 'BRONET 1GB 30Hr',  price: 22150 },
          { code: 'AXB2',  name: '2GB',  desc: 'BRONET 2GB 30Hr',  price: 32200 },
          { code: 'AXB3',  name: '3GB',  desc: 'BRONET 3GB 30Hr',  price: 42300 },
          { code: 'AXB5',  name: '5GB',  desc: 'BRONET 5GB 30Hr',  price: 62450 },
          { code: 'AXB8',  name: '8GB',  desc: 'BRONET 8GB 30Hr',  price: 84600 },
          { code: 'AXB10', name: '10GB', desc: 'BRONET 10GB 30Hr', price: 96700 },
        ],
      },
      {
        name: 'axis-owsem',
        title: 'Axis OWSEM',
        packages: [
          { code: 'AXO16', name: '16GB', desc: 'OWSEM 2GB+2GB Games/Music+12GB Malam, 30Hr', price: 45300 },
          { code: 'AXO24', name: '24GB', desc: 'OWSEM 3GB+3GB Games/Music+18GB Malam, 30Hr', price: 56400 },
          { code: 'AXO40', name: '40GB', desc: 'OWSEM 5GB+5GB Games/Music+30GB Malam, 30Hr', price: 82600 },
          { code: 'AXO64', name: '64GB', desc: 'OWSEM 8GB+8GB Games/Music+48GB Malam, 30Hr', price: 105750 },
        ],
      },
      {
        name: 'axis-warnet',
        title: 'Axis Warnet',
        packages: [
          { code: 'AXW1', name: '1GB', desc: 'WARNET 1GB 1Jam', price: 2050 },
          { code: 'AXW2', name: '2GB', desc: 'WARNET 2GB 2Jam', price: 3550 },
          { code: 'AXW3', name: '3GB', desc: 'WARNET 3GB 3Jam', price: 4550 },
        ],
      },
    ],
  },
  {
    name: 'smartfren-data',
    title: 'Smartfren',
    prefixes: ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'],
    subCategories: [
      {
        name: 'sf-nonstop',
        title: 'Smartfren Data Nonstop',
        packages: [
          { code: 'SMN2',  name: '2GB',  desc: 'NONSTOP 2GB + Unlimited APK 10Hr',              price: 13850 },
          { code: 'SMN3',  name: '3GB',  desc: 'NONSTOP 3GB + Unlimited APK 14Hr',              price: 20400 },
          { code: 'SMN4',  name: '4GB',  desc: 'NONSTOP 4GB + Unlimited APK 14Hr',              price: 20450 },
          { code: 'SMN5',  name: '5GB',  desc: 'NONSTOP 5GB + Unlimited APK 30Hr',              price: 35050 },
          { code: 'SMN10', name: '10GB', desc: 'NONSTOP 10GB 28Hr',                              price: 40700 },
          { code: 'SMN15', name: '15GB', desc: 'NONSTOP 15GB + Unlimited APK 30Hr',             price: 55200 },
          { code: 'SMN20', name: '20GB', desc: 'NONSTOP 20GB 28Hr',                              price: 58980 },
          { code: 'SMN35', name: '35GB', desc: 'NONSTOP 35GB 30Hr',                              price: 80550 },
          { code: 'SMN30', name: '30GB', desc: 'NONSTOP 30GB + Unlimited APK 30Hr (Gangguan)',  price: 79550 },
          { code: 'SMN45', name: '45GB', desc: 'NONSTOP 45GB + Unlimited APK 28Hr',             price: 117150 },
        ],
      },
      {
        name: 'sf-unlimited',
        title: 'Smartfren Data Unlimited',
        packages: [
          { code: 'SMU1N', name: 'Unlimited', desc: 'UNLIMITED 4G 1HR (FUP 1GB/HR)',      price: 9950 },
          { code: 'SMU1',  name: 'Unlimited', desc: 'UNLIMITED 4G 3HR (FUP 1GB/HR)',      price: 15800 },
          { code: 'SMU2',  name: 'Unlimited', desc: 'UNLIMITED 4G 7HR (FUP 1GB/HR)',      price: 25680 },
          { code: 'SMU72', name: 'Unlimited', desc: 'UNLIMITED 4G 7HR (FUP 2GB/HR)',      price: 29360 },
          { code: 'SMU3',  name: 'Unlimited', desc: 'UNLIMITED 4G 14HR (FUP 1GB/HR)',     price: 49650 },
          { code: 'SMU4',  name: 'Unlimited', desc: 'UNLIMITED 4G 28HR (FUP 500MB/HR)',   price: 74550 },
          { code: 'SMU5',  name: 'Unlimited', desc: 'UNLIMITED 4G 28HR (FUP 1GB/HR)',     price: 75550 },
          { code: 'SMU6',  name: 'Unlimited', desc: 'UNLIMITED 4G 28HR (FUP 2GB/HR)',     price: 92250 },
        ],
      },
      {
        name: 'sf-volume',
        title: 'Smartfren Data Volume',
        packages: [
          { code: 'SMV12', name: '3GB',  desc: 'VOLUME 500MB + 1.5GB Malam + 500MB Chat 3Hr',        price: 11000 },
          { code: 'SMV10', name: '3GB',  desc: 'VOLUME 1.25GB + 1.75GB Malam + 1GB Chat 7Hr',        price: 16550 },
          { code: 'SMV22', name: '4GB',  desc: 'VOLUME 2GB + 2GB Malam + 2GB Chat 7Hr',              price: 16760 },
          { code: 'SMV30', name: '10GB', desc: 'VOLUME 4GB + 4GB Malam + 1-2GB Chat 30Hr',           price: 31750 },
          { code: 'SMV20', name: '6GB',  desc: 'VOLUME 2GB + 3GB Malam + 1GB Chat 30Hr',             price: 34150 },
          { code: 'SMV25', name: '8GB',  desc: 'VOLUME 3GB + 5GB Malam + 3GB Chat 30Hr',             price: 35650 },
          { code: 'SMV31', name: '16GB', desc: 'VOLUME 6GB + 10GB Malam + 6GB Chat 30Hr',            price: 37720 },
          { code: 'SMV33', name: '30GB', desc: 'VOLUME 10GB + 20GB Malam 30Hr',                      price: 70450 },
          { code: 'SMV35', name: '60GB', desc: 'VOLUME 20GB + 40GB Malam + Telp. 30Hr',              price: 110350 },
        ],
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAKET DATA — VOUCHER (MANUAL)
// Aktivasi mandiri dengan kode *133*KODEAKTIVASI# setelah menerima SN.
// Kode aktivasi (SN) dikirim via WhatsApp setelah pesanan diproses.
// Tambahkan provider baru di sini jika ada voucher data dari operator lain.
// ─────────────────────────────────────────────────────────────────────────────
export const paketDataVoucherProviders = [
  {
    name: 'telkomsel-data',
    title: 'Telkomsel',
    prefixes: ['0811', '0812', '0813', '0821', '0822', '0823', '0851', '0852', '0853'],
    subCategories: [
      {
        name: 'tel-voc-nasional',
        title: 'Voucher Nasional',
        packages: [
          { code: 'VSDFN100', name: '100MB', desc: 'VOUCHER FLASH 100MB 7Hr',  price: 7000 },
          { code: 'VSDFN250', name: '250MB', desc: 'VOUCHER FLASH 250MB 7Hr',  price: 9000 },
          { code: 'VSDFN500', name: '500MB', desc: 'VOUCHER FLASH 500MB 15Hr', price: 11000 },
          { code: 'VSDFN1',   name: '1GB',   desc: 'VOUCHER FLASH 1GB 28Hr',   price: 14000 },
          { code: 'VSDFN2',   name: '2GB',   desc: 'VOUCHER FLASH 2GB 28Hr',   price: 25000 },
          { code: 'VSDFN3',   name: '3GB',   desc: 'VOUCHER FLASH 3GB 28Hr',   price: 28000 },
          { code: 'VSDFN4',   name: '4GB',   desc: 'VOUCHER FLASH 4GB 28Hr',   price: 38000 },
          { code: 'VSDFN5',   name: '5GB',   desc: 'VOUCHER FLASH 5GB 28Hr',   price: 40000 },
          { code: 'VSDFN7',   name: '7GB',   desc: 'VOUCHER FLASH 7GB 28Hr',   price: 46000 },
          { code: 'VSDFN10',  name: '10GB',  desc: 'VOUCHER FLASH 10GB 28Hr',  price: 59000 },
          { code: 'VSDFN14',  name: '14GB',  desc: 'VOUCHER FLASH 14GB 28Hr',  price: 72000 },
          { code: 'VSDFN25',  name: '25GB',  desc: 'VOUCHER FLASH 25GB 28Hr',  price: 105000 },
          { code: 'VSDFN30',  name: '30GB',  desc: 'VOUCHER FLASH 30GB 28Hr',  price: 106000 },
        ],
      },
      {
        name: 'tel-voc-jabar',
        title: 'Voucher Lokal Jabar',
        packages: [
          { code: 'VSDB1M', name: '1.5GB', desc: 'VOUCHER 0.5GB + 1GB Lokal Jabar 3Hr',          price: 9800 },
          { code: 'VSDB1',  name: '2.5GB', desc: 'VOUCHER 1GB + 1.5GB Lokal Jabar 5Hr',          price: 13380 },
          { code: 'VSDB3',  name: '3.5GB', desc: 'VOUCHER 1.5GB + 2GB Lokal Jabar 7Hr',          price: 21125 },
          { code: 'VSDB5',  name: '5GB',   desc: 'VOUCHER 1GB + 4GB Lokal JabarJabo 30Hr',       price: 28150 },
          { code: 'VSDB6',  name: '10GB',  desc: 'VOUCHER 2GB + 2GB OMG + 6GB Lokal Jabar 30Hr', price: 65025 },
          { code: 'VSDB9',  name: '14GB',  desc: 'VOUCHER 3GB + 2GB OMG + 9GB Lokal Jabar 30Hr', price: 78050 },
        ],
      },
      {
        name: 'tel-voc-jabodetabek',
        title: 'Voucher Lokal Jabodetabek',
        packages: [
          { code: 'VSDA1', name: '2.5GB', desc: 'VOUCHER 1GB + 1.5GB Lokal Jabodetabek 5Hr',          price: 13750 },
          { code: 'VSDA3', name: '3.5GB', desc: 'VOUCHER 1.5GB + 2GB Lokal Jabodetabek 7Hr',          price: 20900 },
          { code: 'VSDA6', name: '10GB',  desc: 'VOUCHER 2GB + 2GB OMG + 6GB Lokal Jabodetabek 30Hr', price: 67600 },
          { code: 'VSDA9', name: '14GB',  desc: 'VOUCHER 3GB + 2GB OMG + 9GB Lokal Jabodetabek 30Hr', price: 79300 },
        ],
      },
      {
        name: 'tel-voc-jateng',
        title: 'Voucher Lokal Jateng DIY',
        packages: [
          { code: 'VSDY1M', name: '1.5GB', desc: 'VOUCHER 1GB + 0.5GB Lokal Jateng DIY 5Hr',          price: 12700 },
          { code: 'VSDY1',  name: '2.5GB', desc: 'VOUCHER 1GB + 1.5GB Lokal Jateng DIY 5Hr',          price: 14875 },
          { code: 'VSDY4',  name: '5GB',   desc: 'VOUCHER 1GB + 4GB Lokal Jateng DIY 5Hr',            price: 16725 },
          { code: 'VSDY3',  name: '3.5GB', desc: 'VOUCHER 1.5GB + 2GB Lokal Jateng DIY 7Hr',          price: 21000 },
          { code: 'VSDY5',  name: '9GB',   desc: 'VOUCHER 3GB + 6GB Lokal Jateng DIY 30Hr',           price: 40525 },
          { code: 'VSDY6',  name: '10GB',  desc: 'VOUCHER 2GB + 2GB OMG + 6GB Lokal Jateng DIY 30Hr', price: 65675 },
          { code: 'VSDY9',  name: '14GB',  desc: 'VOUCHER 3GB + 2GB OMG + 9GB Lokal Jateng DIY 30Hr', price: 80550 },
        ],
      },
      {
        name: 'tel-voc-jatim',
        title: 'Voucher Lokal Jatim',
        packages: [
          { code: 'VSDT1', name: '2.5GB', desc: 'VOUCHER 1GB + 1.5GB Lokal Jatim 5Hr',               price: 14475 },
          { code: 'VSDT2', name: '3GB',   desc: 'VOUCHER 0.5GB + 2.5GB Lokal Jatim 3Hr',             price: 14525 },
          { code: 'VSDT3', name: '3.5GB', desc: 'VOUCHER 1.5GB + 2GB Lokal Jatim 7Hr',               price: 21100 },
          { code: 'VSDT4', name: '4GB',   desc: 'VOUCHER 0.5GB + 1.5GB + 2GB OMG Lokal Jatim 30Hr',  price: 40250 },
          { code: 'VSDT5', name: '18GB',  desc: 'VOUCHER 3GB + 15GB Lokal Jatim 30Hr',               price: 52850 },
          { code: 'VSDT6', name: '10GB',  desc: 'VOUCHER 2GB + 6GB Lokal + 2GB OMG Jatim 30Hr',      price: 64140 },
          { code: 'VSDT7', name: '26GB',  desc: 'VOUCHER 5GB + 21GB Lokal Jatim 30Hr',               price: 67100 },
          { code: 'VSDT8', name: '28GB',  desc: 'VOUCHER 4GB + 24GB Lokal Jatim 30Hr',               price: 73800 },
          { code: 'VSDT9', name: '13GB',  desc: 'VOUCHER 3GB + 9GB Lokal + 2GB OMG Jatim 30Hr',      price: 77600 },
        ],
      },
    ],
  },
  {
    name: 'indosat-data',
    title: 'Indosat',
    prefixes: ['0814', '0815', '0816', '0855', '0856', '0857', '0858'],
    subCategories: [
      {
        name: 'ids-data-reguler',
        title: 'Indosat Data Reguler',
        packages: [
          { code: 'VIDN1',  name: '5.5GB',     desc: 'Voucher 1GB + 4.5GB Apps 30hr',    price: 37500 },
          { code: 'VIDN2',  name: '9.5GB',     desc: 'Voucher 2GB + 7.5GB Apps 30hr',    price: 58850 },
          { code: 'VIDN7',  name: '35GB',      desc: 'Voucher 7GB + 28GB Apps 30hr',     price: 104200 },
          { code: 'VIDN10', name: '45GB',      desc: 'Voucher 10GB + 35GB Apps 30hr',    price: 115850 },
          { code: 'VIDN99', name: 'Unlimited', desc: 'Voucher Jumbo 90GB 30hr',          price: 156150 },
        ],
      },
      {
        name: 'ids-freedom',
        title: 'Indosat Freedom',
        packages: [
          { code: 'VIDF3',  name: '3GB',  desc: 'Voucher Freedom 3GB 28Hr',  price: 25200 },
          { code: 'VIDF7',  name: '7GB',  desc: 'Voucher Freedom 7GB 28Hr',  price: 36850 },
          { code: 'VIDF9',  name: '9GB',  desc: 'Voucher Freedom 9GB 28Hr',  price: 49350 },
          { code: 'VIDF20', name: '20GB', desc: 'Voucher Freedom 20GB 30Hr', price: 67850 },
          { code: 'VIDF30', name: '30GB', desc: 'Voucher Freedom 30GB 30Hr', price: 97750 },
        ],
      },
      {
        name: 'ids-freedom-harian',
        title: 'Indosat Freedom Harian',
        packages: [
          { code: 'VIDFH1',  name: '1.5GB', desc: 'Voucher Freedom 1.5GB 1Hr',       price: 8450 },
          { code: 'VIDFH2',  name: '2,5GB', desc: 'Voucher Freedom 2,5GB 5Hr',       price: 14800 },
          { code: 'VIDFH3',  name: '3,5GB', desc: 'Voucher Freedom 3,5GB 5Hr',       price: 15500 },
          { code: 'VIDFH5',  name: '5GB',   desc: 'Voucher Freedom 5GB 5Hr (1GB/hr)', price: 19050 },
          { code: 'VIDFH7',  name: '7GB',   desc: 'Voucher Freedom 7GB 7Hr (1GB/hr)', price: 24175 },
          { code: 'VIDFH28', name: '28GB',  desc: 'Voucher Freedom 28GB 28Hr (1GB/hr)', price: 89100 },
        ],
      },
      {
        name: 'ids-freedom-plus',
        title: 'Indosat Freedom Plus',
        packages: [
          { code: 'VIFP4',  name: '6GB',  desc: 'Voucher 4GB + 2GB Malam 30Hr',  price: 37100 },
          { code: 'VIFP8',  name: '10GB', desc: 'Voucher 8GB + 2GB malam 30Hr',  price: 39350 },
          { code: 'VIFP14', name: '20GB', desc: 'Voucher 15GB + 5GB Malam 30Hr', price: 77850 },
          { code: 'VIFP20', name: '30GB', desc: 'Voucher 23GB + 7GB Malam 30Hr', price: 98800 },
          { code: 'VIFP30', name: '40GB', desc: 'Voucher 32GB + 8GB Malam 30Hr', price: 104900 },
        ],
      },
      {
        name: 'ids-yellow',
        title: 'Indosat Yellow',
        packages: [
          { code: 'VIDH7',  name: '1GB', desc: 'VOUCER YELLOW 1GB 7hr',  price: 13100 },
          { code: 'VIDH15', name: '1GB', desc: 'VOUCER YELLOW 1GB 15hr', price: 15150 },
        ],
      },
    ],
  },
  {
    name: 'axis-data',
    title: 'AXIS',
    prefixes: ['0831', '0832', '0833', '0838'],
    subCategories: [
      {
        name: 'axis-aigo-reguler',
        title: 'AXIS AIGO Reguler',
        packages: [
          { code: 'AIGO1',  name: '1GB',   desc: 'VOUCHER AIGO 1GB 28Hr',   price: 21700 },
          { code: 'AIGO2',  name: '2GB',   desc: 'VOUCHER AIGO 2GB 28Hr',   price: 26025 },
          { code: 'AIGO3',  name: '3GB',   desc: 'VOUCHER AIGO 3GB 28Hr',   price: 30475 },
          { code: 'AIGO6',  name: '7,5GB', desc: 'VOUCHER AIGO 7.5GB 28Hr', price: 34775 },
          { code: 'AIGO8',  name: '8GB',   desc: 'VOUCHER AIGO 8GB 28Hr',   price: 43125 },
          { code: 'AIGO10', name: '10GB',  desc: 'VOUCHER AIGO 10GB 28Hr',  price: 48025 },
          { code: 'AIGO14', name: '14GB',  desc: 'VOUCHER AIGO 14GB 28Hr',  price: 59950 },
          { code: 'AIGO20', name: '20GB',  desc: 'VOUCHER AIGO 20GB 28Hr',  price: 75050 },
          { code: 'AIGO30', name: '30GB',  desc: 'VOUCHER AIGO 30GB 28Hr',  price: 91675 },
          { code: 'AIGO35', name: '35GB',  desc: 'VOUCHER AIGO 35GB 60Hr',  price: 116650 },
          { code: 'AIGO75', name: '75GB',  desc: 'VOUCHER AIGO 75GB 60Hr',  price: 1178300 }, // Note: Penyesuaian price agen 175rb
        ],
      },
      {
        name: 'axis-aigo-ketengan',
        title: 'AXIS AIGO Ketengan',
        packages: [
          { code: 'AKY2', name: '2GB', desc: 'VOUCHER Youtube 2GB 30Hr',            price: 8350 },
          { code: 'AKY1', name: '4GB', desc: 'VOUCHER Sosmed 4GB Nat/6GB Lokal,5Hr', price: 10675 },
          { code: 'AKY4', name: '4GB', desc: 'VOUCHER Youtube 4GB + Chat 5Hr',       price: 10775 },
        ],
      },
      {
        name: 'axis-aigo-mini',
        title: 'AXIS AIGO Mini',
        packages: [
          { code: 'AIM31', name: '3GB',   desc: 'VOUCHER AIGO MINI 3GB 1Hr',                      price: 8330 },
          { code: 'AIM13', name: '1GB',   desc: 'VOUCHER AIGO MINI 1GB 3Hr',                      price: 11650 },
          { code: 'AIM1',  name: '1,5GB', desc: 'VOUCHER AIGO MINI 3,5GB + Kuota lokal Jawa... 5Hr', price: 14450 },
          { code: 'AIM6',  name: '6GB',   desc: 'VOUCHER AIGO MINI 6GB + kuota lokal 3Hr',        price: 15150 },
          { code: 'AIM2',  name: '3,5GB', desc: 'VOUCHER AIGO MINI 7GB + kuota lokal 7Hr',        price: 24475 },
          { code: 'AIM3',  name: '5GB',   desc: 'VOUCHER AIGO MINI 5GB + Kuota lokal 15Hr',       price: 29125 },
          { code: 'AIM5',  name: '11,5GB',desc: 'VOUCHER AIGO MINI 11,5GB + kuota lokal 15Hr',     price: 47400 },
        ],
      },
      {
        name: 'axis-owsem',
        title: 'AXIS Owsem',
        packages: [
          { code: 'AXO2',  name: '2GB',  desc: 'VOUCHER OWSEM 1GB+1GB(4G)30Hr', price: 19160 },
          { code: 'AXO4',  name: '4GB',  desc: 'VOUCHER OWSEM 1GB+3GB 4G 30Hr',  price: 30650 },
          { code: 'AXO8',  name: '8GB',  desc: 'VOUCHER OWSEM 2GB+6GB 4G 30Hr',  price: 47900 },
          { code: 'AXO12', name: '12GB', desc: 'VOUCHER OWSEM 3GB+9GB 4G 30Hr',  price: 63080 },
        ],
      },
    ],
  },
  {
    name: 'xl-data',
    title: 'XL',
    prefixes: ['0817', '0818', '0819', '0859', '0877', '0878'],
    subCategories: [
      {
        name: 'xl-combo-flex',
        title: 'XL Combo Flex (Voucher)',
        packages: [
          { code: 'VXCL1',  name: '3,5GB - 5GB', desc: 'VOUCHER 3,5GB - 5GB 28Hr (FLEX S)',  price: 32780 },
          { code: 'VXCL3',  name: '10GB - 15GB', desc: 'VOUCHER 10GB - 15GB 28 Hr (FLEX M)', price: 48500 },
          { code: 'VXCL6',  name: '18GB',        desc: 'VOUCHER 18GB + Lokal 28Hr (FLEX L)',  price: 67750 },
          { code: 'VXCL11', name: '32GB',        desc: 'VOUCHER 32GB + Lokal 28Hr (FLEX XL)', price: 95880 },
        ],
      },
    ],
  },
  {
    name: 'smartfren-data',
    title: 'Smartfren',
    prefixes: ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'],
    subCategories: [
      {
        name: 'sf-data-nonstop',
        title: 'Smartfren Data Nonstop',
        packages: [
          { code: 'VSMN2',  name: 'Unlimited', desc: 'VOUCHER NONSTOP 2GB + Unlimited APK 10HR',  price: 14450 },
          { code: 'VSMN3',  name: 'Unlimited', desc: 'VOUCHER NONSTOP 3GB + Unlimited APK 14HR',  price: 20800 },
          { code: 'VSMN4',  name: 'Unlimited', desc: 'VOUCHER NONSTOP 4GB+Unlimited APK 14HR',   price: 21150 },
          { code: 'VSMN6',  name: 'Unlimited', desc: 'VOUCHER NONSTOP 6GB 28HR',                price: 42300 },
          { code: 'VSMN12', name: '12GB',      desc: 'VOUCHER NONSTOP 12GB 28HR',               price: 59425 },
          { code: 'VSMN30', name: '30GB',      desc: 'VOUCHER NONSTOP 30GB 28HR',               price: 79600 },
          { code: 'VSMN45', name: 'Unlimited', desc: 'VOUCHER NONSTOP 45GB+Unlimited APK 30HR', price: 122700 },
          { code: 'VSMN60', name: 'Unlimited', desc: 'VOUCHER NONSTOP 60GB+Unlimited APK 30HR', price: 156450 },
        ],
      },
      {
        name: 'sf-data-unlimited',
        title: 'Smartfren Data Unlimited',
        packages: [
          { code: 'VSMU11',  name: 'Unlimited', desc: 'VOUCHER UNLIMITED 4G 1HR (FUP 1GB/HR)',  price: 10675 },
          { code: 'VSMU21',  name: 'Unlimited', desc: 'VOUCHER UNLIMITED 4G 2HR (FUP 1GB/HR)',  price: 14000 },
          { code: 'VSMU12',  name: 'Unlimited', desc: 'VOUCHER UNLIMITED 4G 1HR (FUP 2GB/HR)',  price: 14450 },
          { code: 'VSMU31',  name: 'Unlimited', desc: 'VOUCHER UNLIMITED 4G 3HR (FUP 1GB/HR)',  price: 16675 },
          { code: 'VSMU71',  name: 'Unlimited', desc: 'VOUCHER UNLIMITED 4G 7HR (FUP 1GB/HR)',  price: 24575 },
          { code: 'VSMU33',  name: 'Unlimited', desc: 'VOUCHER UNLIMITED 4G 3HR (FUP 3GB/HR)',  price: 26650 },
          { code: 'VSMU73',  name: 'Unlimited', desc: 'VOUCHER UNLIMITED 4G 7HR (FUP 3GB/HR)',  price: 37675 },
          { code: 'VSMU14F1',name: 'Unlimited', desc: 'VOUCHER UNLIMITED 4G 14HR (FUP 1GB/HR)', price: 51025 },
          { code: 'VSMU28F5',name: 'Unlimited', desc: 'VOUCHER UNLIMITED 4G 28HR (FUP 700MB/HR)',price: 73450 },
          { code: 'VSMU28F1',name: 'Unlimited', desc: 'VOUCHER UNLIMITED 4G 28HR (FUP 1GB/HR)', price: 74775 },
          { code: 'VSMU28F2',name: 'Unlimited', desc: 'VOUCHER UNLIMITED 4G 28HR (FUP 2GB/HR)', price: 93675 },
        ],
      },
      {
        name: 'sf-data-volume',
        title: 'Smartfren Data Volume',
        packages: [
          { code: 'SMDV10', name: '3GB',  desc: 'VOUCHER 1.25GB + 1.75GB Malam + 1GB Chat 7Hr', price: 16550 },
          { code: 'SMDV15', name: '9GB',  desc: 'VOUCHER 9GB (2GB+5GB Malam+2GB Chat) 30Hr',    price: 21350 },
          { code: 'SMDV22', name: '18GB', desc: 'VOUCHER 18GB (4GB+10GB Malam+4GB Chat) 30Hr',  price: 27650 },
        ],
      },
    ],
  },
];


export const telephoneProviders = [
  {
    name: 'telkomsel-paktel',
    title: 'Telkomsel',
    prefixes: ['0811', '0812', '0813', '0821', '0822', '0823', '0851', '0852', '0853'],
    subCategories: [
      {
        name: 'tel-telpon',
        title: 'Telkomsel Telepon',
        packages: [
          { code: 'ST1',   name: '5 Menit',    desc: '5 Menit Sesama Telkomsel (1 Hr)', price: 2900 },
          { code: 'ST5',   name: '100 Menit',   desc: '5-15 Menit ALL + 80 Menit Sesama (1 Hr)', price: 6200 },
          { code: 'ST2',   name: '25 Menit',    desc: '25 Menit Sesama Telkomsel (1 Hr)', price: 6000 },
          { code: 'ST8',   name: '200 Menit',   desc: '15 Menit ALL + 185 Menit Sesama (1 Hr)', price: 9300 },
          { code: 'ST10',  name: '200 Menit',   desc: '10-30 Menit ALL + 170 Menit Sesama (3 Hr)', price: 11625 },
          { code: 'ST20',  name: '400 Menit',   desc: '20-50 Menit ALL + 350 Menit Sesama (7 Hr)', price: 21700 },
          { code: 'ST26',  name: '600 Menit',   desc: '50 Menit ALL + 550 Menit Sesama (7 Hr)', price: 25225 },
          { code: 'ST25',  name: '400Mnt+200Sms', desc: '20-50 Menit ALL + 350 Menit Sesama + 200 SMS (7 Hr)', price: 28250 },
          { code: 'ST50',  name: '1.100 Menit', desc: '50-100 Menit ALL + 640-1000 Menit Sesama (30 Hr)', price: 51200 },
          { code: 'ST70',  name: '2.100 Menit', desc: '100 Menit ALL + 2000 Menit Sesama (30 Hr)', price: 86650 },
          { code: 'ST100', name: '2.500 Menit', desc: '200-250 Menit ALL + 2250 Menit Sesama (30 Hr)', price: 91700 },
          { code: 'ST120', name: '6.500 Menit', desc: '250 Menit ALL + 6250 Menit Sesama (30 Hr)', price: 101750 }
        ]
      },
      {
        name: 'tel-telpon-alt',
        title: 'Telkomsel Telepon Alternatif',
        packages: [
          { code: 'ST5A',  name: '100 Menit',   desc: '5-15 Menit ALL + 80 Menit Sesama (1 Hr) [Alt]', price: 7050 },
          { code: 'ST10A', name: '200 Menit',   desc: '10-30 Menit ALL + 170 Menit Sesama (3 Hr) [Alt]', price: 12650 },
          { code: 'ST20A', name: '400 Menit',   desc: '20-50 Menit ALL + 350 Menit Sesama (7 Hr) [Alt]', price: 23700 },
          { code: 'ST50A', name: '1.100 Menit', desc: '50-100 Menit ALL + 640-1000 Menit Sesama (30 Hr) [Alt]', price: 58450 },
          { code: 'ST70A', name: '2.100 Menit', desc: '100 Menit ALL + 2000 Menit Sesama (30 Hr) [Alt]', price: 78900 }
        ]
      }
    ]
  },
  {
    name: 'tri-paktel',
    title: 'Tri',
    prefixes: ['0895', '0896', '0897', '0898', '0899'],
    subCategories: [
      {
        name: 'tri-telepon',
        title: 'Tri Telepon',
        packages: [
          { code: 'TT1',  name: '100 Menit', desc: 'Telepon 100menit 1Hr Sesama Tri & IM3', price: 2150 },
          { code: 'TT2',  name: '700 Menit', desc: 'Telepon 700menit 7Hr Sesama Tri & IM3', price: 3960 },
          { code: 'TT5',  name: '20 Menit',  desc: 'Telepon 20menit 7Hr All Operator', price: 6375 },
          { code: 'TT3',  name: '3000 Menit', desc: 'Telepon 3000menit 30Hr Sesama Tri & IM3', price: 6810 },
          { code: 'TT15', name: '60 Menit',  desc: 'Telepon 60menit 30Hr All Operator', price: 16810 },
          { code: 'TT30', name: '150 Menit', desc: 'Telepon 150menit 30Hr All Operator', price: 31950 }
        ]
      },
    ]
  },
  {
    name: 'indosat-paktel',
    title: 'Indosat Ooredoo',
    prefixes: ['0814', '0815', '0816', '0855', '0856', '0857', '0858'],
    subCategories: [
      {
        name: 'indosat-telepon',
        title: 'Indosat Telepon',
        packages: [
          { code: 'IT1',  name: '1000 Menit', desc: 'Telepon Sesama Isat 1000 menit, 1Hr', price: 4925 },
          { code: 'IT3',  name: 'Unlimited',  desc: 'Telepon Sesama ISAT Unlimited, 30Hr', price: 11110 },
          { code: 'IT12', name: 'Unlimited+30 Menit', desc: 'Telepon Sesama ISAT Unlimited + 30menit ALL, 7Hr', price: 14060 },
          { code: 'IT25', name: 'Unlimited+60 Menit', desc: 'Telepon Sesama ISAT Unlimited + 60menit ALL, 30Hr', price: 26170 },
          { code: 'IT4',  name: 'Unlimited+250 Menit', desc: 'Telepon Sesama ISAT Unlimited + 250menit ALL, 30Hr', price: 48930 }
        ]
      },
    ]
  },
  {
    name: 'xl-paktel',
    title: 'XL',
    prefixes: ['0817', '0818', '0819', '0859', '0877', '0878'],
    subCategories: [
      {
        name: 'xl-telepon',
        title: 'XL Telepon',
        packages: [
          { code: 'XT1',  name: '400 Menit', desc: 'Telepon 350mnt Sesama + 50mnt ALL, 7Hr', price: 11350 },
          { code: 'XT2',  name: '200 Menit', desc: 'Telepon 200mnt Sesama, 14Hr', price: 15410 },
          { code: 'XT4',  name: '600 Menit', desc: 'Telepon 200mnt Sesama + 400sms Sesama, 30Hr', price: 35000 },
          { code: 'XT3',  name: '500 Menit', desc: 'Telepon 500mnt Sesama, 30Hr', price: 35850 },
          { code: 'XT5',  name: '300 Menit', desc: 'Telepon 300mnt ALL, 30Hr', price: 72650 },
          { code: 'XT7',  name: '300 Menit', desc: 'Telepon 300mnt ALL, 90Hr', price: 98050 },
          { code: 'XT8',  name: '500 Menit', desc: 'Telepon 500mnt ALL, 90Hr', price: 140000 }
        ]
      }
    ]
  },
  {
    name: 'axis-paktel',
    title: 'Axis',
    prefixes: ['0831', '0832', '0833', '0838'],
    subCategories: [
      {
        name: 'axis-telepon',
        title: 'Axis Telepon',
        packages: [
          { code: 'AXT1',  name: 'Unlimited', desc: 'Voucher Telepon Unlimited Sesama 14Hr (*838*SN#) (Gangguan)', price: 2270 },
          { code: 'AXT5',  name: 'Unlimited', desc: 'Telepon Unlimited Sesama 14Hr (Gangguan)', price: 4590 },
          { code: 'AXT10', name: '30 Menit',  desc: 'Telepon 30 Menit All Operator 7 Hari', price: 10130 },
          { code: 'AXT25', name: '100 Menit', desc: 'Telepon 100 Menit All Operator 30 Hari', price: 26550 }
        ]
      },
    ]
  }
];

export const smsProviders = [
  {
    name: 'telkomsel-paksms',
    title: 'Telkomsel',
    prefixes: ['0811', '0812', '0813', '0821', '0822', '0823', '0851', '0852', '0853'],
    subCategories: [
      {
        name: 'tel-sms',
        title: 'Telkomsel SMS',
        packages: [
          { code: 'SS1',  name: '20 SMS',      desc: '20 SMS ke sesama telkomsel 1 hari', price: 2700 },
          { code: 'SS5',  name: '50-75 SMS',   desc: '50-75 SMS ke semua 1 hari', price: 8050 },
          { code: 'SS20', name: '300-600 SMS', desc: '300-600 SMS ke semua 30 hari', price: 23650 }
        ]
      }
    ]
  },
  {
    name: 'tri-paksms',
    title: 'Tri',
    prefixes: ['0895', '0896', '0897', '0898', '0899'],
    subCategories: [
      {
        name: 'tri-sms',
        title: 'Tri SMS',
        packages: [
          { code: 'TS5',   name: '250 SMS', desc: '250 SMS All Operator 7hr', price: 9350 },
          { code: 'TS10',  name: '250 SMS', desc: '250 SMS All Operator 75hr', price: 18850 },
          { code: 'TS10D', name: '600 SMS', desc: '600 SMS All Operator 14hr', price: 21050 }
        ]
      },
    ]
  },
  {
    name: 'indosat-paksms',
    title: 'Indosat Ooredoo',
    prefixes: ['0814', '0815', '0816', '0855', '0856', '0857', '0858'],
    subCategories: [
      {
        name: 'indosat-sms',
        title: 'Indosat SMS',
        packages: [
          { code: 'I5S',  name: '400 SMS',  desc: '300 SMS sesama Isat + 100 SMS operator lain', price: 7550 },
          { code: 'I10S', name: '800 SMS',  desc: '600 SMS sesama Isat + 200 SMS operator lain', price: 13300 },
          { code: 'I15S', name: '1500 SMS', desc: '1250 SMS sesama Isat + 250 SMS operator lain', price: 13680 },
          { code: 'I25S', name: '2500 SMS', desc: '2000 SMS sesama Isat + 500 SMS operator lain', price: 29500 }
        ]
      }
    ]
  },
];


// ─────────────────────────────────────────────────────────────────────────────
// TOPUP PRODUCTS
// Digunakan oleh: src/pages/products/topup/[brand]/index.astro
// Setiap brand menghasilkan 1 static page: /products/topup/{name}
//
// Field wajib per item:
//   name        → slug URL, harus unik  (contoh: 'gopay')
//   title       → nama tampil           (contoh: 'GoPay')
//   icon        → path SVG dari homepage (isi path/shape saja, tanpa tag <svg> luar)
//   inputLabel  → label field input     (contoh: 'Nomor HP Tujuan')
//   inputType   → 'tel' | 'text'        (untuk tipe <input>)
//   inputPrefix → '+62' | null          (tampil di kiri input, null = tidak ada)
//   packages    → array nominal
// ─────────────────────────────────────────────────────────────────────────────

export const topupProducts = [

  // ── E-WALLET ──────────────────────────────────────────────────────────────

  {
    name: 'gopay',
    title: 'GoPay',
    // icon: sama persis dengan homepage tab Isi → GoPay (gift/box icon)
    icon: '<path d="M20 12V22H4V12"></path><path d="M22 7H2v5h20V7z"></path><path d="M12 22V7"></path><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
    inputLabel: 'Nomor HP Tujuan',
    inputType: 'tel',
    inputPrefix: '+62',
    packages: [
      { code: 'GJ10',  name: '10.000',  desc: 'Saldo GoPay 10K',  price: 11700 },
      { code: 'GJ15',  name: '15.000',  desc: 'Saldo GoPay 15K',  price: 16750 },
      { code: 'GJ20',  name: '20.000',  desc: 'Saldo GoPay 20K',  price: 21800 },
      { code: 'GJ25',  name: '25.000',  desc: 'Saldo GoPay 25K',  price: 26850 },
      { code: 'GJ30',  name: '30.000',  desc: 'Saldo GoPay 30K',  price: 31850 },
      { code: 'GJ35',  name: '35.000',  desc: 'Saldo GoPay 35K',  price: 36900 },
      { code: 'GJ40',  name: '40.000',  desc: 'Saldo GoPay 40K',  price: 41950 },
      { code: 'GJ45',  name: '45.000',  desc: 'Saldo GoPay 45K',  price: 47000 },
      { code: 'GJ50',  name: '50.000',  desc: 'Saldo GoPay 50K',  price: 52000 },
      { code: 'GJ55',  name: '55.000',  desc: 'Saldo GoPay 55K',  price: 57150 },
      { code: 'GJ60',  name: '60.000',  desc: 'Saldo GoPay 60K',  price: 62200 },
      { code: 'GJ65',  name: '65.000',  desc: 'Saldo GoPay 65K',  price: 67250 },
      { code: 'GJ70',  name: '70.000',  desc: 'Saldo GoPay 70K',  price: 72300 },
      { code: 'GJ75',  name: '75.000',  desc: 'Saldo GoPay 75K',  price: 77300 },
      { code: 'GJ80',  name: '80.000',  desc: 'Saldo GoPay 80K',  price: 82350 },
      { code: 'GJ85',  name: '85.000',  desc: 'Saldo GoPay 85K',  price: 87400 },
      { code: 'GJ90',  name: '90.000',  desc: 'Saldo GoPay 90K',  price: 92400 },
      { code: 'GJ95',  name: '95.000',  desc: 'Saldo GoPay 95K',  price: 97450 },
      { code: 'GJ100', name: '100.000', desc: 'Saldo GoPay 100K', price: 102700 },
    ],
  },
  {
    name: 'ovo',
    title: 'OVO',
    // icon: wallet icon (homepage OVO)
    icon: '<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4z"></path>',
    inputLabel: 'Nomor HP / ID OVO',
    inputType: 'tel',
    inputPrefix: '+62',
    packages: [
      { code: 'VO20',  name: '20.000',  desc: 'Saldo OVO 20K',  price: 21200 },
      { code: 'VO25',  name: '25.000',  desc: 'Saldo OVO 25K',  price: 26200 },
      { code: 'VO30',  name: '30.000',  desc: 'Saldo OVO 30K',  price: 31250 },
      { code: 'VO40',  name: '40.000',  desc: 'Saldo OVO 40K',  price: 41350 },
      { code: 'VO50',  name: '50.000',  desc: 'Saldo OVO 50K',  price: 51400 },
      { code: 'VO60',  name: '60.000',  desc: 'Saldo OVO 60K',  price: 61450 },
      { code: 'VO70',  name: '70.000',  desc: 'Saldo OVO 70K',  price: 71550 },
      { code: 'VO75',  name: '75.000',  desc: 'Saldo OVO 75K',  price: 76550 },
      { code: 'VO80',  name: '80.000',  desc: 'Saldo OVO 80K',  price: 81600 },
      { code: 'VO90',  name: '90.000',  desc: 'Saldo OVO 90K',  price: 91700 },
      { code: 'VO100', name: '100.000', desc: 'Saldo OVO 100K', price: 101800 },
    ],
  },
  {
    name: 'spay',
    title: 'ShopeePay',
    // icon: cart icon (homepage ShopeePay)
    icon: '<circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>',
    inputLabel: 'Nomor HP Tujuan',
    inputType: 'tel',
    inputPrefix: '+62',
    packages: [
      { code: 'SHP15',  name: '15.000',  desc: 'ShopeePay 15K',  price: 15700 },
      { code: 'SHP20',  name: '20.000',  desc: 'ShopeePay 20K',  price: 20750 },
      { code: 'SHP25',  name: '25.000',  desc: 'ShopeePay 25K',  price: 25800 },
      { code: 'SHP30',  name: '30.000',  desc: 'ShopeePay 30K',  price: 30850 },
      { code: 'SHP35',  name: '35.000',  desc: 'ShopeePay 35K',  price: 35850 },
      { code: 'SHP40',  name: '40.000',  desc: 'ShopeePay 40K',  price: 40900 },
      { code: 'SHP45',  name: '45.000',  desc: 'ShopeePay 45K',  price: 45950 },
      { code: 'SHP50',  name: '50.000',  desc: 'ShopeePay 50K',  price: 51000 },
      { code: 'SHP55',  name: '55.000',  desc: 'ShopeePay 55K',  price: 56000 },
      { code: 'SHP60',  name: '60.000',  desc: 'ShopeePay 60K',  price: 61050 },
      { code: 'SHP65',  name: '65.000',  desc: 'ShopeePay 65K',  price: 66100 },
      { code: 'SHP70',  name: '70.000',  desc: 'ShopeePay 70K',  price: 71100 },
      { code: 'SHP75',  name: '75.000',  desc: 'ShopeePay 75K',  price: 76150 },
      { code: 'SHP80',  name: '80.000',  desc: 'ShopeePay 80K',  price: 81200 },
      { code: 'SHP85',  name: '85.000',  desc: 'ShopeePay 85K',  price: 86200 },
      { code: 'SHP90',  name: '90.000',  desc: 'ShopeePay 90K',  price: 91250 },
      { code: 'SHP95',  name: '95.000',  desc: 'ShopeePay 95K',  price: 96300 },
      { code: 'SHP100', name: '100.000', desc: 'ShopeePay 100K', price: 101350 },
    ],
  },
  {
    name: 'dana',
    title: 'DANA',
    // icon: rotate/coins icon (homepage DANA)
    icon: '<circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path>',
    inputLabel: 'Nomor HP Tujuan',
    inputType: 'tel',
    inputPrefix: '+62',
    packages: [
      { code: 'DNA5',   name: '5.000',   desc: 'Saldo DANA 5K',   price: 6100 },
      { code: 'DNA10',  name: '10.000',  desc: 'Saldo DANA 10K',  price: 11150 },
      { code: 'DNA15',  name: '15.000',  desc: 'Saldo DANA 15K',  price: 16150 },
      { code: 'DNA20',  name: '20.000',  desc: 'Saldo DANA 20K',  price: 21200 },
      { code: 'DNA25',  name: '25.000',  desc: 'Saldo DANA 25K',  price: 26250 },
      { code: 'DNA30',  name: '30.000',  desc: 'Saldo DANA 30K',  price: 31250 },
      { code: 'DNA35',  name: '35.000',  desc: 'Saldo DANA 35K',  price: 36300 },
      { code: 'DNA40',  name: '40.000',  desc: 'Saldo DANA 40K',  price: 41350 },
      { code: 'DNA45',  name: '45.000',  desc: 'Saldo DANA 45K',  price: 46400 },
      { code: 'DNA50',  name: '50.000',  desc: 'Saldo DANA 50K',  price: 51450 },
      { code: 'DNA60',  name: '60.000',  desc: 'Saldo DANA 60K',  price: 61500 },
      { code: 'DNA70',  name: '70.000',  desc: 'Saldo DANA 70K',  price: 71550 },
      { code: 'DNA75',  name: '75.000',  desc: 'Saldo DANA 75K',  price: 76600 },
      { code: 'DNA80',  name: '80.000',  desc: 'Saldo DANA 80K',  price: 81650 },
      { code: 'DNA90',  name: '90.000',  desc: 'Saldo DANA 90K',  price: 91700 },
      { code: 'DNA100', name: '100.000', desc: 'Saldo DANA 100K', price: 101800 },
    ],
  },
  {
    name: 'linkaja',
    title: 'LinkAja',
    // icon: link/chain icon (homepage LinkAja)
    icon: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
    inputLabel: 'Nomor HP Tujuan',
    inputType: 'tel',
    inputPrefix: '+62',
    packages: [
      { code: 'LINK10',  name: '10.000',  desc: 'LinkAja 10K',  price: 10900 },
      { code: 'LINK15',  name: '15.000',  desc: 'LinkAja 15K',  price: 15750 },
      { code: 'LINK20',  name: '20.000',  desc: 'LinkAja 20K',  price: 20800 },
      { code: 'LINK25',  name: '25.000',  desc: 'LinkAja 25K',  price: 25850 },
      { code: 'LINK30',  name: '30.000',  desc: 'LinkAja 30K',  price: 30900 },
      { code: 'LINK35',  name: '35.000',  desc: 'LinkAja 35K',  price: 35950 },
      { code: 'LINK40',  name: '40.000',  desc: 'LinkAja 40K',  price: 41000 },
      { code: 'LINK45',  name: '45.000',  desc: 'LinkAja 45K',  price: 46000 },
      { code: 'LINK50',  name: '50.000',  desc: 'LinkAja 50K',  price: 51050 },
      { code: 'LINK55',  name: '55.000',  desc: 'LinkAja 55K',  price: 56300 },
      { code: 'LINK60',  name: '60.000',  desc: 'LinkAja 60K',  price: 61100 },
      { code: 'LINK75',  name: '75.000',  desc: 'LinkAja 75K',  price: 76200 },
      { code: 'LINK80',  name: '80.000',  desc: 'LinkAja 80K',  price: 81250 },
      { code: 'LINK85',  name: '85.000',  desc: 'LinkAja 85K',  price: 86300 },
      { code: 'LINK90',  name: '90.000',  desc: 'LinkAja 90K',  price: 91350 },
      { code: 'LINK95',  name: '95.000',  desc: 'LinkAja 95K',  price: 96400 },
      { code: 'LINK100', name: '100.000', desc: 'LinkAja 100K', price: 101450 },
    ],
  },

  // ── DRIVER ────────────────────────────────────────────────────────────────

  {
    name: 'gojekdriv',
    title: 'Gojek Driver',
    // icon: motor/scooter icon (homepage Gojek Driver)
    icon: '<path d="M19 17H5v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2z"></path><circle cx="7.5" cy="17.5" r="1.5"></circle><circle cx="16.5" cy="17.5" r="1.5"></circle><path d="M5 17H3v-3l2-4h10l2 4v3h-2"></path>',
    inputLabel: 'Nomor HP Driver',
    inputType: 'tel',
    inputPrefix: '+62',
    packages: [
      { code: 'GJD10',  name: '10.000',  desc: 'Saldo Gojek Driver 10K',  price: 11750 },
      { code: 'GJD15',  name: '15.000',  desc: 'Saldo Gojek Driver 15K',  price: 16800 },
      { code: 'GJD20',  name: '20.000',  desc: 'Saldo Gojek Driver 20K',  price: 21850 },
      { code: 'GJD25',  name: '25.000',  desc: 'Saldo Gojek Driver 25K',  price: 26900 },
      { code: 'GJD30',  name: '30.000',  desc: 'Saldo Gojek Driver 30K',  price: 31900 },
      { code: 'GJD35',  name: '35.000',  desc: 'Saldo Gojek Driver 35K',  price: 37000 },
      { code: 'GJD40',  name: '40.000',  desc: 'Saldo Gojek Driver 40K',  price: 42000 },
      { code: 'GJD45',  name: '45.000',  desc: 'Saldo Gojek Driver 45K',  price: 47050 },
      { code: 'GJD50',  name: '50.000',  desc: 'Saldo Gojek Driver 50K',  price: 52050 },
      { code: 'GJD55',  name: '55.000',  desc: 'Saldo Gojek Driver 55K',  price: 57150 },
      { code: 'GJD60',  name: '60.000',  desc: 'Saldo Gojek Driver 60K',  price: 62150 },
      { code: 'GJD65',  name: '65.000',  desc: 'Saldo Gojek Driver 65K',  price: 67200 },
      { code: 'GJD70',  name: '70.000',  desc: 'Saldo Gojek Driver 70K',  price: 72250 },
      { code: 'GJD75',  name: '75.000',  desc: 'Saldo Gojek Driver 75K',  price: 77150 },
      { code: 'GJD80',  name: '80.000',  desc: 'Saldo Gojek Driver 80K',  price: 82250 },
      { code: 'GJD85',  name: '85.000',  desc: 'Saldo Gojek Driver 85K',  price: 87300 },
      { code: 'GJD90',  name: '90.000',  desc: 'Saldo Gojek Driver 90K',  price: 92350 },
      { code: 'GJD95',  name: '95.000',  desc: 'Saldo Gojek Driver 95K',  price: 97400 },
      { code: 'GJD100', name: '100.000', desc: 'Saldo Gojek Driver 100K', price: 102400 },
    ],
  },
  {
    name: 'grabdriv',
    title: 'Grab Driver',
    // icon: bicycle icon (homepage Grab Driver)
    icon: '<circle cx="5.5" cy="17.5" r="2.5"></circle><circle cx="18.5" cy="17.5" r="2.5"></circle><path d="M15 6h-2l-3 6H5l-2 2v3h2.5"></path><path d="M15 6l3 6h1.5v3H21l-3-9z"></path><path d="M8 17.5h7"></path>',
    inputLabel: 'Nomor HP Driver',
    inputType: 'tel',
    inputPrefix: '+62',
    packages: [
      { code: 'GBD100', name: '100.000', desc: 'Saldo Grab Driver 100K', price: 103200 },
    ],
  },
  {
    name: 'maximdriv',
    title: 'Maxim Driver',
    // icon: bus/van icon (homepage Maxim Driver)
    icon: '<rect x="1" y="8" width="22" height="10" rx="2"></rect><path d="M5 8V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"></path><circle cx="7" cy="18" r="2"></circle><circle cx="17" cy="18" r="2"></circle>',
    inputLabel: 'ID Driver Maxim',
    inputType: 'text',
    inputPrefix: null, // Maxim pakai ID, bukan nomor HP
    packages: [
      { code: 'MXD5',   name: '5.000',   desc: 'Saldo Maxim Driver 5K',   price: 8800 },
      { code: 'MXD10',  name: '10.000',  desc: 'Saldo Maxim Driver 10K',  price: 13850 },
      { code: 'MXD15',  name: '15.000',  desc: 'Saldo Maxim Driver 15K',  price: 18850 },
      { code: 'MXD20',  name: '20.000',  desc: 'Saldo Maxim Driver 20K',  price: 23900 },
      { code: 'MXD30',  name: '30.000',  desc: 'Saldo Maxim Driver 30K',  price: 34000 },
      { code: 'MXD40',  name: '40.000',  desc: 'Saldo Maxim Driver 40K',  price: 44100 },
      { code: 'MXD50',  name: '50.000',  desc: 'Saldo Maxim Driver 50K',  price: 54150 },
      { code: 'MXD100', name: '100.000', desc: 'Saldo Maxim Driver 100K', price: 104800 },
    ],
  },

  // ── LAINNYA ───────────────────────────────────────────────────────────────

  {
    name: 'plntoken',
    title: 'Token Listrik PLN',
    // icon: lightning/bolt icon (homepage Token Listrik PLN)
    icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
    inputLabel: 'Nomor Meter PLN',
    inputType: 'text',
    inputPrefix: null,
    packages: [
      { code: 'PLN5',    name: '5.000',     desc: 'Token PLN 5.000 [lambat]',  price: 8100 },
      { code: 'PLN10',   name: '10.000',    desc: 'Token PLN 10.000 [lambat]', price: 13000 },
      { code: 'PLN15',   name: '15.000',    desc: 'Token PLN 15.000 [lambat]', price: 18100 },
      { code: 'PLN20',   name: '20.000',    desc: 'Token PLN 20.000',          price: 23150 },
      { code: 'PLN50',   name: '50.000',    desc: 'Token PLN 50.000',          price: 53300 },
      { code: 'PLN100',  name: '100.000',   desc: 'Token PLN 100.000',         price: 103700 }
    ],
  },
  {
    name: 'gplay',
    title: 'Google Play',
    // icon: play/triangle icon (homepage Google Play)
    icon: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
    inputLabel: 'Nomor HP Tujuan',
    inputType: 'tel',
    inputPrefix: '+62',
    packages: [
      { code: 'GP20',  name: '20.000',  desc: 'Google Play ID 20rb',  price: 19900 },
      { code: 'GP50',  name: '50.000',  desc: 'Google Play ID 50rb',  price: 49050 },
      { code: 'GP100', name: '100.000', desc: 'Google Play ID 100rb', price: 92700 },
      { code: 'GP150', name: '150.000', desc: 'Google Play ID 150rb', price: 142100 },
      { code: 'GP300', name: '300.000', desc: 'Google Play ID 300rb', price: 290650 },
      { code: 'GP500', name: '500.000', desc: 'Google Play ID 500rb', price: 472100 },
    ],
  },
  {
    name: 'wifidi',
    title: 'Wi-Fi ID',
    // icon: wifi signal icon (homepage Wi-Fi ID)
    icon: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
    inputLabel: 'Username / Nomor HP',
    inputType: 'text',
    inputPrefix: null,
    packages: [
      { code: 'WIFI5',  name: '5.000',  desc: 'Wifi.ID 5.000 (12 Jam)',  price: 6150 },
      { code: 'WIFI10', name: '10.000', desc: 'Wifi.ID 10.000 (3 Hari)', price: 11200 },
      { code: 'WIFI20', name: '20.000', desc: 'Wifi.ID 20.000 (7 Hari)', price: 21250 },
      { code: 'WIFI50', name: '50.000', desc: 'Wifi.ID 50.000 (30 Hari)', price: 51500 },
    ],
  },
];

export const gameProducts = [
  {
    name: 'ml',
    title: 'Mobile Legends',
    // Icon sama persis dengan homepage tab Game → Mobile Legends (star icon)
    icon: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
    inputLabel: 'User ID/ID Game',
    inputType: 'text',
    inputPrefix: null,
    packages: [
      { code: 'ML5',  name: '5 Diamonds',  desc: 'Mobile Legend 5 Diamond',  price: 2750 },
      { code: 'ML12', name: '12 Diamonds', desc: 'Mobile Legend 12 Diamond', price: 4800 },
      { code: 'ML14', name: '14 Diamonds', desc: 'Mobile Legend 14 Diamond', price: 5500 },
      { code: 'ML15', name: '15 Diamonds', desc: 'Mobile Legend 15 Diamond', price: 6100 },
      { code: 'ML19', name: '19 Diamonds', desc: 'Mobile Legend 19 Diamond', price: 6750 },
      { code: 'ML28', name: '28 Diamonds', desc: 'Mobile Legend 28 Diamond', price: 9150 },
      { code: 'ML33', name: '33 Diamonds', desc: 'Mobile Legend 33 Diamond', price: 10900 },
      { code: 'ML36', name: '36 Diamonds', desc: 'Mobile Legend 36 Diamond', price: 11300 },
      { code: 'ML42', name: '42 Diamonds', desc: 'Mobile Legend 42 Diamond', price: 13000 },
      { code: 'ML44', name: '44 Diamonds', desc: 'Mobile Legend 44 Diamond', price: 13150 },
      { code: 'ML56', name: '56 Diamonds', desc: 'Mobile Legend 56 Diamond', price: 16750 },
      { code: 'ML59', name: '59 Diamonds', desc: 'Mobile Legend 59 Diamond', price: 17000 },
      { code: 'ML67', name: '67 Diamonds', desc: 'Mobile Legend 67 Diamond', price: 20400 },
      { code: 'ML74', name: '74 Diamonds', desc: 'Mobile Legend 74 Diamond', price: 21000 },
      { code: 'ML75', name: '75 Diamonds', desc: 'Mobile Legend 75 Diamond', price: 23000 },
      { code: 'ML85', name: '85 Diamonds', desc: 'Mobile Legend 85 Diamond', price: 24000 },
    ],
  },
  {
    name: 'ff',
    title: 'Free Fire',
    // Icon sama persis dengan homepage tab Game → Free Fire (flame icon)
    icon: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>',
    inputLabel: 'ID Game/User ID',
    inputType: 'number',
    inputPrefix: null,
    packages: [
      { code: 'FF5',    name: '5 Diamonds',    desc: 'Free Fire 5 Diamond',    price: 2200 },
      { code: 'FF12',   name: '12 Diamonds',   desc: 'Free Fire 12 Diamond',   price: 3150 },
      { code: 'FF20',   name: '20 Diamonds',   desc: 'Free Fire 20 Diamond',   price: 4750 },
      { code: 'FF30',   name: '30 Diamonds',   desc: 'Free Fire 30 Diamond',   price: 6500 },
      { code: 'FF50',   name: '50 Diamonds',   desc: 'Free Fire 50 Diamond',   price: 8150 },
      { code: 'FF70',   name: '70 Diamonds',   desc: 'Free Fire 70 Diamond',   price: 11000 },
      { code: 'FF75',   name: '75 Diamonds',   desc: 'Free Fire 75 Diamond',   price: 11400 },
      { code: 'FF140',  name: '140 Diamonds',  desc: 'Free Fire 140 Diamond',  price: 19400 },
      { code: 'FF355',  name: '355 Diamonds',  desc: 'Free Fire 355 Diamond',  price: 46800 },
      { code: 'FF720',  name: '720 Diamonds',  desc: 'Free Fire 720 Diamond',  price: 91400 }
    ],
  },
  {
    name: 'pubgm',
    title: 'PUBG Mobile',
    // Icon sama persis dengan homepage tab Game → PUBG Mobile (crosshair icon)
    icon: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle><line x1="12" y1="2" x2="12" y2="5"></line><line x1="12" y1="19" x2="12" y2="22"></line><line x1="2" y1="12" x2="5" y2="12"></line><line x1="19" y1="12" x2="22" y2="12"></line>',
    inputLabel: 'User ID/ID Game',
    inputType: 'number',
    inputPrefix: null,
    packages: [
      { code: 'PU35',   name: '35 UC',   desc: 'PUBG Mobile 35 UC',   price: 9050 },
      { code: 'PU150',  name: '150 UC',  desc: 'PUBG Mobile 150 UC',  price: 9150 },
      { code: 'PU70',   name: '70 UC',   desc: 'PUBG Mobile 70 UC',   price: 15400 },
      { code: 'PU50',   name: '40 UC',   desc: 'PUBG Mobile 40 UC',   price: 16850 },
      { code: 'PU125',  name: '120 UC',  desc: 'PUBG Mobile 120 UC',  price: 45000 },
      { code: 'PU210',  name: '210 UC',  desc: 'PUBG Mobile 210 UC',  price: 52200 },
      { code: 'PU250',  name: '200 UC',  desc: 'PUBG Mobile 200 UC',  price: 76600 },
      { code: 'PU500',  name: '400 UC',  desc: 'PUBG Mobile 400 UC',  price: 122700 },
      { code: 'PU700',  name: '700 UC',  desc: 'PUBG Mobile 700 UC',  price: 168500 },
      { code: 'PU1250', name: '1000 UC', desc: 'PUBG Mobile 1000 UC', price: 269500 },
      { code: 'PU1750', name: '1750 UC', desc: 'PUBG Mobile 1750 UC', price: 340500 },
      { code: 'PU2500', name: '2000 UC', desc: 'PUBG Mobile 2000 UC', price: 567500 },
      { code: 'PU3500', name: '3500 UC', desc: 'PUBG Mobile 3500 UC', price: 687500 },
      { code: 'PU5000', name: '5000 UC', desc: 'PUBG Mobile 5000 UC', price: 1016000 },
    ],
  },
  {
    name: 'garena',
    title: 'Garena Shell',
    // Icon sama persis dengan homepage tab Game → Garena (gamepad icon)
    icon: '<line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><circle cx="15" cy="13" r="1" fill="currentColor" stroke="none"></circle><circle cx="17" cy="11" r="1" fill="currentColor" stroke="none"></circle><path d="M17 6H7a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5z"></path>',
    inputLabel: 'Nomor HP',
    inputType: 'tel',
    inputPrefix: '+62',
    packages: [
      { code: 'GR10',  name: '33 Shell',  desc: 'Voucher 33 Shell / 1000 Cash',  price: 10800 },
      { code: 'GR20',  name: '66 Shell',  desc: 'Voucher 66 Shell / 2000 Cash',  price: 20000 },
      { code: 'GR50',  name: '165 Shell', desc: 'Voucher 165 Shell / 5000 Cash', price: 47550 },
      { code: 'GR100', name: '330 Shell', desc: 'Voucher 330 Shell / 10000 Cash', price: 94000 },
    ],
  }
];