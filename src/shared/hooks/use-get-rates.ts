import { useQuery } from "@tanstack/react-query";
import type { ExchangeRates } from "shared/types";

const fetchRates = async () => {
  const res = await fetch(process.env.REACT_APP_EXCHANGE_RATES_API as string);
  return res.json();
};

export const useGetRates = () => {
  const { data, error, isLoading } = useQuery({ queryKey: ['exchangeRates'], queryFn: fetchRates });
  
  const rates: ExchangeRates = data ? data.rates : [];
  const updatedAt = data ? data.time_last_update_utc : '';
  const nextUpdateAt = data ? data.time_next_update_utc : '';

  return { rates, updatedAt, nextUpdateAt, isLoading, error};
};