/** @jsx jsx */
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { jsx, css } from '@emotion/react';

const Calendar = () => {
    return (
        <div className='h-80 overflow-hidden'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar className='h-80 overflow-hidden' />
            </LocalizationProvider>
        </div>
    );
};

export default Calendar;
