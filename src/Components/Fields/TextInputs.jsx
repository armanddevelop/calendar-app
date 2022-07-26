import { TextField } from "@mui/material";
import { useField } from "formik";
import { useEffect } from "react";
import { useCalendarStore } from "../../Hooks";

export const TextInputs = (props) => {
  const { name, type, label, errors, setFieldValue, pageName } = props;
  const { activeEvent } = useCalendarStore();
  const [field] = useField(props);
  let isError = false;
  const { onChange, value } = field;

  useEffect(() => {
    if (activeEvent && pageName === "modal") {
      setFieldValue("title", activeEvent.title);
    }
  }, [activeEvent]);

  if (!(Object.keys(errors).length === 0 && errors.constructor === Object)) {
    isError = Boolean(errors[name]);
  }
  return (
    <div className="form__manager__fields">
      <TextField
        name={name}
        type={type}
        label={label}
        fullWidth={true}
        onChange={onChange}
        value={value}
        error={isError}
        helperText={isError ? errors[name] : ""}
      />
    </div>
  );
};
