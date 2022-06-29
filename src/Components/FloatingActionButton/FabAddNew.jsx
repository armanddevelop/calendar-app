import moment from "moment";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useCalendarStore, useUIStore } from "../../Hooks";

const styles = {
  margin: "25px",
  position: "absolute",
  right: "25px",
  bottom: "-90px",
};

export const FabAddNew = () => {
  const { showModal } = useUIStore();
  const handleClickModal = () => {
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
