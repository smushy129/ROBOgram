export const OPEN_MODAL = "OPEN_MODAL";

export const openModal = () => {
  return ({
    type: OPEN_MODAL,
    isOpen: true,
  });
};
