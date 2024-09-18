import { useState } from 'react';

interface ExchangeRates {
  USD: number;
  EUR: number;
  UAH: number;
}

export const CurrencyConverter: React.FC = () => {
  const [rates, setRates] = useState<ExchangeRates>({ USD: 0, EUR: 0, UAH: 1 });
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('UAH');
  const [amount1, setAmount1] = useState('0');
  const [amount2, setAmount2] = useState('0');

  const convertCurrency1To2 = (value: string) => {
    const rate1 = rates[currency1 as keyof ExchangeRates];
    const rate2 = rates[currency2 as keyof ExchangeRates];
    setAmount1(value);
    setAmount2(((+value * rate2) / rate1).toFixed(2));
  };

  const convertCurrency2To1 = (value: string) => {
    const rate1 = rates[currency1 as keyof ExchangeRates];
    const rate2 = rates[currency2 as keyof ExchangeRates];
    setAmount2(value);
    setAmount1(((+value * rate1) / rate2).toFixed(2));
  };

  return (
    <div className='p-4'>
        <div>
          <input
            type="number"
            value={amount1}
            onChange={e => convertCurrency1To2((e.target.value))}
          />
          <select value={currency1} onChange={e => setCurrency1(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="UAH">UAH</option>
          </select>
        </div>
        <div>
          <input
            type="number"
            value={amount2}
            onChange={e => convertCurrency2To1((e.target.value))}
          />
          <select value={currency2} onChange={e => setCurrency2(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="UAH">UAH</option>
          </select>
        </div>
    </div>
  );
};
