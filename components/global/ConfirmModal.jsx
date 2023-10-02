import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

const ConfirmModal = ({ modalOpen, handleModalClose, children }) => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
            <Modal
                opened={modalOpen}
                onClose={handleModalClose}
                withCloseButton={false}
                centered
            >
                {
                    children
                }
            </Modal>
        </>
    )
}

export default ConfirmModal