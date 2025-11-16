import { create } from 'zustand';

export type ModalType = 'view' | 'lightbox';

export interface ModalState {
  type: ModalType | null;
  isOpen: boolean;
  data?: any;
}

interface ModalStore extends ModalState {
  openModal: (type: ModalType, data?: any) => void;
  reOpenModal: (type: ModalType) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  data: undefined,

  openModal: (type: ModalType, data?: any) => {
    set({ type, isOpen: true, data });
  },
  reOpenModal: (type: ModalType) => {
    set({ type, isOpen: true });
  },
  closeModal: () => {
    set({ type: null, isOpen: false, data: undefined });
  },
}));
