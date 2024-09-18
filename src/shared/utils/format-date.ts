import { format } from 'date-fns';

export enum DateFormat {
  monthYear = 'MMMM yyyy',
  yearMonthDay = 'yyyy-MM-dd',
  dayMonthYear = 'dd/MM/yyyy',
  hoursMinutes = 'HH:mm',
  hoursMinutesSeconds = 'HH:mm:ss',
  dayMonthYearHoursMinutes = 'dd/MM/yyyy HH:mm',
  hoursMinutesDayMonth = 'HH:mm dd/MM',
}

interface FormatDateParams {
  date: Date | string | number;
  f?: DateFormat;
  formatToUTC?: boolean;
}

export const formatDate = ({ date, f = DateFormat.dayMonthYear, formatToUTC = false }: FormatDateParams) => {
  const newDate = new Date(date);
  const newDateOnly = new Date(newDate.valueOf() + newDate.getTimezoneOffset() * 60 * 1000);

  return format(formatToUTC ? new Date(newDateOnly) : newDate, f);
};
