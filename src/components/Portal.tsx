import React from "react";
import { createPortal } from "react-dom";

const Portal: React.FC = ({ children }) => {
  const modalRoot = document.getElementById("modal-root") as HTMLElement;
  return createPortal(children, modalRoot);
};

export default Portal;
