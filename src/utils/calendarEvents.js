export const onViewChange = (e, setView) => {
  setView(e);
  localStorage.setItem("lastView", e);
};
