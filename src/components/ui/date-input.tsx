import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DateInputProps {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
  required?: boolean;
}

const months = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

const DateInput = React.forwardRef<HTMLDivElement, DateInputProps>(
  ({ value, onChange, disabled, className, id, required }, ref) => {
    const [day, setDay] = React.useState("");
    const [month, setMonth] = React.useState("");
    const [year, setYear] = React.useState("");

    // Parse incoming value (YYYY-MM-DD format)
    React.useEffect(() => {
      if (value) {
        const parts = value.split("-");
        if (parts.length === 3) {
          setYear(parts[0]);
          setMonth(parts[1]);
          setDay(parts[2]);
        }
      } else {
        setDay("");
        setMonth("");
        setYear("");
      }
    }, [value]);

    const handleChange = (newDay: string, newMonth: string, newYear: string) => {
      // Only emit if all fields are filled
      if (newDay && newMonth && newYear && newYear.length === 4) {
        const paddedDay = newDay.padStart(2, "0");
        const dateString = `${newYear}-${newMonth}-${paddedDay}`;
        onChange?.(dateString);
      } else if (!newDay && !newMonth && !newYear) {
        onChange?.("");
      }
    };

    const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let val = e.target.value.replace(/\D/g, "");
      if (val.length > 2) val = val.slice(0, 2);
      const num = parseInt(val, 10);
      if (num > 31) val = "31";
      if (num < 0) val = "";
      setDay(val);
      handleChange(val, month, year);
    };

    const handleMonthChange = (val: string) => {
      setMonth(val);
      handleChange(day, val, year);
    };

    const handleYearChange = (val: string) => {
      setYear(val);
      handleChange(day, month, val);
    };

    return (
      <div ref={ref} className={cn("flex gap-2 items-center", className)}>
        {/* Day Input */}
        <div className="flex flex-col">
          <Input
            id={id}
            type="text"
            inputMode="numeric"
            placeholder="DD"
            maxLength={2}
            value={day}
            onChange={handleDayChange}
            disabled={disabled}
            required={required}
            className="border-2 w-16 text-center"
            aria-label="Day"
          />
        </div>

        {/* Month Dropdown */}
        <Select value={month} onValueChange={handleMonthChange} disabled={disabled}>
          <SelectTrigger className="border-2 w-[130px]" aria-label="Month">
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent>
            {months.map((m) => (
              <SelectItem key={m.value} value={m.value}>
                {m.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Year Dropdown */}
        <Select value={year} onValueChange={handleYearChange} disabled={disabled}>
          <SelectTrigger className="border-2 w-[100px]" aria-label="Year">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent className="max-h-[200px]">
            {years.map((y) => (
              <SelectItem key={y} value={String(y)}>
                {y}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  }
);

DateInput.displayName = "DateInput";

export { DateInput };
