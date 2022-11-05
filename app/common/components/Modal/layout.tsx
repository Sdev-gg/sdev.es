'use client';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export default function Header({
  show,
  onClose,
  children,
  title,
}: {
  show: boolean;
  onClose: Function;
  children: React.ReactNode;
  title?: string;
}) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);
  function handleOnClose() {
    onClose();
  }

  const modalContent = show ? (
    <div className="bg-gray-800 absolute z-100 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-2 rounded flex flex-col gap-2 modal-animation ">
      <button
        type="button"
        onClick={() => handleOnClose()}
        className="items-left flex ml-[95%] hover:text-red-500 transition duration-300 text-lg"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <article>
        {title && <header>{title}</header>}
        <div className="">{children}</div>
      </article>
    </div>
  ) : null;

  if (isBrowser) {
    if (document.getElementById('modal-root')) {
      return ReactDOM.createPortal(
        modalContent,
        document.getElementById('modal-root'),
      );
    } else {
      return <p>Something wrong happened!</p>;
    }
  } else {
    return null;
  }
}
