'use client';
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const Calendar = () => {
    return (
        <div className='m-auto box-border h-80 w-[280px] p-0 xs:w-[320px]'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
            </LocalizationProvider>
        </div>
    );
};

export default Calendar;
