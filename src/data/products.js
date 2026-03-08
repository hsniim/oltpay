export const pulsaProviders = [
  {
    name: 'telkomsel',
    title: 'Telkomsel',
    prefixes: ['0811', '0812', '0813', '0821', '0822', '0823', '0851', '0852', '0853'],
    nominals: [5000, 10000, 20000, 25000, 30000, 35000, 40000, 450000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
  },
  {
    name: 'indosat',
    title: 'Indosat',
    prefixes: ['0814', '0815', '0816', '0855', '0856', '0857', '0858'],
    nominals: [5000, 10000, 12000, 15000, 20000, 25000, 30000, 40000, ,50000, 60000, 70000, 80000, 90000, 100000],
  },
  {
    name: 'xl',
    title: 'XL',
    prefixes: ['0817', '0818', '0819', '0859', '0877', '0878'],
    nominals: [5000, 10000, 15000, 25000, 50000, 100000],
  },
  {
    name: 'tri',
    title: 'Tri',
    prefixes: ['0895', '0896', '0897', '0898', '0899'],
    nominals: [5000, 10000, 15000, 20000, 25000, 30000, 50000, 60000, 70000, 80000, 90000, 100000],
  },
  {
    name: 'smartfren',
    title: 'Smartfren',
    prefixes: ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888'],
    nominals: [5000, 10000, 20000, 25000, 30000, 50000, 60000, 75000, , 100000],
  },
  {
    name: 'axis',
    title: 'Axis',
    prefixes: ['0831', '0832', '0833', '0838'],
    nominals: [5000, 10000, 15000, 25000, 30000, 50000, 100000],
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
          { code: 'SDF100', name: '100MB', desc: 'FLASH 100MB 7Hr', price: 4950 },
          { code: 'SDF250', name: '250MB', desc: 'FLASH 250MB 7Hr', price: 6975 },
          { code: 'SDF500', name: '500MB', desc: 'FLASH 500MB 15Hr', price: 8975 },
          { code: 'SDF1',   name: '1GB',   desc: 'FLASH 1GB 28Hr', price: 11975 },
          { code: 'SDF2',   name: '2GB',   desc: 'FLASH 2GB 28Hr', price: 22975 },
          { code: 'SDF3',   name: '3GB',   desc: 'FLASH 3GB 28Hr', price: 25950 },
          { code: 'SDF4',   name: '4GB',   desc: 'FLASH 4GB 28Hr', price: 35975 },
          { code: 'SDF5',   name: '5GB',   desc: 'FLASH 5GB 28Hr', price: 37975 },
          { code: 'SDF6',   name: '6GB',   desc: 'FLASH 6GB 28Hr', price: 39975 },
          { code: 'SDF7',   name: '7GB',   desc: 'FLASH 7GB 28Hr', price: 43975 },
          { code: 'SDF8',   name: '8GB',   desc: 'FLASH 8GB 28Hr', price: 45975 },
          { code: 'SDF9',   name: '9GB',   desc: 'FLASH 9GB 28Hr', price: 53975 },
          { code: 'SDF10',  name: '10GB',  desc: 'FLASH 10GB 28Hr', price: 55975 },
          { code: 'SDF11',  name: '11GB',  desc: 'FLASH 11GB 28Hr', price: 56975 },
          { code: 'SDF12',  name: '12GB',  desc: 'FLASH 12GB 28Hr', price: 57975 },
          { code: 'SDF13',  name: '13GB',  desc: 'FLASH 13GB 30Hr', price: 59975 },
          { code: 'SDF15',  name: '15GB',  desc: 'FLASH 15GB 28Hr', price: 63975 },
          { code: 'SDF23',  name: '23GB',  desc: 'FLASH 23GB 28Hr', price: 83975 },
          { code: 'SDF25',  name: '25GB',  desc: 'FLASH 25GB 28Hr', price: 99975 },
          { code: 'SDF30',  name: '30GB',  desc: 'FLASH 30GB 28Hr', price: 100975 },
          { code: 'SDF35',  name: '35GB',  desc: 'FLASH 35GB 28Hr', price: 134975 },
        ]
      },
      {
        name: 'tel-bulk',
        title: 'Telkomsel Data Bulk',
        packages: [
          { code: 'SDB3',   name: '4GB',   desc: 'BULK 3GB + 1GB OMG 30hr', price: 44500 },
          { code: 'SDB5',   name: '7GB',   desc: 'BULK 5GB + 2GB OMG 30hr', price: 68900 },
          { code: 'SDB8',   name: '10GB',  desc: 'BULK 8GB + 2GB OMG 30hr', price: 91900 },
          { code: 'SDB12',  name: '14GB',  desc: 'BULK 12GB + 2GB OMG 30hr', price: 101900 },
          { code: 'SDB25',  name: '27GB',  desc: 'BULK 25GB + 2GB OMG 30hr', price: 164900 },
          { code: 'SDB50',  name: '52GB',  desc: 'BULK 50GB + 2GB OMG 30hr', price: 211900 },
        ]
      },
      {
        name: 'tel-bulk-alternatif',
        title: 'Bulk Alternatif',
        packages: [
          { code: 'SDB3A',  name: '4GB',   desc: 'BULK 3GB + 1GB OMG 30hr [Alt]', price: 55900 },
          { code: 'SDB5A',  name: '7GB',   desc: 'BULK 5GB + 2GB OMG 30hr [Alt]', price: 87900 },
          { code: 'SDB8A',  name: '10GB',  desc: 'BULK 8GB + 2GB OMG 30hr [Alt]', price: 106900 },
          { code: 'SDB12A', name: '14GB',  desc: 'BULK 12GB + 2GB OMG 30hr [Alt]', price: 115900 },
          { code: 'SDB25A', name: '27GB',  desc: 'BULK 25GB + 2GB OMG 30hr [Alt]', price: 195900 },
          { code: 'SDB50A', name: '52GB',  desc: 'BULK 50GB + 2GB OMG 30hr [Alt]', price: 236900 },
        ]
      },
      {
        name: 'tel-bulk-promo',
        title: 'Bulk Promo',
        packages: [
          { code: 'SDB3P',  name: '4GB',   desc: 'BULK 3GB + 1GB OMG 30hr [Promo]', price: 39575 },
          { code: 'SDB5P',  name: '7GB',   desc: 'BULK 5GB + 2GB OMG 30hr [Promo]', price: 64900 },
          { code: 'SDB8P',  name: '10GB',  desc: 'BULK 8GB + 2GB OMG 30hr [Promo]', price: 85975 },
          { code: 'SDB12P', name: '14GB',  desc: 'BULK 12GB + 2GB OMG 30hr [Promo]', price: 99955 },
        ]
      },
      {
        name: 'tel-gigamax',
        title: 'Telkomsel Gigamax',
        packages: [
          { code: 'SDG1',   name: '1GB',   desc: '1GB Maxstream 3Hr', price: 8190 },
          { code: 'SDG5',   name: '5GB',   desc: '5GB Maxstream 3Hr', price: 14880 },
          { code: 'SDG6',   name: '6GB',   desc: '6GB Maxstream 7Hr', price: 15850 },
          { code: 'SDG4',   name: '4GB',   desc: '4GB Maxstream 30Hr', price: 21560 },
          { code: 'SDG10',  name: '10GB',  desc: '10GB Maxstream 30Hr', price: 32000 },
          { code: 'SDG30',  name: '30GB',  desc: '30GB Maxstream 30Hr', price: 63350 },
          { code: 'SDG50',  name: '50GB',  desc: '50GB Maxstream 30Hr', price: 92025 },
        ]
      },
      {
        name: 'tel-reguler',
        title: 'Telkomsel Reguler',
        packages: [
          { code: 'STG5',   name: '20MB-50MB',   desc: 'REG 20MB-50MB 7hr', price: 6975 },
          { code: 'STG10',  name: '60MB-110MB',  desc: 'REG 60MB-110MB 7hr', price: 10395 },
          { code: 'STG20',  name: '250MB-400MB', desc: 'REG 250MB-400MB 7hr', price: 12975 },
          { code: 'STG25',  name: '400MB-500MB', desc: 'REG 400MB-500MB 30hr', price: 17975 },
          { code: 'STG50',  name: '1GB-1.5GB',   desc: 'REG 1GB-1.5GB 30hr', price: 35500 },
          { code: 'STG100', name: '5GB',         desc: 'KUOTA 5GB FULL ALL 30hr', price: 96250 },
        ]
      },
      {
        name: 'tel-byu',
        title: 'Telkomsel By.U',
        packages: [
          { code: 'SBDF1',   name: '1GB',   desc: 'BY.U FLASH 1GB 30Hr', price: 23975 },
          { code: 'SBDF2',   name: '2GB',   desc: 'BY.U FLASH 2GB 14-30Hr', price: 26975 },
          { code: 'SBDF3',   name: '3GB',   desc: 'BY.U FLASH 3GB 14-30Hr', price: 28775 },
          { code: 'SBDF4',   name: '4GB',   desc: 'BY.U FLASH 4GB 30Hr', price: 29975 },
          { code: 'SBDF5',   name: '5GB',   desc: 'BY.U FLASH 5GB 14-30Hr', price: 30975 },
          { code: 'SBDF6',   name: '6GB',   desc: 'BY.U FLASH 6GB 30Hr', price: 31975 },
          { code: 'SBDF7',   name: '7GB',   desc: 'BY.U FLASH 7GB 30Hr', price: 32975 },
          { code: 'SBDF8',   name: '8GB',   desc: 'BY.U FLASH 8GB 30Hr', price: 35450 },
          { code: 'SBDF9',   name: '9GB',   desc: 'BY.U FLASH 9GB 30Hr', price: 35975 },
          { code: 'SBDF10',  name: '10GB',  desc: 'BY.U FLASH 10GB 30Hr', price: 38975 },
          { code: 'SBDF12',  name: '12GB',  desc: 'BY.U FLASH 12GB 30Hr', price: 46570 },
          { code: 'SBDF14',  name: '14GB',  desc: 'BY.U FLASH 14GB 30Hr', price: 46975 },
          { code: 'SBDF20',  name: '20GB',  desc: 'BY.U FLASH 20GB 30Hr', price: 75975 },
          { code: 'SBDF23',  name: '23GB',  desc: 'BY.U FLASH 23GB 30Hr', price: 80975 },
          { code: 'SBDF42',  name: '42GB',  desc: 'BY.U FLASH 42GB 30Hr', price: 100110 },
          { code: 'SBDF50',  name: '50GB',  desc: 'BY.U FLASH 50GB 30Hr', price: 109975 },
          { code: 'SBDF65',  name: '65GB',  desc: 'BY.U FLASH 65GB 30Hr', price: 119975 },
          { code: 'SBDF75',  name: '75GB',  desc: 'BY.U FLASH 75GB 30Hr', price: 156975 },
          { code: 'SBDF100', name: '100GB', desc: 'BY.U FLASH 100GB 30Hr', price: 176975 },
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
          { code: 'TD5',  name: '5GB',  desc: 'KUOTA 5 GB 30hr', price: 31975 },
          { code: 'TD10', name: '10GB', desc: 'KUOTA 10 GB 30hr', price: 58500 },
        ]
      },
      {
        name: 'tri-aon',
        title: 'Tri Data AON',
        packages: [
          { code: 'TDA2',  name: '2.5GB', desc: 'TRI AON 2.5GB', price: 23800 },
          { code: 'TDA35', name: '3.5GB', desc: 'TRI AON 3.5GB', price: 25950 },
          { code: 'TDA3',  name: '3GB',   desc: 'TRI AON 3GB',   price: 25500 },
          { code: 'TDA4',  name: '4GB',   desc: 'TRI AON 4GB',   price: 28975 },
          { code: 'TDA5',  name: '5GB',   desc: 'TRI AON 5GB',   price: 30975 },
          { code: 'TDA6',  name: '6GB',   desc: 'TRI AON 6GB',   price: 32975 },
          { code: 'TDA7',  name: '7GB',   desc: 'TRI AON 7GB',   price: 46350 },
          { code: 'TDA8',  name: '8GB',   desc: 'TRI AON 8GB',   price: 49975 },
          { code: 'TDA9',  name: '9GB',   desc: 'TRI AON 9GB',   price: 52750 },
          { code: 'TDA10', name: '10GB',  desc: 'TRI AON 10GB',  price: 58250 },
          { code: 'TDA12', name: '12GB',  desc: 'TRI AON 12GB',  price: 58410 },
          { code: 'TDA14', name: '14GB',  desc: 'TRI AON 14GB',  price: 65850 },
          { code: 'TDA40', name: '40GB',  desc: 'TRI AON 40GB',  price: 110750 },
          { code: 'TDA80', name: '80GB',  desc: 'TRI AON 80GB',  price: 236675 },
        ]
      },
      {
        name: 'tri-bm',
        title: 'Tri Data BM',
        packages: [
          { code: 'TBM3', name: '3GB', desc: 'BM 3GB 7Hr', price: 18370 },
        ]
      },
      {
        name: 'tri-bulk',
        title: 'Tri Data Bulk',
        packages: [
          { code: 'TDB1',  name: '200MB', desc: 'TRI DATA BULK 200MB, 30HR (Gangguan)', price: 1475 },
          { code: 'TDB3',  name: '500MB', desc: 'TRI DATA BULK 500MB, 30HR', price: 4050 },
          { code: 'TDB5',  name: '1GB',   desc: 'TRI DATA BULK 1GB, 14HR', price: 6575 },
          { code: 'TDB8',  name: '1.5GB', desc: 'TRI DATA BULK 1.5GB, 14HR', price: 8975 },
          { code: 'TDB2',  name: '2GB',   desc: 'TRI DATA BULK 2GB 7HR', price: 11830 },
          { code: 'TDB15', name: '2.5GB', desc: 'TRI DATA BULK 2.5GB, 14HR', price: 14975 },
          { code: 'TDB13', name: '3GB',   desc: 'TRI DATA BULK 3GB, 30HR', price: 21575 },
          { code: 'TDB25', name: '4GB',   desc: 'TRI DATA BULK 4GB, 14HR', price: 24875 },
          { code: 'TDB14', name: '4GB',   desc: 'TRI DATA BULK 4GB, 30HR', price: 26575 },
          { code: 'TDB28', name: '5GB',   desc: 'TRI DATA BULK 5GB, 30HR', price: 31975 },
          { code: 'TDB50', name: '10GB',  desc: 'TRI DATA BULK 10GB, 30HR', price: 55975 },
        ]
      },
      {
        name: 'tri-getmore',
        title: 'Tri Data Getmore',
        packages: [
          { code: 'TGM2', name: '2GB', desc: 'GETMORE 2GB + 2GB Youtube 30Hr', price: 20250 },
          { code: 'TGM3', name: '4GB', desc: 'GETMORE 4GB + 4GB Youtube 30Hr', price: 33000 },
          { code: 'TGM5', name: '5GB', desc: 'GETMORE 5GB + 5GB Youtube 30Hr', price: 37950 },
        ]
      },
      {
        name: 'tri-happy',
        title: 'Tri Data Happy',
        packages: [
          { code: 'TDP3',   name: '3GB',   desc: 'TRI HAPPY 3GB 14HR', price: 21765 },
          { code: 'TDP7',   name: '7GB',   desc: 'TRI HAPPY 7GB 28HR', price: 32320 },
          { code: 'TDP6',   name: '6GB',   desc: 'TRI HAPPY 6GB 28HR (Gangguan)', price: 32595 },
          { code: 'TDP9',   name: '9GB',   desc: 'TRI HAPPY 9GB 28HR', price: 35100 },
          { code: 'TDP10',  name: '10GB',  desc: 'TRI HAPPY 10GB 28HR', price: 35575 },
          { code: 'TDP11',  name: '11GB',  desc: 'TRI HAPPY 11GB 28HR', price: 41975 },
          { code: 'TDP12',  name: '12GB',  desc: 'TRI HAPPY 12GB 28HR (Gangguan)', price: 46150 },
          { code: 'TDP14',  name: '14GB',  desc: 'TRI HAPPY 14GB 28HR', price: 46825 },
          { code: 'TDP15',  name: '15GB',  desc: 'TRI HAPPY 15GB 28HR', price: 47825 },
          { code: 'TDP18',  name: '18GB',  desc: 'TRI HAPPY 18GB 28HR', price: 49850 },
          { code: 'TDP20',  name: '20GB',  desc: 'TRI HAPPY 20GB 28HR', price: 55924 },
          { code: 'TDP25',  name: '25GB',  desc: 'TRI HAPPY 25GB 28HR', price: 64250 },
          { code: 'TDP30',  name: '30GB',  desc: 'TRI HAPPY 30GB 28HR', price: 70420 },
          { code: 'TDP42',  name: '42GB',  desc: 'TRI HAPPY 42GB 28HR', price: 74540 },
          { code: 'TDP55',  name: '55GB',  desc: 'TRI HAPPY 55GB 28HR', price: 91978 },
          { code: 'TDP100', name: '100GB', desc: 'TRI HAPPY 100GB 28HR', price: 117400 },
          { code: 'TDP75',  name: '75GB',  desc: 'TRI HAPPY 75GB 60HR', price: 139000 },
          { code: 'TDP130', name: '130GB', desc: 'TRI HAPPY 130GB 28HR', price: 141520 },
        ]
      },
      {
        name: 'tri-happy-mini',
        title: 'Tri Data Happy Mini',
        packages: [
          { code: 'TDH1M', name: '1.5GB', desc: 'TRI HAPPY 1.5GB, 1HR', price: 5835 },
          { code: 'TDH2',  name: '2.5GB', desc: 'TRI HAPPY 2.5GB, 1HR', price: 6425 },
          { code: 'TDH1',  name: '1GB',   desc: 'TRI HAPPY 1GB, 3HR',   price: 7325 },
          { code: 'TDH31', name: '3GB',   desc: 'TRI HAPPY 3GB, 1HR',   price: 8245 },
          { code: 'TDH3',  name: '3GB',   desc: 'TRI HAPPY 3GB, 3HR',   price: 11960 },
          { code: 'TDH53', name: '5GB',   desc: 'TRI HAPPY 5GB, 3HR',   price: 13975 },
          { code: 'TDH35', name: '3.5GB', desc: 'TRI HAPPY 3.5GB, 5HR', price: 15400 },
          { code: 'TDH4',  name: '4,5GB', desc: 'TRI HAPPY 4,5GB 5HR',  price: 15790 },
          { code: 'TDH6',  name: '6GB',   desc: 'TRI HAPPY 6GB 5HR',    price: 19265 },
          { code: 'TDH5',  name: '5GB',   desc: 'TRI HAPPY 5GB 7HR',    price: 20800 },
          { code: 'TDH97', name: '9GB',   desc: 'TRI HAPPY 9GB, 7HR',   price: 23075 },
          { code: 'TDH10', name: '10GB',  desc: 'TRI HAPPY 10GB, 7HR',  price: 23080 },
          { code: 'TDH15', name: '15GB',  desc: 'TRI HAPPY 15GB 7HR',   price: 27875 },
          { code: 'TDH9',  name: '9GB',   desc: 'TRI HAPPY 9GB, 10HR',  price: 35600 },
        ]
      },
      {
        name: 'tri-reguler',
        title: 'Tri Data Reguler',
        packages: [
          { code: 'TDR80', name: '80MB',   desc: 'REGULER 80MB',   price: 5450 },
          { code: 'TDR30', name: '300MB',  desc: 'REGULER 300MB',  price: 10250 },
          { code: 'TDR65', name: '650MB',  desc: 'REGULER 650MB',  price: 20550 },
          { code: 'TDR12', name: '1.25GB', desc: 'REGULER 1.25GB', price: 33050 },
          { code: 'TDR42', name: '4.25GB', desc: 'REGULER 4.25GB', price: 80900 },
        ]
      },
      {
        name: 'tri-unlimited',
        title: 'Tri Data Unlimited',
        packages: [
          { code: 'TDL6',  name: '6GB+20GB', desc: '6GB + Unlimited App (00:00-17:00) 30Hr', price: 73975 },
          { code: 'TDL22', name: '42GB',     desc: '30GB + 12GB Kuota Lokal 28Hr',          price: 74500 },
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
          { code: 'IDA12',  name: '1GB',   desc: 'Kuota 1GB 2Hr', price: 6245 },
          { code: 'IDA11',  name: '1.5GB', desc: 'Kuota 1.5GB 1Hr', price: 7181 },
          { code: 'IDA31',  name: '3GB',   desc: 'Kuota 3GB 1Hr', price: 7415 },
          { code: 'IDA21',  name: '2GB',   desc: 'Kuota 2GB 1Hr', price: 10375 },
          { code: 'IDA13',  name: '1.5GB', desc: 'Kuota 1.5GB 3Hr', price: 8860 },
          { code: 'IDA52',  name: '5GB',   desc: 'Kuota 5GB 2Hr', price: 9475 },
          { code: 'IDA33',  name: '3GB',   desc: 'Kuota 3GB 3Hr', price: 11975 },
          { code: 'IDA25',  name: '2.5GB', desc: 'Kuota 2.5GB 5Hr', price: 12945 },
          { code: 'IDA53',  name: '5GB',   desc: 'Kuota 5GB 3Hr', price: 12975 },
          { code: 'IDA35',  name: '3.5GB', desc: 'Kuota 3.5GB 5Hr', price: 14002 },
          { code: 'IDA55',  name: '5GB',   desc: 'Kuota 5GB 5Hr', price: 17475 },
          { code: 'IDA77',  name: '7GB',   desc: 'Kuota 7GB 7Hr', price: 22975 },
          { code: 'IDA157', name: '15GB',  desc: 'Kuota 15GB 7Hr', price: 29975 },
          { code: 'IDA155', name: '15GB',  desc: 'Kuota 15GB 5Hr', price: 28775 },
        ]
      },
      {
        name: 'indosat-pure',
        title: 'Indosat Data Pure',
        packages: [
          { code: 'ID500', name: '500MB', desc: 'PURE 500MB 30Hr (Gangguan)', price: 4375 },
          { code: 'ID1',   name: '1GB',   desc: 'PURE 1GB 14Hr', price: 8395 },
          { code: 'ID2',   name: '2GB',   desc: 'PURE 2GB 7Hr', price: 16550 },
          { code: 'ID3',   name: '3GB',   desc: 'PURE 3GB 30Hr', price: 22975 },
          { code: 'ID4',   name: '4GB',   desc: 'PURE 4GB 30Hr', price: 30975 },
          { code: 'ID5',   name: '5GB',   desc: 'PURE 5GB 30Hr', price: 33975 },
          { code: 'ID6',   name: '6GB',   desc: 'PURE 6GB 30Hr', price: 36975 },
          { code: 'ID7',   name: '7GB',   desc: 'PURE 7GB 30Hr', price: 39975 },
          { code: 'ID8',   name: '8GB',   desc: 'PURE 8GB 30Hr', price: 44100 },
          { code: 'ID9',   name: '9GB',   desc: 'PURE 9GB 30Hr', price: 53975 },
          { code: 'ID10',  name: '10GB',  desc: 'PURE 10GB 30Hr', price: 55975 },
        ]
      },
      {
        name: 'indosat-reguler',
        title: 'Indosat Data Reguler',
        packages: [
          { code: 'IDN1M',  name: '1GB+2GB',   desc: '1GB + 2GB Apps 6Hr', price: 15700 },
          { code: 'IDN1',   name: '1GB+4.5GB', desc: '1GB + 4.5GB Apps 28Hr', price: 33738 },
          { code: 'IDN2',   name: '2GB',       desc: '2GB + 8GB Apps 28Hr', price: 57335 },
          { code: 'IDN3',   name: '3GB+17GB',  desc: '3GB + 17GB Apps, Youtube + SMS 28Hr', price: 80145 },
          { code: 'IDN7',   name: '7GB',       desc: '7GB + 28GB Apps, Youtube + SMS 28Hr', price: 101990 },
          { code: 'IDN10',  name: '10GB+35GB', desc: '10GB + 35GB Apps, Youtube + SMS&Telp 28Hr', price: 113275 },
          { code: 'IDN99',  name: '90GB',      desc: 'Freedom Kuota 90GB + SMS&Telp 28Hr', price: 151107 },
        ]
      },
      {
        name: 'indosat-freedom',
        title: 'Indosat Freedom',
        packages: [
          { code: 'IDF2',   name: '2GB',   desc: 'Freedom 2GB 14 Hr', price: 20050 },
          { code: 'IDF3',   name: '3GB',   desc: 'Freedom 3GB 14 Hr', price: 20575 },
          { code: 'IDF4',   name: '4GB',   desc: 'Freedom 4GB 20Hr', price: 27975 },
          { code: 'IDF5',   name: '5.5GB', desc: 'Freedom 5.5GB 28Hr', price: 31675 },
          { code: 'IDF8',   name: '8GB',   desc: 'Freedom 8GB 28Hr', price: 37975 },
          { code: 'IDF6',   name: '6.5GB', desc: 'Freedom 6.5GB 28Hr', price: 33975 },
          { code: 'IDF7',   name: '7GB',   desc: 'Freedom 7GB 28Hr', price: 35975 },
          { code: 'IDF12',  name: '12GB',  desc: 'Freedom 12GB 28Hr', price: 45975 },
          { code: 'IDF9',   name: '9GB',   desc: 'Freedom 9GB 28Hr', price: 39975 },
          { code: 'IDF10',  name: '10GB',  desc: 'Freedom 10GB 28Hr', price: 41975 },
          { code: 'IDF14',  name: '14GB',  desc: 'Freedom 14GB 28Hr', price: 54975 },
          { code: 'IDF13',  name: '13GB',  desc: 'Freedom 13GB 28Hr', price: 52975 },
          { code: 'IDF16',  name: '16GB',  desc: 'Freedom 16GB 28Hr', price: 57975 },
          { code: 'IDF20',  name: '20GB',  desc: 'Freedom 20GB 28Hr', price: 66975 },
          { code: 'IDF18',  name: '18GB',  desc: 'Freedom 18GB 28Hr', price: 61975 },
          { code: 'IDF25',  name: '25GB',  desc: 'Freedom 25GB 28Hr', price: 75975 },
          { code: 'IDF30',  name: '30GB',  desc: 'Freedom 30GB 28Hr', price: 87975 },
          { code: 'IDF28',  name: '28GB',  desc: 'Freedom 28GB 28Hr', price: 83975 },
          { code: 'IDF42',  name: '42GB',  desc: 'Freedom 42GB 28Hr', price: 95975 },
          { code: 'IDF45',  name: '45GB',  desc: 'Freedom 45GB 28Hr', price: 99975 },
          { code: 'IDF50',  name: '50GB',  desc: 'Freedom 50GB 28Hr', price: 109975 },
          { code: 'IDF70',  name: '70GB',  desc: 'Freedom 70GB 28Hr', price: 135975 },
          { code: 'IDF100', name: '100GB', desc: 'Freedom 100GB 28Hr', price: 141975 },
          { code: 'IDF150', name: '150GB', desc: 'Freedom 150GB 28Hr', price: 145975 },
        ]
      },
      {
        name: 'indosat-freedom-combo',
        title: 'Indosat Freedom Combo',
        packages: [
          { code: 'IFC2',  name: '4GB',  desc: '3GB + 1GB Malam 28Hr (Gangguan)', price: 30865 },
          { code: 'IFC1',  name: '6GB',  desc: '4GB + 2GB Malam 28Hr', price: 36370 },
          { code: 'IFC3',  name: '10GB', desc: '7GB + 3GB Malam 28Hr', price: 49405 },
          { code: 'IFC5',  name: '20GB', desc: '15GB + 5GB Malam 28Hr', price: 74800 },
          { code: 'IFC10', name: '30GB', desc: '23GB + 7GB Malam 28Hr', price: 95935 },
        ]
      },
      {
        name: 'indosat-yellow',
        title: 'Indosat Yellow',
        packages: [
          { code: 'IDH1',  name: '1GB', desc: 'YELLOW 1GB 1Hr', price: 5650 },
          { code: 'IDH2',  name: '1GB', desc: 'YELLOW 1GB 2Hr', price: 5900 },
          { code: 'IDH3',  name: '1GB', desc: 'YELLOW 1GB 3Hr', price: 6975 },
          { code: 'IDH7',  name: '1GB', desc: 'YELLOW 1GB 7Hr', price: 10575 },
          { code: 'IDH15', name: '1GB', desc: 'YELLOW 1GB 15Hr', price: 13375 },
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
          { code: 'XDF100', name: '100MB', desc: 'FLAT 100MB 28HR', price: 2975 },
          { code: 'XDF500', name: '500MB', desc: 'FLAT 500MB 28HR', price: 4975 },
          { code: 'XDF800', name: '800MB', desc: 'FLAT 800MB 28HR', price: 6975 },
          { code: 'XDF1',   name: '1GB',   desc: 'FLAT 1GB 30HR', price: 8975 },
          { code: 'XDF2',   name: '2GB',   desc: 'FLAT 2GB 30HR', price: 14975 },
          { code: 'XDF3',   name: '3GB',   desc: 'FLAT 3GB 30HR', price: 22975 },
          { code: 'XDF4',   name: '4GB',   desc: 'FLAT 4GB 30HR', price: 29975 },
          { code: 'XDF5',   name: '5GB',   desc: 'FLAT 5GB 30HR', price: 36975 },
          { code: 'XDF6',   name: '6GB',   desc: 'FLAT 6GB 30HR', price: 43975 },
          { code: 'XDF7',   name: '7GB',   desc: 'FLAT 7GB 30HR', price: 52975 },
          { code: 'XDF10',  name: '10GB',  desc: 'FLAT 10GB 30HR', price: 65975 },
          { code: 'XDF14',  name: '14GB',  desc: 'FLAT 14GB 28HR', price: 67975 },
          { code: 'XDF8',   name: '8GB',   desc: 'FLAT 8GB 30HR', price: 61975 },
          { code: 'XDF18',  name: '18GB',  desc: 'FLAT 18GB 28HR', price: 72975 },
          { code: 'XDF9',   name: '9GB',   desc: 'FLAT 9GB 30HR', price: 64170 },
        ]
      },
      {
        name: 'xl-combo-flex',
        title: 'XL Combo Flex',
        packages: [
          { code: 'XCF1',  name: '3.5GB', desc: '3.5GB + 5Mnt Tlp, 14Hr (FLEX S)', price: 24545 },
          { code: 'XCF12', name: '3GB-7GB', desc: '3GB+UpTo 7GB Lokal + 5Mnt Tlp, 28Hr (FLEX S+)', price: 33975 },
          { code: 'XCF2',  name: '4GB-10GB', desc: '4GB+UpTo 10GB Lokal + 5Mnt Tlp, 28Hr (FLEX M)', price: 48410 },
          { code: 'XCF26', name: '6GB-12GB', desc: '6GB+UpTo 12GB Lokal + 5Mnt Tlp, 28Hr (FLEX M+)', price: 56050 },
          { code: 'XCF3',  name: '9GB-18GB', desc: '9GB+UpTo 18GB Lokal + 5Mnt Tlp, 28Hr (FLEX L)', price: 64975 },
          { code: 'XCF11', name: '11GB-23GB', desc: '11GB+UpTo 23GB Lokal + 5Mnt Tlp, 28Hr (FLEX L+)', price: 76450 },
          { code: 'XCF4',  name: '15GB-30GB', desc: '15GB+UpTo 30GB Lokal + 5Mnt Tlp, 28Hr (FLEX XL)', price: 93100 },
          { code: 'XCF5',  name: '30GB-60GB', desc: '30GB+UpTo 60GB Lokal + 5Mnt Tlp, 28Hr (FLEX XXL)', price: 134780 },
          { code: 'XCF6',  name: '60GB-120GB', desc: '60GB+UpTo 120GB Lokal + 5Mnt Tlp, 28Hr (FLEX XXXL)', price: 159975 },
        ]
      },
      {
        name: 'xl-combo-xtra',
        title: 'XL Combo Xtra',
        packages: [
          { code: 'XCX5',  name: '15GB',  desc: 'COMBO XTRA 5GB+10GB ytb + 20mnt Telp. 28Hr', price: 59975 },
          { code: 'XCX10', name: '30GB',  desc: 'COMBO XTRA 10GB+20GB ytb + 30mnt Telp. 28Hr', price: 88550 },
          { code: 'XCX15', name: '45GB',  desc: 'COMBO XTRA 15GB+30GB ytb + 40mnt Telp. 28Hr', price: 124975 },
          { code: 'XCX20', name: '60GB',  desc: 'COMBO XTRA 20GB+40GB ytb + 60mnt Telp. 28Hr', price: 170975 },
          { code: 'XCX35', name: '105GB', desc: 'COMBO XTRA 35GB+70GB ytb + 90mnt Telp. 28Hr', price: 226575 },
        ]
      },
      {
        name: 'xl-hotrod',
        title: 'XL HotRod',
        packages: [
          { code: 'XH5',   name: '500MB', desc: 'HotRod 500MB 7hr', price: 4975 },
          { code: 'XH8',   name: '1GB',   desc: 'HotRod 1GB 2hr (Gangguan)', price: 5225 },
          { code: 'XH30',  name: '800MB', desc: 'HotRod 800MB 30hr', price: 7850 },
          { code: 'XH10',  name: '1GB',   desc: 'HotRod 1GB 7hr', price: 8075 },
          { code: 'XH13',  name: '1.5GB', desc: 'HotRod 1.5B 3hr', price: 10113 },
          { code: 'XH7',   name: '2GB',   desc: 'HotRod 2GB 7hr', price: 15075 },
          { code: 'XH20',  name: '3GB',   desc: 'HotRod 3GB 7hr', price: 18025 },
          { code: 'XH45',  name: '1.5GB', desc: 'HotRod 1.5GB 30hr', price: 19450 },
          { code: 'XH54',  name: '3GB',   desc: 'HotRod 3GB 30hr', price: 25500 },
          { code: 'XH90',  name: '6GB',   desc: 'HotRod 6GB 30hr', price: 48525 },
          { code: 'XH117', name: '8GB',   desc: 'HotRod 8GB 30hr', price: 62900 },
          { code: 'XH162', name: '12GB',  desc: 'HotRod 12GB 30hr', price: 93300 },
          { code: 'XH198', name: '16GB',  desc: 'HotRod 16GB 30hr', price: 194750 },
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
          { code: 'AXA1',   name: '1GB',   desc: 'BRONET 1GB 1Hr', price: 6175 },
          { code: 'AXA2',   name: '2GB',   desc: 'BRONET 2GB 1Hr', price: 7975 },
          { code: 'AXA3',   name: '3GB',   desc: 'BRONET 3GB 1Hr', price: 8975 },
          { code: 'AXA5',   name: '5GB',   desc: 'BRONET 5GB 1Hr', price: 10975 },
          { code: 'AXA13',  name: '1GB',   desc: 'BRONET 1GB 3Hr', price: 10950 },
          { code: 'AXA23',  name: '2GB',   desc: 'BRONET 2GB 3Hr', price: 13975 },
          { code: 'AXA33',  name: '3GB',   desc: 'BRONET 3GB 3Hr', price: 15975 },
          { code: 'AXA53',  name: '5GB',   desc: 'BRONET 5GB 3Hr', price: 19975 },
          { code: 'AXA17',  name: '1GB',   desc: 'BRONET 1GB 7Hr', price: 18475 },
          { code: 'AXA27',  name: '2GB',   desc: 'BRONET 2GB 7Hr', price: 21975 },
          { code: 'AXA37',  name: '3GB',   desc: 'BRONET 3GB 7Hr', price: 24975 },
          { code: 'AXA57',  name: '5GB',   desc: 'BRONET 5GB 7Hr', price: 30975 },
        ]
      },
      {
        name: 'axis-bronet-24jam',
        title: 'Axis Bronet 24 Jam',
        packages: [
          { code: 'AXB1',   name: '1GB',   desc: 'BRONET 1GB 30Hr', price: 20975 },
          { code: 'AXB2',   name: '2GB',   desc: 'BRONET 2GB 30Hr', price: 31975 },
          { code: 'AXB3',   name: '3GB',   desc: 'BRONET 3GB 30Hr', price: 41975 },
          { code: 'AXB5',   name: '5GB',   desc: 'BRONET 5GB 30Hr', price: 61975 },
          { code: 'AXB8',   name: '8GB',   desc: 'BRONET 8GB 30Hr', price: 83975 },
          { code: 'AXB10',  name: '10GB',  desc: 'BRONET 10GB 30Hr', price: 95975 },
          { code: 'AXB12',  name: '12GB',  desc: 'BRONET 12GB 30Hr', price: 109975 },
          { code: 'AXB16',  name: '16GB',  desc: 'BRONET 16GB 30Hr', price: 137975 },
        ]
      },
      {
        name: 'axis-owsem',
        title: 'Axis OWSEM',
        packages: [
          { code: 'AXO16',  name: '16GB',  desc: 'OWSEM 2GB+2GB Games/Music+12GB Malam, 30Hr', price: 44975 },
          { code: 'AXO24',  name: '24GB',  desc: 'OWSEM 3GB+3GB Games/Music+18GB Malam, 30Hr', price: 55975 },
          { code: 'AXO40',  name: '40GB',  desc: 'OWSEM 5GB+5GB Games/Music+30GB Malam, 30Hr', price: 81975 },
          { code: 'AXO64',  name: '64GB',  desc: 'OWSEM 8GB+8GB Games/Music+48GB Malam, 30Hr', price: 104975 },
          { code: 'AXO120', name: '120GB', desc: 'OWSEM 15GB+15GB Games/Music+90GB Malam, 30Hr', price: 147975 },
        ]
      },
      {
        name: 'axis-warnet',
        title: 'Axis Warnet',
        packages: [
          { code: 'AXW1',   name: '1GB',   desc: 'WARNET 1GB 1Jam', price: 1000 },
          { code: 'AXW2',   name: '2GB',   desc: 'WARNET 2GB 2Jam', price: 2500 },
          { code: 'AXW3',   name: '3GB',   desc: 'WARNET 3GB 3Jam', price: 3500 },
        ]
      }
    ]
  } ,
  {
    name: 'smartfren',
    title: 'Smartfren',
    prefixes: ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'],
    subCategories: [
      {
        name: 'sf-nonstop',
        title: 'Smartfren Data Nonstop',
        packages: [
          { code: 'SMN2',   name: '2GB',    desc: 'NONSTOP 2GB + Unlimited APK 10Hr', price: 12715 },
          { code: 'SMN3',   name: '3GB',    desc: 'NONSTOP 3GB + Unlimited APK 14Hr', price: 19230 },
          { code: 'SMN4',   name: '4GB',    desc: 'NONSTOP 4GB + Unlimited APK 14Hr', price: 19295 },
          { code: 'SMN5',   name: '5GB',    desc: 'NONSTOP 5GB + Unlimited APK 30Hr', price: 33775 },
          { code: 'SMN10',  name: '10GB',   desc: 'NONSTOP 10GB 28Hr', price: 39400 },
          { code: 'SMN15',  name: '15GB',   desc: 'NONSTOP 15GB + Unlimited APK 30Hr', price: 53775 },
          { code: 'SMN20',  name: '20GB',   desc: 'NONSTOP 20GB 28Hr', price: 57550 },
          { code: 'SMN35',  name: '35GB',   desc: 'NONSTOP 35GB 30Hr', price: 78975 },
          { code: 'SMN30',  name: '30GB',   desc: 'NONSTOP 30GB + Unlimited APK 30Hr (Gangguan)', price: 77975 },
          { code: 'SMN45',  name: '45GB',   desc: 'NONSTOP 45GB + Unlimited APK 28Hr', price: 115300 },
          { code: 'SMN75',  name: '75GB',   desc: 'NONSTOP 75GB 30Hr', price: 137775 },
          { code: 'SMN60',  name: '60GB',   desc: 'NONSTOP 60GB + Unlimited APK 28Hr', price: 138665 },
          { code: 'SMN100', name: '100GB',  desc: 'NONSTOP 100GB + Unlimited Apk 30Hr', price: 157775 },
        ]
      },
      {
        name: 'sf-unlimited',
        title: 'Smartfren Data Unlimited',
        packages: [
          { code: 'SMU1N',  name: 'Unlimited', desc: 'UNLIMITED 4G 1HR (FUP 1GB/HR)', price: 8850 },
          { code: 'SMU1',   name: 'Unlimited', desc: 'UNLIMITED 4G 3HR (FUP 1GB/HR)', price: 14670 },
          { code: 'SMU2',   name: 'Unlimited', desc: 'UNLIMITED 4G 7HR (FUP 1GB/HR)', price: 24495 },
          { code: 'SMU72',  name: 'Unlimited', desc: 'UNLIMITED 4G 7HR (FUP 2GB/HR)', price: 28150 },
          { code: 'SMU3',   name: 'Unlimited', desc: 'UNLIMITED 4G 14HR (FUP 1GB/HR)', price: 48290 },
          { code: 'SMU4',   name: 'Unlimited', desc: 'UNLIMITED 4G 28HR (FUP 500MB/HR)', price: 72975 },
          { code: 'SMU5',   name: 'Unlimited', desc: 'UNLIMITED 4G 28HR (FUP 1GB/HR)', price: 73975 },
          { code: 'SMU6',   name: 'Unlimited', desc: 'UNLIMITED 4G 28HR (FUP 2GB/HR)', price: 90550 },
          { code: 'SMU7',   name: 'Unlimited', desc: 'UNLIMITED 4G 28HR (FUP 3GB/HR)', price: 123625 },
          { code: 'SMU8',   name: 'Unlimited', desc: 'UNLIMITED 4G 28HR (FUP 4GB/HR)', price: 171575 },
          { code: 'SMU9',   name: 'Unlimited', desc: 'UNLIMITED 4G 28HR (FUP 5GB/HR)', price: 174300 },
        ]
      },
      {
        name: 'sf-volume',
        title: 'Smartfren Data Volume',
        packages: [
          { code: 'SMV12',  name: '3GB',  desc: 'VOLUME 500MB + 1.5GB Malam + 500MB Chat 3Hr', price: 9905 },
          { code: 'SMV10',  name: '3GB',  desc: 'VOLUME 1.25GB + 1.75GB Malam + 1GB Chat 7Hr', price: 15425 },
          { code: 'SMV22',  name: '4GB',  desc: 'VOLUME 2GB + 2GB Malam + 2GB Chat 7Hr', price: 15635 },
          { code: 'SMV30',  name: '10GB', desc: 'VOLUME 4GB + 4GB Malam + 1-2GB Chat 30Hr', price: 30500 },
          { code: 'SMV20',  name: '6GB',  desc: 'VOLUME 2GB + 3GB Malam + 1GB Chat 30Hr', price: 32875 },
          { code: 'SMV25',  name: '8GB',  desc: 'VOLUME 3GB + 5GB Malam + 3GB Chat 30Hr', price: 34400 },
          { code: 'SMV31',  name: '16GB', desc: 'VOLUME 6GB + 10GB Malam + 6GB Chat 30Hr', price: 36445 },
          { code: 'SMV33',  name: '30GB', desc: 'VOLUME 10GB + 20GB Malam 30Hr', price: 68900 },
          { code: 'SMV35',  name: '60GB', desc: 'VOLUME 20GB + 40GB Malam + Telp. 30Hr', price: 108540 },
          { code: 'SMV36',  name: '90GB', desc: 'VOLUME 30GB + 60GB Malam 30Hr', price: 134740 },
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