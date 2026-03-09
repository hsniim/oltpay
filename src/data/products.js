// src/data/products.js

export const pulsaProviders = [
  {
    name: 'telkomsel',
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
    name: 'indosat',
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
      { code: 'I100',  name: '100.000', desc: 'Pulsa Reguler Indosat',      price: 100750 },
    ]
  },
  {
    name: 'xl',
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
    name: 'tri',
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
      { code: 'T100',  name: '100.000', desc: 'Pulsa Reguler Tri', price: 98300 },
      { code: 'T150',  name: '150.000', desc: 'Pulsa Reguler Tri', price: 147750 },
      { code: 'T200',  name: '200.000', desc: 'Pulsa Reguler Tri', price: 198400 },
      { code: 'T300',  name: '300.000', desc: 'Pulsa Reguler Tri', price: 300000 },
      { code: 'T500',  name: '500.000', desc: 'Pulsa Reguler Tri', price: 494500 },
    ]
  },
  {
    name: 'axis',
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
    name: 'smartfren',
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
      { code: 'SM100',  name: '100.000', desc: 'Pulsa Reguler Smartfren', price: 102000 },
      { code: 'SM150',  name: '150.000', desc: 'Pulsa Reguler Smartfren', price: 152800 },
      { code: 'SM300',  name: '300.000', desc: 'Pulsa Reguler Smartfren', price: 304000 },
    ]
  },
];

