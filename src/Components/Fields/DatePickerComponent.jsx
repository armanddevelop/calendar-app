import moment from "moment";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { TextField } from "@mui/material";
import { useState } from "react";

export const DatePickerComponent = (props) => {
  console.log("esto vale props ", props);
  const now = moment.now();
  console.log("esto vale now ", now);
  const [valueTime, setValueTime] = useState(new Date());
  return (
    <div className="form__manager__datePicker">
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="DATE AND TIME"
          value={valueTime}
          onChange={(value) => setValueTime(value)}
        />
      </LocalizationProvider>
    </div>
  );
};
