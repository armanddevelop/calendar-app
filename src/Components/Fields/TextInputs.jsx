import { TextField } from "@mui/material";
import { useField } from "formik";

export const TextInputs = (props) => {
  const { name, type, label, errors } = props;
  const [field] = useField(props);
  let isError = false;
  //console.log("esto vale field", field);
  const { onChange, value } = field;
  //console.log("Esto vale errors ", errors);
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
