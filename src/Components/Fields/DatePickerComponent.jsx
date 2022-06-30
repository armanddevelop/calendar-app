import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import moment from "moment";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { TextField } from "@mui/material";
import { useField } from "formik";
import { useEffect } from "react";
import { useCalendarStore } from "../../Hooks";

export const DatePickerComponent = (props) => {
  const { name, label, errors, setFieldValue } = props;
  const { activeEvent } = useCalendarStore();
  const [field, , helpers] = useField(props);
  let isError = false;
  const { value } = field;
  const { setValue } = helpers;
  if (!(Object.keys(errors).length === 0 && errors.constructor === Object)) {
    isError = Boolean(errors[name]);
  }

  useEffect(() => {
    if (activeEvent) {
      setFieldValue(name, activeEvent[name]);
    }
  }, [activeEvent, setFieldValue, name]);
  const textField = (params) => {
    return (
      <TextField
        helperText={isError ? errors[name] : ""}
        {...params}
        error={isError}
      />
    );
  };
  const getDataFromPicker = (newValue) => {
    if (newValue) {
      //to Do maybe change this value
      const dateValue = newValue.format();
      setValue(dateValue);
    }
  };
  return (
    <div className="form__manager__datePicker">
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DateTimePicker
          renderInput={(params) => textField(params)}
          name={name}
          minDateTime={moment(new Date())}
          label={label}
          value={moment(value).toDate()}
          onChange={(value) => getDataFromPicker(value)}
        />
      </LocalizationProvider>
    </div>
  );
};
