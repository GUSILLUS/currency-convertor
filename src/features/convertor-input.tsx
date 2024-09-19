import { Typography } from "shared/ui";

type Props = {
  label: string;
  options: JSX.Element[];
  selectValue: string;
  inputValue: string;
  isLoading: boolean;
  onSelectionChange: (value: string) => void;
  onInputChange: (value: string) => void;
}

export const ConvertorInput = ({ label, options, selectValue, inputValue, isLoading, onInputChange, onSelectionChange }: Props) => {
  return (
    <div className='flex flex-col gap-1'>
        <Typography as="p" variant="p2-bold" className="ml-4 text-slate-800 uppercase">
          {label}
        </Typography>

        <div className="flex max-w-[400px] gap-2 rounded-xl border border-slate-300 border-solid bg-slate-200 p-4 shadow-xl">
          <select value={selectValue} onChange={e => onSelectionChange(e.target.value)} className="max-h-[300px] rounded-xl bg-slate-300 px-3 py-2 font-inter font-medium text-slate-800 text-xl outline-none" disabled={isLoading}>
            {options}
          </select>

          <input
            type="number"
            className="w-full rounded-xl bg-slate-300 px-3 py-2 font-inter text-slate-800 text-xl outline-none placeholder:font-inter placeholder:text-xl"
            placeholder='10'
            min={1}
            value={inputValue}
            disabled={isLoading}
            onChange={e => {
              onInputChange(e.target.value);
            }}
          />
        </div>
      </div>
  )
}