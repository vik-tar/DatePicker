import React, { useState } from 'react';
import DatePicker from 'material-ui/DatePicker';

function DualDatePicker() {
  const [firstDate, setFirstDate] = useState(null);
  const [secondDate, setSecondDate] = useState(null);

  const handleFirstDateChange = (event, date) => {
    setFirstDate(date);
  };

  const handleSecondDateChange = (event, date) => {
    setSecondDate(date);
  };

  const initialDate = firstDate || new Date();
  const shouldDisableDate = date => firstDate && date < firstDate;

  return (
    <div>
      <DatePicker
        hintText="Select a date"
        onChange={handleFirstDateChange}
        value={firstDate}
      />
      <DatePicker
        hintText="Select a date"
        onChange={handleSecondDateChange}
        value={secondDate}
        initialDate={initialDate}
        shouldDisableDate={shouldDisableDate}
      />
    </div>
  );
}

export default DualDatePicker;
