import { useCallback, useEffect, useMemo, useState } from 'react';
import { useGetRates } from 'shared/hooks';
import type { ExchangeRates } from 'shared/types';
import { ConvertorInput } from './convertor-input';

import reverseIcon from 'assets/reverse.png';

export const CurrencyConverter = () => {
  const [amount1, setAmount1] = useState('0');
  const [amount2, setAmount2] = useState('0');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('UAH');

  const { rates, isLoading, refetch } = useGetRates(fromCurrency);

  const currencyKeys = useMemo(() => Object.keys(rates), [rates]);

  const options = useMemo(() => currencyKeys.map((rate) => (
    <option key={rate} value={rate}>{rate}</option>
  )), [currencyKeys]);

  const updateAmounts = useCallback((value: string, fromCurrency: string, toCurrency: string, setAmount: (value: string) => void) => {
    const rateFrom = rates[fromCurrency as keyof ExchangeRates];
    const rateTo = rates[toCurrency as keyof ExchangeRates];
    setAmount(((+value * rateTo) / rateFrom).toFixed(2));
  }, [rates]);

  const handleCurrencyChange = useCallback((currency: string, isCurrency1: boolean) => {
    if (isCurrency1) {
      if (currency === toCurrency) {
        setFromCurrency(currency);
        setToCurrency(fromCurrency);
      } else {
        setFromCurrency(currency);
      }
    } else {
      if (currency === fromCurrency) {
        setFromCurrency(toCurrency);
        setToCurrency(currency);
      } else {
        setToCurrency(currency);
      }
    }
  }, [fromCurrency, toCurrency]);

  const handleReverseCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    updateAmounts(amount1, toCurrency, fromCurrency, setAmount2);
  };

  const handleChangeCurrencyFrom = (value: string) => {
    setAmount1(value);
    updateAmounts(value, fromCurrency, toCurrency, setAmount2);
  }

  const handleChangeCurrencyTo = (value: string) => {
    setAmount1(value);
    updateAmounts(value, toCurrency, fromCurrency, setAmount1);
  }

  useEffect(() => {
    updateAmounts(amount1, fromCurrency, toCurrency, setAmount2);
  }, [fromCurrency, updateAmounts]);

  useEffect(() => {
    refetch();
  }, [fromCurrency]);

  return (
    <div className="relative flex grow flex-col items-center justify-center gap-3 p-4">
      <ConvertorInput label="From:" options={options} selectValue={fromCurrency} inputValue={amount1} isLoading={isLoading} onSelectionChange={(value) => handleCurrencyChange(value, true)} onInputChange={handleChangeCurrencyFrom} />

      <button type='button' className="-translate-y-1/4 absolute top-1/2 right-[80%] h-14 w-14 translate-x-1/2 rounded-2xl bg-slate-500 p-1" onClick={handleReverseCurrencies}>
        <img src={reverseIcon} alt="reverse" />
      </button>

      <ConvertorInput label="To:" options={options} selectValue={toCurrency} inputValue={amount2} isLoading={isLoading} onSelectionChange={(value) => handleCurrencyChange(value, false)} onInputChange={handleChangeCurrencyTo} />
    </div>
  );
};
