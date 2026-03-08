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

export const products = {
  topup: [
    {
      brand: 'gopay',
      title: 'GoPay',
      inputLabel: 'Nomor HP / ID GoPay',
      inputType: 'text',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h18M12 3v18"/></svg>', // Replace with Lucide if added
      nominals: [10000, 15000, 20000, 25000, 30000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000],
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
    // Add more e-wallets
  ],
  game: [
    {
      brand: 'mobile-legends',
      title: 'Mobile Legends',
      inputLabel: 'User ID & Server ID (e.g., 123456(7890))',
      inputType: 'text',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
      nominals: [86, 172, 257, 344, 429], // Diamonds
    },
    {
      brand: 'free-fire',
      title: 'Free Fire',
      inputLabel: 'User ID',
      inputType: 'text',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>',
      nominals: [100, 200, 500, 1000, 2000], // Diamonds
    },
    // Add more games
  ],
  // Add more categories if needed
};