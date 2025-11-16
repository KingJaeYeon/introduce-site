'use client';
import { ModalType, useModalStore } from '@/store/modalStore';
import { animated, config, useTransition } from '@react-spring/web';
import { ViewModal } from '@/components/modal/VIewModal';
import LightboxModal from '@/components/modal/LightboxModal';

export default function ModalRenderer() {
  const { type, isOpen, closeModal, data } = useModalStore();

  const transitions = useTransition(isOpen && type ? type : null, {
    from: { opacity: 0, scale: 0.95 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0.95 },
    config: config.gentle,
  });

  if (!isOpen || !type) {
    return null;
  }

  const modals: Record<ModalType, any> = {
    view: <ViewModal onClose={closeModal} data={data} />,
    lightbox: <LightboxModal onClose={closeModal} data={data} />,
  };

  return transitions((style, item) =>
    item ? <animated.div style={style}>{modals[item]}</animated.div> : null,
  );
}

// export function SomeComponent() {
//   const { openModal } = useModalStore();
//
//   return (
//     <div className="space-y-4">
//       {/* 로그인 모달 */}
//       <button onClick={() => openModal('login')}>로그인</button>
//
//       {/* 회원가입 모달 */}
//       <button onClick={() => openModal('signup')}>회원가입</button>
//
//       {/* 확인 모달 */}
//       <button
//         onClick={() =>
//           openModal('confirm', {
//             title: '삭제 확인',
//             message: '정말 삭제하시겠습니까?',
//             cancelText: '취소',
//             confirmText: '삭제',
//             onConfirm: () => {
//               console.log('삭제됨');
//               // 삭제 API 호출
//             },
//           })
//         }
//       >
//         삭제
//       </button>
//
//       {/* 알림 모달 */}
//       <button onClick={() => openModal('alert', 'YouTube API Key 필요')}>알림</button>
//
//       <button onClick={() => toast.error('YouTube API Key 필요')}>toast</button>
//       <button onClick={() => alert('YouTube API 키를')}>toast</button>
//     </div>
//   );
// }
