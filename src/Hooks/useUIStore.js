import { useSelector, useDispatch } from "react-redux";
import { onOpenCloseDateModal } from "../store";

export const useUIStore = () => {
  const dispatch = useDispatch();
  const { isDateModalOpen } = useSelector((state) => state.ui);
  const showModal = (isOpen) => {
    dispatch(onOpenCloseDateModal(isOpen));
  };

  return {
    isDateModalOpen,
    showModal,
  };
};
