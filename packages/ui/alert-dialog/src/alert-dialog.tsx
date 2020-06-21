import {
  Modal,
  ModalContent,
  ModalContentProps,
  ModalProps,
} from '@ALK-UI/modal';
import { forwardRef } from '@ALK-UI/system';
import * as React from 'react';

export type AlertDialogProps = Omit<ModalProps, 'initialFocusRef'> & {
  leastDestructiveRef: ModalProps['initialFocusRef'];
};

export function AlertDialog(props: AlertDialogProps) {
  const { leastDestructiveRef, ...rest } = props;
  return <Modal {...rest} initialFocusRef={leastDestructiveRef} />;
}

export const AlertDialogContent = forwardRef<ModalContentProps, 'section'>(
  function AlertDialogContent(props, ref) {
    return <ModalContent ref={ref} role="alertdialog" {...props} />;
  },
);

export {
  ModalBody as AlertDialogBody,
  ModalCloseButton as AlertDialogCloseButton,
  ModalFooter as AlertDialogFooter,
  ModalHeader as AlertDialogHeader,
  ModalOverlay as AlertDialogOverlay,
} from '@ALK-UI/modal';
