import {
  useRef,
  useEffect,
  useState,
  DOMElement,
} from 'react';
import { createPortal } from 'react-dom';

export default function usePortal() {
  const [isOpen, setOpen] = useState(false);
  const portal = useRef(document.createElement('div'));
  const elToMountTo = document.getElementById(
    'modal-root'
  ) as HTMLElement;

  useEffect(() => {
    elToMountTo.appendChild(portal.current);
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener(
      'click',
      handleOutsideMouseClick
    );
    return () => {
      document.removeEventListener(
        'keydown',
        handleKeydown
      );
      document.removeEventListener(
        'click',
        handleOutsideMouseClick
      );
      elToMountTo.removeChild(portal!.current);
    };
  }, [elToMountTo]);

  const handleKeydown = (e: KeyboardEvent) =>
    e.code === 'Escape' && setOpen(false);

  const openPortal = (event: any) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleOutsideMouseClick = (e: any) => {
    if (
      portal.current.contains(e.target as HTMLElement) ||
      e.button !== 0
    )
      return;
    setOpen(false);
  };

  const closePortal = (e: any) => {
    if (e.target !== e.currentTarget) return;
    setOpen(false);
  };

  const Portal: React.FC = ({ children }) =>
    createPortal(children, portal.current);

  return {
    isOpen,
    openPortal,
    closePortal,
    Portal,
  };
}
