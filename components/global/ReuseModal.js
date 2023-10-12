import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

const ReuseModal = ({ isOpen, onClose, children, title }) => {
  const [opened, { open, close }] = useDisclosure(false);
  if (!isOpen) return null;

  return (
    <div>
      <Modal opened={isOpen} onClose={onClose} title={title} centered size="lg">
        {children}
      </Modal>
    </div>
  );
};

export default ReuseModal;
