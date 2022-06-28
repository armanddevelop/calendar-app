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
  const { setActiveEvent } = useCalendarStore();
  const handleClickModal = () => {
    setActiveEvent({
      title: "",
      start: moment().toDate(),
      end: moment().add(2, "hours").toDate(),
      bgcolor: "#fafafa",
      notes: "",
      user: {
        _id: "12346",
        name: "licha",
      },
    });
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
