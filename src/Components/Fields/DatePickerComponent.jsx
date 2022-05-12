import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import moment from "moment";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { TextField } from "@mui/material";
import { useField } from "formik";

export const DatePickerComponent = (props) => {
  const { name, label, errors } = props;
  const [field, , helpers] = useField(props);
  let isError = false;
  const { value } = field;
  const { setValue } = helpers;
  if (!(Object.keys(errors).length === 0 && errors.constructor === Object)) {
    isError = Boolean(errors[name]);
  }
  const getDataFromPicker = (newValue) => {
    //console.log("esto vale new value ", newValue);
    if (newValue) {
      const dateValue = newValue.format();
      setValue(dateValue);
    }
  };
  return (
    <div className="form__manager__datePicker">
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DateTimePicker
          renderInput={(params) => {
            return (
              <TextField helperText={isError ? errors[name] : ""} {...params} />
            );
          }}
          name={name}
          minDateTime={moment(value)}
          label={label}
          value={value}
          onChange={(value) => getDataFromPicker(value)}
        />
      </LocalizationProvider>
    </div>
  );
};
