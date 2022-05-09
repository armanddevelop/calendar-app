import { TextareaAutosize } from "@mui/material";
import { useField } from "formik";

export const TextArea = (props) => {
  const { name, label } = props;
  const [field] = useField(props);
  const { onChange, value } = field;
  return (
    <div>
      <TextareaAutosize
        aria-label="empty textarea"
        name={name}
        value={value}
        placeholder={label}
        onChange={onChange}
        style={{ width: 250, height: 150 }}
      />
    </div>
  );
};
