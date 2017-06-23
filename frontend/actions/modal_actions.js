export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (component) => {
  return ({
    type: OPEN_MODAL,
    component: component,
  });
};

export const closeModal = () => {
  return ({
    type: CLOSE_MODAL,
  });
};
