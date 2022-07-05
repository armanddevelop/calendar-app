import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useCalendarStore, useUIStore } from "../../Hooks";

const styles = {
  margin: "25px",
  position: "absolute",
  right: "0px",
  bottom: "-30px",
};

export const FabAddNew = () => {
  const { showModal } = useUIStore();
  const { clearActiveEvent } = useCalendarStore();
  const handleClickModal = () => {
    clearActiveEvent();
    showModal(true);
  };
  return (
    <Fab
      color="primary"
      aria-label="add"
      onClick={handleClickModal}
      style={styles}
    >
      <AddIcon />
    </Fab>
  );
};
