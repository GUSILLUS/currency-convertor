import { Divider, Loader, Typography } from "shared/ui";
import { formatDate } from "shared/utils";
import { DateFormat } from "shared/utils/format-date";
import { useGetRatesUAH } from "shared/hooks";


export const Header = () => {
  const { rates, updatedAt, nextUpdateAt, isLoading } = useGetRatesUAH();

  const updateTime = formatDate({ date: updatedAt ? updatedAt : new Date(), f: DateFormat.hoursMinutesDayMonth });
  const nextUpdateTime = formatDate({ date: nextUpdateAt ? nextUpdateAt : new Date(), f: DateFormat.hoursMinutesDayMonth });

  return (
    <header className="flex flex-col gap-3 border-white border-b-2 border-solid bg-slate-700 p-2 sm:flex-row sm:items-center sm:gap-6 sm:p-4">
      {isLoading ? <Loader size="l" /> : <>
        <div className="mr-auto flex flex-col text-slate-100">
          <Typography as="h1" variant="h1" >Exchange Rates:</Typography>
          <Typography as="p" variant="p1-medium" className="">USD/EUR vs UAH</Typography>
        </div>

        <Divider className="block bg-slate-300 sm:hidden" isHorizontal />

        <div className="flex flex-col text-slate-100">
          <Typography as="p" variant="p1-medium" className="">1 UAH = {rates?.USD.toFixed(3)}$</Typography>
          <Typography as="p" variant="p1-medium" className="">1 UAH = {rates?.EUR.toFixed(3)}€</Typography>
        </div>

        <Divider className="hidden bg-slate-300 sm:block" />
        <Divider className="block bg-slate-300 sm:hidden" isHorizontal />

        <div className="flex flex-col text-slate-100">
          <Typography as="p" variant="p1-medium">Next Update: {nextUpdateTime} </Typography>
          <Typography as="p" variant="p1-medium">Last Update: {updateTime} </Typography>
        </div>
      </>}
    </header>
  );
}