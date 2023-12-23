import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useEffect } from "react";

export default function ModalAlert({ text, isLogin }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const size = "sm";

  useEffect(() => {
    if (text) {
      onOpen();
    }
  }, [text]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={size}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-red-400">ERROR</ModalHeader>
              <ModalBody>
                <p>{text}</p>
              </ModalBody>
              <ModalFooter className="mx-auto">
                {isLogin ? (
                  <Button color="primary" onPress={onClose}>
                    Login
                  </Button>
                ) : (
                  ""
                )}
                <Button color="danger" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
