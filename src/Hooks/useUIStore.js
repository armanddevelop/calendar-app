import { useSelector, useDispatch } from "react-redux";
import { onOpenDateModal, onCloseDateModal } from "../store";

export const useUIStore = () => {
  const dispatch = useDispatch();
  const { isDateModalOpen } = useSelector((state) => state.ui);
  const openDateModal = (isOpen) => {
    dispatch(onOpenDateModal(isOpen));
  };
  const closeDateModal = () => {
    dispatch(onCloseDateModal());
  };
  return {
    isDateModalOpen,
    openDateModal,
    closeDateModal,
  };
};
