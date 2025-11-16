'use client';

import React from 'react';
import { X } from 'lucide-react';

interface LightboxModalProps {
  onClose: () => void;
  data: { imgUrl: string };
}

export default function LightboxModal({ onClose, data }: LightboxModalProps) {
  const { imgUrl } = data;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
      }}
      onClick={onClose}
    >
      <div className="relative">
        <img
          src={imgUrl}
          alt="view"
          className="max-h-[90dvh] min-w-[50dvh]"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
      <X
        className="text-gray-white absolute top-2 right-2 h-7 w-7 cursor-pointer transition-opacity hover:opacity-80"
        onClick={onClose}
      />
    </div>
  );
}
