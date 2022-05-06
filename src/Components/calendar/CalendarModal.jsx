import { Box, Modal, Fade, Backdrop } from "@mui/material";
import { FormManager } from "../form/FormManager";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const CalendarModal = () => {
  return (
    <div>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={true}>
          <Box sx={style}>
            <div>
              <FormManager pageName="modal" title="Create Event" />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