export const paketDataProviders = [
  {
    name: 'telkomsel',
    title: 'Telkomsel',
    prefixes: ['0811', '0812', '0813', '0821', '0822', '0823', '0851', '0852', '0853'],
    subCategories: [
      {
        name: 'tel-data',
        title: 'Telkomsel Data (Flash)',
        packages: [
          { code: 'SDF100', name: '100MB', desc: 'FLASH 100MB 7Hr', price: 6000 },
          { code: 'SDF250', name: '250MB', desc: 'FLASH 250MB 7Hr', price: 8050 },
          { code: 'SDF500', name: '500MB', desc: 'FLASH 500MB 15Hr', price: 10050 },
          { code: 'SDF1',   name: '1GB',   desc: 'FLASH 1GB 28Hr', price: 13100 },
          { code: 'SDF2',   name: '2GB',   desc: 'FLASH 2GB 28Hr', price: 24150 },
          { code: 'SDF3',   name: '3GB',   desc: 'FLASH 3GB 28Hr', price: 27150 },
          { code: 'SDF4',   name: '4GB',   desc: 'FLASH 4GB 28Hr', price: 37250 },
          { code: 'SDF5',   name: '5GB',   desc: 'FLASH 5GB 28Hr', price: 39250 },
          { code: 'SDF6',   name: '6GB',   desc: 'FLASH 6GB 28Hr', price: 41300 },
          { code: 'SDF7',   name: '7GB',   desc: 'FLASH 7GB 28Hr', price: 45300 },
          { code: 'SDF8',   name: '8GB',   desc: 'FLASH 8GB 28Hr', price: 47350 },
          { code: 'SDF9',   name: '9GB',   desc: 'FLASH 9GB 28Hr', price: 55400 },
          { code: 'SDF10',  name: '10GB',  desc: 'FLASH 10GB 28Hr', price: 57400 },
          { code: 'SDF11',  name: '11GB',  desc: 'FLASH 11GB 28Hr', price: 58400 },
          { code: 'SDF12',  name: '12GB',  desc: 'FLASH 12GB 28Hr', price: 59400 },
          { code: 'SDF13',  name: '13GB',  desc: 'FLASH 13GB 30Hr', price: 61450 },
          { code: 'SDF15',  name: '15GB',  desc: 'FLASH 15GB 28Hr', price: 65450 },
          { code: 'SDF23',  name: '23GB',  desc: 'FLASH 23GB 28Hr', price: 85600 },
          { code: 'SDF25',  name: '25GB',  desc: 'FLASH 25GB 28Hr', price: 101700 },
          { code: 'SDF30',  name: '30GB',  desc: 'FLASH 30GB 28Hr', price: 102700 }
        ]
      },
      {
        name: 'tel-bulk',
        title: 'Telkomsel Data Bulk',
        packages: [
          { code: 'SDB3',   name: '4GB',   desc: 'BULK 3GB + 1GB OMG 30hr', price: 45850 },
          { code: 'SDB5',   name: '7GB',   desc: 'BULK 5GB + 2GB OMG 30hr', price: 70400 },
          { code: 'SDB8',   name: '10GB',  desc: 'BULK 8GB + 2GB OMG 30hr', price: 93600 },
          { code: 'SDB12',  name: '14GB',  desc: 'BULK 12GB + 2GB OMG 30hr', price: 103650 },
          { code: 'SDB25',  name: '27GB',  desc: 'BULK 25GB + 2GB OMG 30hr', price: 167100 },
          { code: 'SDB50',  name: '52GB',  desc: 'BULK 50GB + 2GB OMG 30hr', price: 214450 }
        ]
      },
      {
        name: 'tel-bulk-alternatif',
        title: 'Bulk Alternatif',
        packages: [
          { code: 'SDB3A',  name: '4GB',   desc: 'BULK 3GB + 1GB OMG 30hr [Alt]', price: 57350 },
          { code: 'SDB5A',  name: '7GB',   desc: 'BULK 5GB + 2GB OMG 30hr [Alt]', price: 89550 },
          { code: 'SDB8A',  name: '10GB',  desc: 'BULK 8GB + 2GB OMG 30hr [Alt]', price: 108700 },
          { code: 'SDB12A', name: '14GB',  desc: 'BULK 12GB + 2GB OMG 30hr [Alt]', price: 117750 },
          { code: 'SDB25A', name: '27GB',  desc: 'BULK 25GB + 2GB OMG 30hr [Alt]', price: 198300 },
          { code: 'SDB50A', name: '52GB',  desc: 'BULK 50GB + 2GB OMG 30hr [Alt]', price: 239600 }
        ]
      },
      {
        name: 'tel-bulk-promo',
        title: 'Bulk Promo',
        packages: [
          { code: 'SDB3P',  name: '4GB',   desc: 'BULK 3GB + 1GB OMG 30hr [Promo]', price: 40900 },
          { code: 'SDB5P',  name: '7GB',   desc: 'BULK 5GB + 2GB OMG 30hr [Promo]', price: 66400 },
          { code: 'SDB8P',  name: '10GB',  desc: 'BULK 8GB + 2GB OMG 30hr [Promo]', price: 87600 },
          { code: 'SDB12P', name: '14GB',  desc: 'BULK 12GB + 2GB OMG 30hr [Promo]', price: 101700 }
        ]
      },
      {
        name: 'tel-gigamax',
        title: 'Telkomsel Gigamax',
        packages: [
          { code: 'SDG1',   name: '1GB',   desc: '1GB Maxstream 3Hr', price: 9300 },
          { code: 'SDG5',   name: '5GB',   desc: '5GB Maxstream 3Hr', price: 16000 },
          { code: 'SDG6',   name: '6GB',   desc: '6GB Maxstream 7Hr', price: 17000 },
          { code: 'SDG4',   name: '4GB',   desc: '4GB Maxstream 30Hr', price: 22750 },
          { code: 'SDG10',  name: '10GB',  desc: '10GB Maxstream 30Hr', price: 33250 },
          { code: 'SDG30',  name: '30GB',  desc: '30GB Maxstream 30Hr', price: 64850 },
          { code: 'SDG50',  name: '50GB',  desc: '50GB Maxstream 30Hr', price: 93700 }
        ]
      },
      {
        name: 'tel-reguler',
        title: 'Telkomsel Reguler',
        packages: [
          { code: 'STG5',   name: '20MB-50MB',   desc: 'REG 20MB-50MB 7hr', price: 8050 },
          { code: 'STG10',  name: '60MB-110MB',  desc: 'REG 60MB-110MB 7hr', price: 11500 },
          { code: 'STG20',  name: '250MB-400MB', desc: 'REG 250MB-400MB 7hr', price: 14100 },
          { code: 'STG25',  name: '400MB-500MB', desc: 'REG 400MB-500MB 30hr', price: 19150 },
          { code: 'STG50',  name: '1GB-1.5GB',   desc: 'REG 1GB-1.5GB 30hr', price: 36800 },
          { code: 'STG100', name: '5GB',         desc: 'KUOTA 5GB FULL ALL 30hr', price: 97950 }
        ]
      },
      {
        name: 'tel-byu',
        title: 'Telkomsel By.U',
        packages: [
          { code: 'SBDF1',   name: '1GB',   desc: 'BY.U FLASH 1GB 30Hr', price: 25200 },
          { code: 'SBDF2',   name: '2GB',   desc: 'BY.U FLASH 2GB 14-30Hr', price: 28200 },
          { code: 'SBDF3',   name: '3GB',   desc: 'BY.U FLASH 3GB 14-30Hr', price: 36950 },
          { code: 'SBDF4',   name: '4GB',   desc: 'BY.U FLASH 4GB 30Hr', price: 31200 },
          { code: 'SBDF5',   name: '5GB',   desc: 'BY.U FLASH 5GB 14-30Hr', price: 37350 },
          { code: 'SBDF6',   name: '6GB',   desc: 'BY.U FLASH 6GB 30Hr', price: 33250 },
          { code: 'SBDF7',   name: '7GB',   desc: 'BY.U FLASH 7GB 30Hr', price: 34250 },
          { code: 'SBDF8',   name: '8GB',   desc: 'BY.U FLASH 8GB 30Hr', price: 36750 },
          { code: 'SBDF9',   name: '9GB',   desc: 'BY.U FLASH 9GB 30Hr', price: 37250 },
          { code: 'SBDF10',  name: '10GB',  desc: 'BY.U FLASH 10GB 30Hr', price: 40300 },
          { code: 'SBDF12',  name: '12GB',  desc: 'BY.U FLASH 12GB 30Hr', price: 47950 },
          { code: 'SBDF14',  name: '14GB',  desc: 'BY.U FLASH 14GB 30Hr', price: 48350 },
          { code: 'SBDF20',  name: '20GB',  desc: 'BY.U FLASH 20GB 30Hr', price: 77550 },
          { code: 'SBDF23',  name: '23GB',  desc: 'BY.U FLASH 23GB 30Hr', price: 82600 },
          { code: 'SBDF42',  name: '42GB',  desc: 'BY.U FLASH 42GB 30Hr', price: 101850 },
          { code: 'SBDF50',  name: '50GB',  desc: 'BY.U FLASH 50GB 30Hr', price: 111800 }
        ]
      }
    ]
  },
  {
    name: 'tri',
    title: 'Tri',
    prefixes: ['0895', '0896', '0897', '0898', '0899'],
    subCategories: [
      {
        name: 'tri-data',
        title: 'Tri Data',
        packages: [
          { code: 'TD5',  name: '5GB',  desc: 'KUOTA 5 GB 30hr', price: 33250 },
          { code: 'TD10', name: '10GB', desc: 'KUOTA 10 GB 30hr', price: 59950 }
        ]
      },
      {
        name: 'tri-aon',
        title: 'Tri Data AON',
        packages: [
          { code: 'TDA2',  name: '2.5GB', desc: 'TRI AON 2.5GB', price: 25000 },
          { code: 'TDA35', name: '3.5GB', desc: 'TRI AON 3.5GB', price: 27150 },
          { code: 'TDA3',  name: '3GB',   desc: 'TRI AON 3GB',   price: 26700 },
          { code: 'TDA4',  name: '4GB',   desc: 'TRI AON 4GB',   price: 30200 },
          { code: 'TDA5',  name: '5GB',   desc: 'TRI AON 5GB',   price: 32200 },
          { code: 'TDA6',  name: '6GB',   desc: 'TRI AON 6GB',   price: 34250 },
          { code: 'TDA7',  name: '7GB',   desc: 'TRI AON 7GB',   price: 47700 },
          { code: 'TDA9',  name: '9GB',   desc: 'TRI AON 9GB',   price: 54150 },
          { code: 'TDA8',  name: '8GB',   desc: 'TRI AON 8GB',   price: 51350 },
          { code: 'TDA10', name: '10GB',  desc: 'TRI AON 10GB',  price: 59700 },
          { code: 'TDA12', name: '12GB',  desc: 'TRI AON 12GB',  price: 59850 },
          { code: 'TDA14', name: '14GB',  desc: 'TRI AON 14GB',  price: 67350 },
          { code: 'TDA40', name: '40GB',  desc: 'TRI AON 40GB',  price: 112550 }
        ]
      },
      {
        name: 'tri-bm',
        title: 'Tri Data BM',
        packages: [
          { code: 'TBM3', name: '3GB', desc: 'BM 3GB 7Hr', price: 19550 }
        ]
      },
      {
        name: 'tri-bulk',
        title: 'Tri Data Bulk',
        packages: [
          { code: 'TDB1',  name: '200MB', desc: 'TRI DATA BULK 200MB, 30HR (Gangguan)', price: 2500 },
          { code: 'TDB3',  name: '500MB', desc: 'TRI DATA BULK 500MB, 30HR', price: 5100 },
          { code: 'TDB5',  name: '1GB',   desc: 'TRI DATA BULK 1GB, 14HR', price: 7650 },
          { code: 'TDB8',  name: '1.5GB', desc: 'TRI DATA BULK 1.5GB, 14HR', price: 10050 },
          { code: 'TDB2',  name: '2GB',   desc: 'TRI DATA BULK 2GB 7HR', price: 12950 },
          { code: 'TDB15', name: '2.5GB', desc: 'TRI DATA BULK 2.5GB, 14HR', price: 16100 },
          { code: 'TDB13', name: '3GB',   desc: 'TRI DATA BULK 3GB, 30HR', price: 22750 },
          { code: 'TDB25', name: '4GB',   desc: 'TRI DATA BULK 4GB, 14HR', price: 26100 },
          { code: 'TDB14', name: '4GB',   desc: 'TRI DATA BULK 4GB, 30HR', price: 27800 },
          { code: 'TDB28', name: '5GB',   desc: 'TRI DATA BULK 5GB, 30HR', price: 33250 },
          { code: 'TDB50', name: '10GB',  desc: 'TRI DATA BULK 10GB, 30HR', price: 57400 }
        ]
      },
      {
        name: 'tri-getmore',
        title: 'Tri Data Getmore',
        packages: [
          { code: 'TGM2', name: '2GB', desc: 'GETMORE 2GB + 2GB Youtube 30Hr', price: 21450 },
          { code: 'TGM3', name: '4GB', desc: 'GETMORE 4GB + 4GB Youtube 30Hr', price: 34250 },
          { code: 'TGM5', name: '5GB', desc: 'GETMORE 5GB + 5GB Youtube 30Hr', price: 39250 }
        ]
      },
      {
        name: 'tri-happy',
        title: 'Tri Data Happy',
        packages: [
          { code: 'TDP3',   name: '3GB',   desc: 'TRI HAPPY 3GB 14HR', price: 22950 },
          { code: 'TDP7',   name: '7GB',   desc: 'TRI HAPPY 7GB 28HR', price: 33600 },
          { code: 'TDP6',   name: '6GB',   desc: 'TRI HAPPY 6GB 28HR (Gangguan)', price: 33850 },
          { code: 'TDP10',  name: '10GB',  desc: 'TRI HAPPY 10GB 28HR', price: 36850 },
          { code: 'TDP9',   name: '9GB',   desc: 'TRI HAPPY 9GB 28HR', price: 36400 },
          { code: 'TDP14',  name: '14GB',  desc: 'TRI HAPPY 14GB 28HR', price: 48200 },
          { code: 'TDP11',  name: '11GB',  desc: 'TRI HAPPY 11GB 28HR', price: 43300 },
          { code: 'TDP12',  name: '12GB',  desc: 'TRI HAPPY 12GB 28HR (Gangguan)', price: 47500 },
          { code: 'TDP15',  name: '15GB',  desc: 'TRI HAPPY 15GB 28HR', price: 49200 },
          { code: 'TDP18',  name: '18GB',  desc: 'TRI HAPPY 18GB 28HR', price: 51250 },
          { code: 'TDP20',  name: '20GB',  desc: 'TRI HAPPY 20GB 28HR', price: 57350 },
          { code: 'TDP25',  name: '25GB',  desc: 'TRI HAPPY 25GB 28HR', price: 65750 },
          { code: 'TDP30',  name: '30GB',  desc: 'TRI HAPPY 30GB 28HR', price: 72000 },
          { code: 'TDP42',  name: '42GB',  desc: 'TRI HAPPY 42GB 28HR', price: 76100 },
          { code: 'TDP55',  name: '55GB',  desc: 'TRI HAPPY 55GB 28HR', price: 93650 },
          { code: 'TDP100', name: '100GB', desc: 'TRI HAPPY 100GB 28HR', price: 119250 }
        ]
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
          { code: 'TDH9',  name: '9GB',   desc: 'TRI HAPPY 9GB, 10HR',  price: 36900 }
        ]
      },
      {
        name: 'tri-reguler',
        title: 'Tri Data Reguler',
        packages: [
          { code: 'TDR80', name: '80MB',   desc: 'REGULER 80MB',   price: 6500 },
          { code: 'TDR30', name: '300MB',  desc: 'REGULER 300MB',  price: 11350 },
          { code: 'TDR65', name: '650MB',  desc: 'REGULER 650MB',  price: 21750 },
          { code: 'TDR12', name: '1.25GB', desc: 'REGULER 1.25GB', price: 34300 },
          { code: 'TDR42', name: '4.25GB', desc: 'REGULER 4.25GB', price: 82500 }
        ]
      },
      {
        name: 'tri-unlimited',
        title: 'Tri Data Unlimited',
        packages: [
          { code: 'TDL6',  name: '6GB+20GB', desc: '6GB + Unlimited App (00:00-17:00) 30Hr', price: 75550 },
          { code: 'TDL22', name: '42GB',     desc: '30GB + 12GB Kuota Lokal 28Hr',          price: 76050 }
        ]
      }
    ]
  },
  {
    name: 'indosat',
    title: 'Indosat Ooredoo',
    prefixes: ['0814', '0815', '0816', '0855', '0856', '0857', '0858'],
    subCategories: [
      {
        name: 'indosat-harian',
        title: 'Indosat Data Harian',
        packages: [
          { code: 'IDA12',  name: '1GB',   desc: 'Kuota 1GB 2Hr', price: 7300 },
          { code: 'IDA11',  name: '1.5GB', desc: 'Kuota 1.5GB 1Hr', price: 8250 },
          { code: 'IDA31',  name: '3GB',   desc: 'Kuota 3GB 1Hr', price: 8475 },
          { code: 'IDA21',  name: '2GB',   desc: 'Kuota 2GB 1Hr', price: 11450 },
          { code: 'IDA13',  name: '1.5GB', desc: 'Kuota 1.5GB 3Hr', price: 9950 },
          { code: 'IDA52',  name: '5GB',   desc: 'Kuota 5GB 2Hr', price: 10800 },
          { code: 'IDA33',  name: '3GB',   desc: 'Kuota 3GB 3Hr', price: 13050 },
          { code: 'IDA25',  name: '2.5GB', desc: 'Kuota 2.5GB 5Hr', price: 14050 },
          { code: 'IDA53',  name: '5GB',   desc: 'Kuota 5GB 3Hr', price: 14080 },
          { code: 'IDA35',  name: '3.5GB', desc: 'Kuota 3.5GB 5Hr', price: 15100 },
          { code: 'IDA55',  name: '5GB',   desc: 'Kuota 5GB 5Hr', price: 18600 },
          { code: 'IDA77',  name: '7GB',   desc: 'Kuota 7GB 7Hr', price: 24150 },
          { code: 'IDA157', name: '15GB',  desc: 'Kuota 15GB 7Hr', price: 31200 },
          { code: 'IDA155', name: '15GB',  desc: 'Kuota 15GB 5Hr', price: 29990 }
        ]
      },
      {
        name: 'indosat-pure',
        title: 'Indosat Data Pure',
        packages: [
          { code: 'ID500', name: '500MB', desc: 'PURE 500MB 30Hr (Gangguan)', price: 5425 },
          { code: 'ID1',   name: '1GB',   desc: 'PURE 1GB 14Hr', price: 9475 },
          { code: 'ID2',   name: '2GB',   desc: 'PURE 2GB 7Hr', price: 17680 },
          { code: 'ID3',   name: '3GB',   desc: 'PURE 3GB 30Hr', price: 24150 },
          { code: 'ID4',   name: '4GB',   desc: 'PURE 4GB 30Hr', price: 32200 },
          { code: 'ID5',   name: '5GB',   desc: 'PURE 5GB 30Hr', price: 35225 },
          { code: 'ID6',   name: '6GB',   desc: 'PURE 6GB 30Hr', price: 38250 },
          { code: 'ID7',   name: '7GB',   desc: 'PURE 7GB 30Hr', price: 41250 },
          { code: 'ID8',   name: '8GB',   desc: 'PURE 8GB 30Hr', price: 45450 },
          { code: 'ID9',   name: '9GB',   desc: 'PURE 9GB 30Hr', price: 55350 },
          { code: 'ID10',  name: '10GB',  desc: 'PURE 10GB 30Hr', price: 57350 }
        ]
      },
      {
        name: 'indosat-reguler',
        title: 'Indosat Data Reguler',
        packages: [
          { code: 'IDN1M',  name: '1GB+2GB',   desc: '1GB + 2GB Apps 6Hr', price: 16825 },
          { code: 'IDN1',   name: '1GB+4.5GB', desc: '1GB + 4.5GB Apps 28Hr', price: 34975 },
          { code: 'IDN2',   name: '2GB',       desc: '2GB + 8GB Apps 28Hr', price: 58750 },
          { code: 'IDN3',   name: '3GB+17GB',  desc: '3GB + 17GB Apps, Youtube + SMS Sesama 28Hr', price: 81750 },
          { code: 'IDN7',   name: '7GB',       desc: '7GB + 28GB Apps, Youtube + SMS Sesama 28Hr', price: 103750 },
          { code: 'IDN10',  name: '10GB+35GB', desc: '10GB + 35GB Apps, Youtube + SMS&Telp Sesama 28Hr', price: 115100 },
          { code: 'IDN99',  name: '90GB',      desc: 'Freedom Kuota 90GB + SMS&Telp 28Hr', price: 153200 }
        ]
      },
      {
        name: 'indosat-freedom',
        title: 'Indosat Freedom',
        packages: [
          { code: 'IDF2',   name: '2GB',   desc: 'Freedom 2GB 14Hr', price: 21200 },
          { code: 'IDF3',   name: '3GB',   desc: 'Freedom 3GB 14Hr', price: 21750 },
          { code: 'IDF4',   name: '4GB',   desc: 'Freedom 4GB 20Hr', price: 29200 },
          { code: 'IDF5',   name: '5.5GB', desc: 'Freedom 5.5GB 28Hr', price: 32900 },
          { code: 'IDF8',   name: '8GB',   desc: 'Freedom 8GB 28Hr', price: 39250 },
          { code: 'IDF6',   name: '6.5GB', desc: 'Freedom 6.5GB 28Hr', price: 35225 },
          { code: 'IDF7',   name: '7GB',   desc: 'Freedom 7GB 28Hr', price: 37250 },
          { code: 'IDF12',  name: '12GB',  desc: 'Freedom 12GB 28Hr', price: 47300 },
          { code: 'IDF9',   name: '9GB',   desc: 'Freedom 9GB 28Hr', price: 41250 },
          { code: 'IDF10',  name: '10GB',  desc: 'Freedom 10GB 28Hr', price: 43275 },
          { code: 'IDF14',  name: '14GB',  desc: 'Freedom 14GB 28Hr', price: 56350 },
          { code: 'IDF13',  name: '13GB',  desc: 'Freedom 13GB 28Hr', price: 54350 },
          { code: 'IDF16',  name: '16GB',  desc: 'Freedom 16GB 28Hr', price: 59390 },
          { code: 'IDF20',  name: '20GB',  desc: 'Freedom 20GB 28Hr', price: 68450 },
          { code: 'IDF18',  name: '18GB',  desc: 'Freedom 18GB 28Hr', price: 63400 },
          { code: 'IDF25',  name: '25GB',  desc: 'Freedom 25GB 28Hr', price: 77550 },
          { code: 'IDF30',  name: '30GB',  desc: 'Freedom 30GB 28Hr', price: 89650 },
          { code: 'IDF28',  name: '28GB',  desc: 'Freedom 28GB 28Hr', price: 85600 },
          { code: 'IDF42',  name: '42GB',  desc: 'Freedom 42GB 28Hr', price: 97650 },
          { code: 'IDF45',  name: '45GB',  desc: 'Freedom 45GB 28Hr', price: 101700 },
          { code: 'IDF50',  name: '50GB',  desc: 'Freedom 50GB 28Hr', price: 111750 },
          { code: 'IDF70',  name: '70GB',  desc: 'Freedom 70GB 28Hr', price: 137950 },
          { code: 'IDF100', name: '100GB', desc: 'Freedom 100GB 28Hr', price: 144000 },
          { code: 'IDF150', name: '150GB', desc: 'Freedom 150GB 28Hr', price: 148000 }
        ]
      },
      {
        name: 'indosat-freedom-combo',
        title: 'Indosat Freedom Combo',
        packages: [
          { code: 'IFC2',  name: '4GB',  desc: '3GB + 1GB Malam 28Hr (Gangguan)', price: 32100 },
          { code: 'IFC1',  name: '6GB',  desc: '4GB + 2GB Malam 28Hr', price: 37650 },
          { code: 'IFC3',  name: '10GB', desc: '7GB + 3GB Malam 28Hr', price: 50750 },
          { code: 'IFC5',  name: '20GB', desc: '15GB + 5GB Malam 28Hr', price: 76350 },
          { code: 'IFC10', name: '30GB', desc: '23GB + 7GB Malam 28Hr', price: 97650 }
        ]
      },
      {
        name: 'indosat-yellow',
        title: 'Indosat Yellow',
        packages: [
          { code: 'IDH1',  name: '1GB', desc: 'YELLOW 1GB 1Hr', price: 6700 },
          { code: 'IDH2',  name: '1GB', desc: 'YELLOW 1GB 2Hr', price: 6950 },
          { code: 'IDH3',  name: '1GB', desc: 'YELLOW 1GB 3Hr', price: 8050 },
          { code: 'IDH7',  name: '1GB', desc: 'YELLOW 1GB 7Hr', price: 11650 },
          { code: 'IDH15', name: '1GB', desc: 'YELLOW 1GB 15Hr', price: 14500 }
        ]
      }
    ]
  },
  {
    name: 'xl',
    title: 'XL Axiata',
    prefixes: ['0817', '0818', '0819', '0859', '0877', '0878'],
    subCategories: [
      {
        name: 'xl-data',
        title: 'XL Data Flat',
        packages: [
          { code: 'XDF100', name: '100MB', desc: 'FLAT 100MB 28HR', price: 4050 },
          { code: 'XDF500', name: '500MB', desc: 'FLAT 500MB 28HR', price: 6050 },
          { code: 'XDF800', name: '800MB', desc: 'FLAT 800MB 28HR', price: 8050 },
          { code: 'XDF1',   name: '1GB',   desc: 'FLAT 1GB 30HR', price: 10050 },
          { code: 'XDF2',   name: '2GB',   desc: 'FLAT 2GB 30HR', price: 16100 },
          { code: 'XDF3',   name: '3GB',   desc: 'FLAT 3GB 30HR', price: 24150 },
          { code: 'XDF4',   name: '4GB',   desc: 'FLAT 4GB 30HR', price: 31200 },
          { code: 'XDF5',   name: '5GB',   desc: 'FLAT 5GB 30HR', price: 38250 },
          { code: 'XDF6',   name: '6GB',   desc: 'FLAT 6GB 30HR', price: 45300 },
          { code: 'XDF7',   name: '7GB',   desc: 'FLAT 7GB 30HR', price: 54350 },
          { code: 'XDF10',  name: '10GB',  desc: 'FLAT 10GB 30HR', price: 67450 },
          { code: 'XDF14',  name: '14GB',  desc: 'FLAT 14GB 28HR', price: 69480 },
          { code: 'XDF8',   name: '8GB',   desc: 'FLAT 8GB 30HR', price: 63450 },
          { code: 'XDF18',  name: '18GB',  desc: 'FLAT 18GB 28HR', price: 74500 },
          { code: 'XDF9',   name: '9GB',   desc: 'FLAT 9GB 30HR', price: 65650 },
        ]
      },
      {
        name: 'xl-combo-flex',
        title: 'XL Combo Flex',
        packages: [
          { code: 'XCF1',  name: '3.5GB', desc: '3.5GB + 5Mnt Tlp, 14Hr (FLEX S)', price: 25750 },
          { code: 'XCF12', name: '3GB-7GB', desc: '3GB+UpTo 7GB Lokal + 5Mnt Tlp, 28Hr (FLEX S+)', price: 35225 },
          { code: 'XCF2',  name: '4GB-10GB', desc: '4GB+UpTo 10GB Lokal + 5Mnt Tlp, 28Hr (FLEX M)', price: 49770 },
          { code: 'XCF26', name: '6GB-12GB', desc: '6GB+UpTo 12GB Lokal + 5Mnt Tlp, 28Hr (FLEX M+)', price: 57450 },
          { code: 'XCF3',  name: '9GB-18GB', desc: '9GB+UpTo 18GB Lokal + 5Mnt Tlp, 28Hr (FLEX L)', price: 66450 },
          { code: 'XCF11', name: '11GB-23GB', desc: '11GB+UpTo 23GB Lokal + 5Mnt Tlp, 28Hr (FLEX L+)', price: 78000 },
          { code: 'XCF4',  name: '15GB-30GB', desc: '15GB+UpTo 30GB Lokal + 5Mnt Tlp, 28Hr (FLEX XL)', price: 94800 },
          { code: 'XCF5',  name: '30GB-60GB', desc: '30GB+UpTo 60GB Lokal + 5Mnt Tlp, 28Hr (FLEX XXL)', price: 136750 },
          { code: 'XCF6',  name: '60GB-120GB', desc: '60GB+UpTo 120GB Lokal + 5Mnt Tlp, 28Hr (FLEX XXXL)', price: 162150 },
        ]
      },
      {
        name: 'xl-combo-xtra',
        title: 'XL Combo Xtra',
        packages: [
          { code: 'XCX5',  name: '15GB',  desc: 'COMBO XTRA 5GB+10GB ytb + 20mnt Telp. 28Hr', price: 61425 },
          { code: 'XCX10', name: '30GB',  desc: 'COMBO XTRA 10GB+20GB ytb + 30mnt Telp. 28Hr', price: 90200 },
          { code: 'XCX15', name: '45GB',  desc: 'COMBO XTRA 15GB+30GB ytb + 40mnt Telp. 28Hr', price: 126900 },
          { code: 'XCX20', name: '60GB',  desc: 'COMBO XTRA 20GB+40GB ytb + 60mnt Telp. 28Hr', price: 173200 },
          { code: 'XCX35', name: '105GB', desc: 'COMBO XTRA 35GB+70GB ytb + 90mnt Telp. 28Hr', price: 229200 },
        ]
      },
      {
        name: 'xl-hotrod',
        title: 'XL HotRod',
        packages: [
          { code: 'XH5',   name: '500MB', desc: 'HotRod 500MB 7hr', price: 6050 },
          { code: 'XH8',   name: '1GB',   desc: 'HotRod 1GB 2hr (Gangguan)', price: 6300 },
          { code: 'XH30',  name: '800MB', desc: 'HotRod 800MB 30hr', price: 8950 },
          { code: 'XH10',  name: '1GB',   desc: 'HotRod 1GB 7hr', price: 9150 },
          { code: 'XH13',  name: '1.5GB', desc: 'HotRod 1.5B 3hr', price: 11200 },
          { code: 'XH7',   name: '2GB',   desc: 'HotRod 2GB 7hr', price: 16200 },
          { code: 'XH20',  name: '3GB',   desc: 'HotRod 3GB 7hr', price: 19160 },
          { code: 'XH45',  name: '1.5GB', desc: 'HotRod 1.5GB 30hr', price: 20600 },
          { code: 'XH54',  name: '3GB',   desc: 'HotRod 3GB 30hr', price: 26700 },
          { code: 'XH90',  name: '6GB',   desc: 'HotRod 6GB 30hr', price: 49900 },
          { code: 'XH117', name: '8GB',   desc: 'HotRod 8GB 30hr', price: 64350 },
          { code: 'XH162', name: '12GB',  desc: 'HotRod 12GB 30hr', price: 95000 },
          { code: 'XH198', name: '16GB',  desc: 'HotRod 16GB 30hr', price: 197150 },
        ]
      }
    ]
  },
  {
    name: 'axis',
    title: 'Axis',
    prefixes: ['0831', '0832', '0833', '0838'],
    subCategories: [
      {
        name: 'axis-bronet-harian',
        title: 'Axis Bronet Harian',
        packages: [
          { code: 'AXA1',   name: '1GB',   desc: 'BRONET 1GB 1Hr', price: 7250 },
          { code: 'AXA2',   name: '2GB',   desc: 'BRONET 2GB 1Hr', price: 9050 },
          { code: 'AXA3',   name: '3GB',   desc: 'BRONET 3GB 1Hr', price: 10050 },
          { code: 'AXA5',   name: '5GB',   desc: 'BRONET 5GB 1Hr', price: 12080 },
          { code: 'AXA13',  name: '1GB',   desc: 'BRONET 1GB 3Hr', price: 12050 },
          { code: 'AXA23',  name: '2GB',   desc: 'BRONET 2GB 3Hr', price: 15100 },
          { code: 'AXA33',  name: '3GB',   desc: 'BRONET 3GB 3Hr', price: 17100 },
          { code: 'AXA53',  name: '5GB',   desc: 'BRONET 5GB 3Hr', price: 21150 },
          { code: 'AXA17',  name: '1GB',   desc: 'BRONET 1GB 7Hr', price: 19650 },
          { code: 'AXA27',  name: '2GB',   desc: 'BRONET 2GB 7Hr', price: 23150 },
          { code: 'AXA37',  name: '3GB',   desc: 'BRONET 3GB 7Hr', price: 26200 },
          { code: 'AXA57',  name: '5GB',   desc: 'BRONET 5GB 7Hr', price: 32250 },
        ]
      },
      {
        name: 'axis-bronet-24jam',
        title: 'Axis Bronet 24 Jam',
        packages: [
          { code: 'AXB1',   name: '1GB',   desc: 'BRONET 1GB 30Hr', price: 22150 },
          { code: 'AXB2',   name: '2GB',   desc: 'BRONET 2GB 30Hr', price: 32200 },
          { code: 'AXB3',   name: '3GB',   desc: 'BRONET 3GB 30Hr', price: 42300 },
          { code: 'AXB5',   name: '5GB',   desc: 'BRONET 5GB 30Hr', price: 62450 },
          { code: 'AXB8',   name: '8GB',   desc: 'BRONET 8GB 30Hr', price: 84600 },
          { code: 'AXB10',  name: '10GB',  desc: 'BRONET 10GB 30Hr', price: 96700 },
          { code: 'AXB12',  name: '12GB',  desc: 'BRONET 12GB 30Hr', price: 110800 },
          { code: 'AXB16',  name: '16GB',  desc: 'BRONET 16GB 30Hr', price: 139000 },
        ]
      },
      {
        name: 'axis-owsem',
        title: 'Axis OWSEM',
        packages: [
          { code: 'AXO16',  name: '16GB',  desc: 'OWSEM 2GB+2GB Games/Music+12GB Malam, 30Hr', price: 45300 },
          { code: 'AXO24',  name: '24GB',  desc: 'OWSEM 3GB+3GB Games/Music+18GB Malam, 30Hr', price: 56400 },
          { code: 'AXO40',  name: '40GB',  desc: 'OWSEM 5GB+5GB Games/Music+30GB Malam, 30Hr', price: 82600 },
          { code: 'AXO64',  name: '64GB',  desc: 'OWSEM 8GB+8GB Games/Music+48GB Malam, 30Hr', price: 105750 },
          { code: 'AXO120', name: '120GB', desc: 'OWSEM 15GB+15GB Games/Music+90GB Malam, 30Hr', price: 149100 },
        ]
      },
      {
        name: 'axis-warnet',
        title: 'Axis Warnet',
        packages: [
          { code: 'AXW1',   name: '1GB',   desc: 'WARNET 1GB 1Jam', price: 2050 },
          { code: 'AXW2',   name: '2GB',   desc: 'WARNET 2GB 2Jam', price: 3550 },
          { code: 'AXW3',   name: '3GB',   desc: 'WARNET 3GB 3Jam', price: 4550 },
        ]
      }
    ]
  },
  {
    name: 'smartfren',
    title: 'Smartfren',
    prefixes: ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'],
    subCategories: [
      {
        name: 'sf-nonstop',
        title: 'Smartfren Data Nonstop',
        packages: [
          { code: 'SMN2',   name: '2GB',    desc: 'NONSTOP 2GB + Unlimited APK 10Hr', price: 13850 },
          { code: 'SMN3',   name: '3GB',    desc: 'NONSTOP 3GB + Unlimited APK 14Hr', price: 20400 },
          { code: 'SMN4',   name: '4GB',    desc: 'NONSTOP 4GB + Unlimited APK 14Hr', price: 20450 },
          { code: 'SMN5',   name: '5GB',    desc: 'NONSTOP 5GB + Unlimited APK 30Hr', price: 35050 },
          { code: 'SMN10',  name: '10GB',   desc: 'NONSTOP 10GB 28Hr', price: 40700 },
          { code: 'SMN15',  name: '15GB',   desc: 'NONSTOP 15GB + Unlimited APK 30Hr', price: 55200 },
          { code: 'SMN20',  name: '20GB',   desc: 'NONSTOP 20GB 28Hr', price: 58980 },
          { code: 'SMN35',  name: '35GB',   desc: 'NONSTOP 35GB 30Hr', price: 80550 },
          { code: 'SMN30',  name: '30GB',   desc: 'NONSTOP 30GB + Unlimited APK 30Hr (Gangguan)', price: 79550 },
          { code: 'SMN45',  name: '45GB',   desc: 'NONSTOP 45GB + Unlimited APK 28Hr', price: 117150 },
          { code: 'SMN75',  name: '75GB',   desc: 'NONSTOP 75GB 30Hr', price: 139800 },
          { code: 'SMN60',  name: '60GB',   desc: 'NONSTOP 60GB + Unlimited APK 28Hr', price: 140650 },
          { code: 'SMN100', name: '100GB',  desc: 'NONSTOP 100GB + Unlimited Apk 30Hr', price: 159900 }
        ]
      },
      {
        name: 'sf-unlimited',
        title: 'Smartfren Data Unlimited',
        packages: [
          { code: 'SMU1N',  name: 'Unlimited', desc: 'UNLIMITED 4G 1HR (FUP 1GB/HR)', price: 9950 },
          { code: 'SMU1',   name: 'Unlimited', desc: 'UNLIMITED 4G 3HR (FUP 1GB/HR)', price: 15800 },
          { code: 'SMU2',   name: 'Unlimited', desc: 'UNLIMITED 4G 7HR (FUP 1GB/HR)', price: 25680 },
          { code: 'SMU72',  name: 'Unlimited', desc: 'UNLIMITED 4G 7HR (FUP 2GB/HR)', price: 29360 },
          { code: 'SMU3',   name: 'Unlimited', desc: 'UNLIMITED 4G 14HR (FUP 1GB/HR)', price: 49650 },
          { code: 'SMU4',   name: 'Unlimited', desc: 'UNLIMITED 4G 28HR (FUP 500MB/HR)', price: 74550 },
          { code: 'SMU5',   name: 'Unlimited', desc: 'UNLIMITED 4G 28HR (FUP 1GB/HR)', price: 75550 },
          { code: 'SMU6',   name: 'Unlimited', desc: 'UNLIMITED 4G 28HR (FUP 2GB/HR)', price: 92250 },
          { code: 'SMU7',   name: 'Unlimited', desc: 'UNLIMITED 4G 28HR (FUP 3GB/HR)', price: 125550 },
          { code: 'SMU8',   name: 'Unlimited', desc: 'UNLIMITED 4G 28HR (FUP 4GB/HR)', price: 173850 },
          { code: 'SMU9',   name: 'Unlimited', desc: 'UNLIMITED 4G 28HR (FUP 5GB/HR)', price: 176600 }
        ]
      },
      {
        name: 'sf-volume',
        title: 'Smartfren Data Volume',
        packages: [
          { code: 'SMV12',  name: '3GB',  desc: 'VOLUME 500MB + 1.5GB Malam + 500MB Chat 3Hr', price: 11000 },
          { code: 'SMV10',  name: '3GB',  desc: 'VOLUME 1.25GB + 1.75GB Malam + 1GB Chat 7Hr', price: 16550 },
          { code: 'SMV22',  name: '4GB',  desc: 'VOLUME 2GB + 2GB Malam + 2GB Chat 7Hr', price: 16760 },
          { code: 'SMV30',  name: '10GB', desc: 'VOLUME 4GB + 4GB Malam + 1-2GB Chat 30Hr', price: 31750 },
          { code: 'SMV20',  name: '6GB',  desc: 'VOLUME 2GB + 3GB Malam + 1GB Chat 30Hr', price: 34150 },
          { code: 'SMV25',  name: '8GB',  desc: 'VOLUME 3GB + 5GB Malam + 3GB Chat 30Hr', price: 35650 },
          { code: 'SMV31',  name: '16GB', desc: 'VOLUME 6GB + 10GB Malam + 6GB Chat 30Hr', price: 37720 },
          { code: 'SMV33',  name: '30GB', desc: 'VOLUME 10GB + 20GB Malam 30Hr', price: 70450 },
          { code: 'SMV35',  name: '60GB', desc: 'VOLUME 20GB + 40GB Malam + Telp. 30Hr', price: 110350 },
          { code: 'SMV36',  name: '90GB', desc: 'VOLUME 30GB + 60GB Malam 30Hr', price: 136750 }
        ]
      }
    ]
  }
];

