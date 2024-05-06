'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import Image from "next/image";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="z-10 absolute top-0 left-0 w-full h-full bg-[#3D3333b3]">
      <dialog ref={dialogRef} className="w-4/5 max-w-[480] bg-gradient-to-b from-black-900 to-black-800 text-grey-200 pt-8 pr-12 pb-12 pl-8" onClose={onDismiss}>
        {children}
        <button onClick={onDismiss} className="absolute top-10 right-8 ">
          <Image
            src={`/img/icons/icon-close.svg`}
            alt="close"
            width={14}
            height={14}
          />
        </button>
      </dialog>
    </div>,
    document.getElementById('modal-root')!
  );
}
