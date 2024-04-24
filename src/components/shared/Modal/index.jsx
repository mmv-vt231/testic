import React from "react";
import {
  Modal as BaseModal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";

function Modal({ title, size, isOpen, onClose, children }) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} size={size} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="2xl" fontWeight="bold">
          {title}
        </ModalHeader>
        <ModalCloseButton top={4} right={4} />

        <ModalBody pb={6}>{children}</ModalBody>
      </ModalContent>
    </BaseModal>
  );
}

export default Modal;