export const products = {
  topup: [
    {
      brand: 'gopay',
      title: 'GoPay',
      inputLabel: 'Nomor HP Tujuan',
      inputType: 'text',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h18M12 3v18"/></svg>', // Replace with Lucide if added
      nominals: [10000, 15000, 20000, 25000, 30000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
    },
    {
      brand: 'spay',
      title: 'ShopeePay',
      inputLabel: 'Nomor HP Tujuan',
      inputType: 'text',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h18M12 3v18"/></svg>', // Replace with Lucide if added
      nominals: [15000, 20000, 25000, 30000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
    },
    {
      brand: 'ovo',
      title: 'OVO',
      inputLabel: 'Nomor HP / ID OVO',
      inputType: 'text',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h18M12 3v18"/></svg>',
      nominals: [20000, 25000, 30000, 40000, 50000, 60000, 70000, 75000, 80000, 90000, 100000],
    },
    {
      brand: 'dana',
      title: 'DANA',
      inputLabel: 'Nomor HP / ID DANA',
      inputType: 'text',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h18M12 3v18"/></svg>',
      nominals: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
    },
    {
      brand: 'linkaja',
      title: 'LinkAja!',
      inputLabel: 'Nomor HP Tujuan',
      inputType: 'text',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h18M12 3v18"/></svg>',
      nominals: [10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 75000, 80000, 85000, 90000, 95000, 100000],
    },
    {
      brand: 'gojekdriv',
      title: 'Gojek Driver',
      inputLabel: 'Nomor HP Tujuan',
      inputType: 'text',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h18M12 3v18"/></svg>',
      nominals: [10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
    },
    {
      brand: 'grabdriv',
      title: 'Grab Driver',
      inputLabel: 'Nomor HP Tujuan',
      inputType: 'text',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h18M12 3v18"/></svg>',
      nominals: [100000],
    },
    {
      brand: 'maximdriv',
      title: 'Maxim Driver',
      inputLabel: 'ID Driver (Bukan Nomor HP)',
      inputType: 'text',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h18M12 3v18"/></svg>',
      nominals: [5000, 10000, 15000, 20000, 30000, 40000, 50000, 100000],
    },
    {
      brand: 'plntoken',
      title: 'Token Listrik PLN',
      inputLabel: 'Nomor Meter PLN',
      inputType: 'text',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h18M12 3v18"/></svg>',
      nominals: [5000, 10000, 15000, 20000, 50000, 100000],
    },
    {
      brand: 'gplay',
      title: 'Google Play',
      inputLabel: 'Nomor HP Tujuan',
      inputType: 'text',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h18M12 3v18"/></svg>',
      nominals: [20000, 50000, 100000],
    },
    {
      brand: 'wifi',
      title: 'Wi-Fi ID',
      inputLabel: 'Nomor HP Tujuan',
      inputType: 'text',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h18M12 3v18"/></svg>',
      nominals: [1, 7, 30],
    },
    // Add more e-wallets
  ],
  game: [
    {
      brand: 'ml',
      title: 'Mobile Legends',
      inputLabel: 'User ID',
      inputType: 'text',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
      nominals: [5, 12, 14, 15, 19, 28, 33, 36, 42, 44, 56, 59, 67, 74, 75, 85, 86, 167, 169, 170, 172, 185, 220, 222, 257, 344, 345, 370], // Diamonds
    },
    {
      brand: 'ff',
      title: 'Free Fire',
      inputLabel: 'User ID',
      inputType: 'text',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>',
      nominals: [5, 12, 20, 30, 50, 70, 75, 100, 140, 200, 355, 500, 720], // Diamonds
    },
    {
      brand: 'pubgm',
      title: 'PUBG Mobile',
      inputLabel: 'User ID',
      inputType: 'text',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>',
      nominals: [35, 40, 70, 100, 120, 150, 200, 210, 400], // UC
    },
    {
      brand: 'garena',
      title: 'Garena',
      inputLabel: 'Nomor HP Tujuan',
      inputType: 'text',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>',
      nominals: [33, 66, 165, 330], // Shell
    }
    // Add more games
  ],
  // Add more categories if needed
};