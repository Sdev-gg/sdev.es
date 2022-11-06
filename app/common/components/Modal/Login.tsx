'use client';

import ModalLayout from '@/components/Modal/layout';
import { useState } from 'react';

export default function LoginModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <ModalLayout onClose={() => setShowModal(false)} show={showModal}>
        Hello from the modal!
      </ModalLayout>
    </div>
  );
}
