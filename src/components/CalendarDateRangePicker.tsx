"use client";

import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";
import { Button } from "./ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "./ui/calendar";

interface CalendarDateRangePickerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const CalendarDateRangePicker: FC<CalendarDateRangePickerProps> = ({
  className,
}) => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2023, 0, 20),
    to: addDays(new Date(2023, 0, 20), 20),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "w-[260px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="w-4 h-4 mr-2" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CalendarDateRangePicker;
