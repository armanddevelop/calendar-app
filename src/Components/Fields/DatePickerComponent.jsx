import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import moment from "moment";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { TextField } from "@mui/material";
import { useField } from "formik";

export const DatePickerComponent = (props) => {
  const { name, label } = props;
  const [field, , helpers] = useField(props);
  const { value } = field;
  const { setValue } = helpers;
  const momentDate = moment(new Date());
  const getDataFromPicker = (newValue) => {
    const dateValue = newValue.format();
    setValue(dateValue);
  };
  return (
    <div className="form__manager__datePicker">
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DateTimePicker
          renderInput={(params) => {
            return <TextField {...params} />;
          }}
          name={name}
          minDateTime={momentDate}
          label={label}
          value={value}
          onChange={(value) => getDataFromPicker(value)}
        />
      </LocalizationProvider>
    </div>
  );
};
