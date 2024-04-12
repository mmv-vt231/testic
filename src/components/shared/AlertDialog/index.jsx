import {
  AlertDialog as AlertDialogBase,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { cloneElement, isValidElement, useRef } from "react";

function AlertDialog({ title, description, onСonfirm, children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const TriggerButton = () =>
    isValidElement(children) ? cloneElement(children, { onClick: onOpen }) : null;

  const handleConfirm = () => {
    onСonfirm();
    onClose();
  };

  return (
    <>
      <TriggerButton />
      <AlertDialogBase isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose} isCentered>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="2xl" fontWeight="bold">
            {title}
          </AlertDialogHeader>

          <AlertDialogBody>{description}</AlertDialogBody>

          <AlertDialogFooter>
            <Button variant="ghost" colorScheme="gray" ref={cancelRef} onClick={onClose}>
              Ні
            </Button>
            <Button colorScheme="red" onClick={handleConfirm} ml={3}>
              Так
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogBase>
    </>
  );
}

export default AlertDialog;
