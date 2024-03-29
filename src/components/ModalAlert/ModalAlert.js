import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/services/auth/auth";
import { format } from "date-fns";

export default function ModalAlert({ dataModal }) {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modal, setModal] = useState({});
  const [closeButton, setCloseButton] = useState(true);
  const size = "md";

  const setDataModal = (dataModal) => {
    const updateDataModal = {
      id: "0",
      isOpen: dataModal.isOpen,
      type: dataModal.type,
      message: "",
      actions: dataModal.actions,
    };

    switch (dataModal.type) {
      case 403:
      case 404:
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
      case "deleteSuccess":
        const dateFormat = format(dataModal.data.deletedOn, "dd MMMM yyyy, HH:mm");
        updateDataModal.message = {
          header: "DELETED COMPLETE",
          body: `The ${dataModal.data.title} has been deleted on ${dateFormat}`,
        };
        break;
      case "insertSuccess":
        updateDataModal.message = {
          header: "CREATE PRODUCT COMPLETE",
          body: `The ${dataModal.data.title} has been created`,
        };
        break;
      case "updateSuccess":
        updateDataModal.message = {
          header: "EDIT PRODUCT COMPLETE",
          body: `The ${dataModal.data.title} has been edited`,
        };
        break;
      default:
        break;
    }

    hiddenCloseButton(dataModal.type);
    setModal(updateDataModal);
  };

  const additionalButton = (type, actions, id) => {
    switch (type) {
      case 403:
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
      case "insertSuccess":
      case "updateSuccess":
        return (
          <Button
            color="primary"
            onPress={() => {
              router.push("/dashboard/products");
              onClose();
            }}
          >
            Go to Product listing
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

  const hiddenCloseButton = (type) => {
    const defaultType = [403, "insertSuccess", "updateSuccess"];
    defaultType.map((def) => {
      if (def === type) {
        setCloseButton(false);
      }
    });
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
        hideCloseButton={!closeButton ? true : false}
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
                {closeButton && (
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
