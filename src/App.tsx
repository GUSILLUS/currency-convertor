import { CurrencyConverter } from "features";
import { Header } from "components";
import { useGetRates } from "shared/hooks";
import { Loader } from "shared/ui";

export const App = () => {
  const { rates, updatedAt, nextUpdateAt, isLoading, error } = useGetRates();

  return (
    <div className="h-full-screen p-8">
      {isLoading ? <Loader size="l" /> : <div className="flex h-full flex-col gap-4 rounded-xl border-4 border-slate-300 border-solid bg-slate-400 overflow-hidden shadow-2xl shadow-slate-600">
        <Header rates={rates} updatedAt={updatedAt} nextUpdateAt={nextUpdateAt} />
        <CurrencyConverter />
      </div>}
    </div>)
}
