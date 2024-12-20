import { ReactElement, ReactNode, cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useClickOutside from "../hooks/useClickOutside";

const ModalContext = createContext<any>(undefined);

function Modal({ children }: { children: ReactElement | any }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return <ModalContext.Provider value={{ openName, close, open }}>{children}</ModalContext.Provider>;
}

function Open({ opens: openWindowName, children }: { opens: string; children: ReactElement }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ name, children }: { name: string; children: ReactElement }) {
  const { close, openName } = useContext(ModalContext);

  //   const { ref } = useClickOutside(close);

  if (name !== openName) return null;
  return createPortal(
    <div className="overlay">
      <div className="modal">
        <button className="modal-x" onClick={close}>
          <HiXMark />
        </button>
        <div className="modal__wrapper">{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
