import { CurrencyConverter } from "features";
import { Header } from "components";

export const App = () => {
  return (
    <div className="flex h-full-screen items-center justify-center p-8">
      <div className="flex h-[500px] w-[800px] flex-col gap-4 overflow-hidden rounded-xl border-4 border-slate-300 border-solid bg-slate-400 shadow-2xl shadow-slate-600">
        <Header />

        <CurrencyConverter />
      </div>
    </div>)
}
