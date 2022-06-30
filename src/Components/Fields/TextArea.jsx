import { TextareaAutosize } from "@mui/material";
import { useField } from "formik";
import { useEffect } from "react";
import { useCalendarStore } from "../../Hooks";

export const TextArea = (props) => {
  const { name, label, setFieldValue } = props;
  const { activeEvent } = useCalendarStore();
  const [field] = useField(props);
  const { onChange, value } = field;
  useEffect(() => {
    if (activeEvent) {
      setFieldValue("notes", activeEvent.notes);
    }
  }, [activeEvent, setFieldValue]);
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
