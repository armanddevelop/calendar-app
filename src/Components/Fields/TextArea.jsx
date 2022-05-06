import { TextareaAutosize } from "@mui/material";

export const TextArea = () => {
  return (
    <div>
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Put some notes about the event"
        style={{ width: 250, height: 150 }}
      />
    </div>
  );
};
