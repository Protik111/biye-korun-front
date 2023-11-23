import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

const ConfirmModal = ({ modalOpen, handleModalClose, children }) => {
  console.log("confirmoal");
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <div
        opened={modalOpen}
        onClose={handleModalClose}
        withCloseButton={false}
        centered
      >
        {children}
      </div>
    </>
  );
};

export default ConfirmModal;
