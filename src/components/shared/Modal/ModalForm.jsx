import React from "react";
import { ModalFooter, VStack, Button, useDisclosure } from "@chakra-ui/react";

import Modal from "@components/shared/Modal";
import Form from "@components/shared/form/Form";
import { cloneElement, isValidElement } from "react";

function ModalForm({ title, size, handleSubmit, triggerButton, type, children, ...props }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = data => {
    handleSubmit(data);
    onClose();
  };

  const getSubmitLabel = () => {
    switch (type) {
      case "create":
        return "Створити";
      case "edit":
        return "Зберегти";
    }
  };

  const TriggerButton = () =>
    isValidElement(triggerButton) ? cloneElement(triggerButton, { onClick: onOpen }) : null;

  return (
    <>
      <TriggerButton />
      <Modal title={title} size={size} isOpen={isOpen} onClose={onClose}>
        <Form onSubmit={onSubmit} {...props}>
          <VStack spacing={2}>{children}</VStack>

          <ModalFooter display="flex" justifyContent="center">
            <Button type="submit">{getSubmitLabel()}</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
}

export default ModalForm;
