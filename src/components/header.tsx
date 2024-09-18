import { Divider, Typography } from "shared/ui";
import type { ExchangeRates } from "shared/types";
import { formatDate } from "shared/utils";
import { DateFormat } from "shared/utils/format-date";

type Props = {
  rates: ExchangeRates;
  updatedAt: string;
  nextUpdateAt: string;
}


export const Header = ({ rates, updatedAt, nextUpdateAt }: Props) => {
  const updateTime = formatDate({ date: updatedAt, f: DateFormat.hoursMinutesDayMonth });
  const nextUpdateTime = formatDate({ date: nextUpdateAt, f: DateFormat.hoursMinutesDayMonth });


  return (
    <header className="flex items-center gap-6 border-white border-b-2 border-solid bg-slate-700 p-4">
      <div className="mr-auto flex flex-col text-slate-100">
        <Typography as="h1" variant="h1" >Exchange Rates:</Typography>
        <Typography as="p" variant="p1-medium" className="">USD/EUR vs UAH</Typography>
      </div>

      <div className="flex flex-col text-slate-100">
        <Typography as="p" variant="p1-medium" className="">1 UAH = {rates?.USD.toFixed(2)}$</Typography>
        <Typography as="p" variant="p1-medium" className="">1 UAH = {rates?.EUR.toFixed(2)}€</Typography>
      </div>

      <Divider className="bg-slate-300" />

      <div className="flex flex-col text-slate-100">
        <Typography as="p" variant="p1-medium">Next Update: {nextUpdateTime} </Typography>
        <Typography as="p" variant="p1-medium">Last Update: {updateTime} </Typography>
      </div>

    </header>
  );
}