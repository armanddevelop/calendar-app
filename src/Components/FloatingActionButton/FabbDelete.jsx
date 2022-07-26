import { Fab } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCalendarStore } from "../../Hooks";

export const FabbDelete = () => {
  const { startDeleteActiveEvent, hasEventSeleted } = useCalendarStore();
  const styles = {
    position: "absolute",
    bottom: "-30px",
    margin: "25px",
    display: hasEventSeleted ? "" : "none",
  };

  return (
    <Fab
      color="error"
      aria-label="delete"
      style={styles}
      onClick={async () => await startDeleteActiveEvent()}
    >
      <DeleteIcon />
    </Fab>
  );
};
