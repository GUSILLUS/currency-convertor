import { useQuery } from "@tanstack/react-query";
import type { ExchangeRates } from "shared/types";

export const useGetRates = (fromCurrency: string) => {
  const api = `${process.env.REACT_APP_EXCHANGE_RATES_API as string}/${fromCurrency || 'USD'}`;

  const fetchRates = async () => {
    const res = await fetch(api);
    return res.json();
  };

  const { data, error, isLoading, refetch } = useQuery({ queryKey: ['exchangeRatesFromCurrency'], queryFn: fetchRates });
  
  const rates: ExchangeRates = data ? data.rates : [];

  return { rates, isLoading, error, refetch};
};