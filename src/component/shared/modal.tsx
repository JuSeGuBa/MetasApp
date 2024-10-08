import React from "react";

interface ModalProps {
  children: React.ReactNode;
}

function Modal({ children }: ModalProps) {
  return (
    <div className="flex items-center fixed inset-0 bg-gray-500 bg-opacity-75">
      {/* {JSON.stringify(state.objects[id])} */}
      <div className="mx-auto">{children}</div>
    </div>
  );
}

export default Modal;
