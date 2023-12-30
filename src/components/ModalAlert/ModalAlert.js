import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/services/auth/auth";

export default function ModalAlert({ dataModal }) {
  const size = "md";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const [modal, setModal] = useState({});

  const setDataModal = (dataModal) => {
    const updateDataModal = {
      id: "0",
      isOpen: dataModal.isOpen,
      type: dataModal.type,
      message: "",
      actions: dataModal.actions,
    };

    switch (dataModal.type) {
      case "login":
        updateDataModal.message = {
          header: "ERROR",
          body: dataModal.data,
        };
        updateDataModal.actions = handleLogout;
        break;
      case "delete":
        updateDataModal.message = {
          header: "DELETE CONFIRMATION",
          body: `Are you sure you want to delete the ${dataModal.data.title}`,
        };
        updateDataModal.id = dataModal.data.id;
        break;
      default:
        break;
    }

    setModal(updateDataModal);
  };

  const additionalButton = (type, actions, id) => {
    switch (type) {
      case "login":
        return (
          <Button color="primary" onPress={actions}>
            Login
          </Button>
        );
      case "delete":
        return (
          <Button
            color="primary"
            onPress={() => {
              actions(id);
              onClose();
            }}
          >
            Yes
          </Button>
        );
      default:
        break;
    }
  };

  const handleLogout = () => {
    try {
      logout();
    } finally {
      router.push("/login");
    }
  };

  useEffect(() => {
    if (dataModal.isOpen) {
      onOpen();
      setDataModal(dataModal);
    }
  }, [dataModal]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={size}
        isDismissable={false}
        hideCloseButton={modal.type === "login" ? true : false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-red-400">{modal.message.header}</ModalHeader>
              <ModalBody>
                <p>{modal.message.body}</p>
              </ModalBody>
              <ModalFooter className="mx-auto">
                {additionalButton(modal.type, modal.actions, modal.id)}
                {modal.type === "login" ? (
                  ""
                ) : (
                  <Button color="danger" onPress={onClose}>
                    Close
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
