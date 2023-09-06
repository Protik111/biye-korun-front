import { Modal, useMantineTheme } from "@mantine/core";

const CenteredModal = ({ modalOpen, handleModalClose, children }) => {
    const theme = useMantineTheme();

    return (
        <>
            <Modal
                opened={modalOpen}
                onClose={handleModalClose}
                // title="Let's set up your account, while
                // we find Matches for you!"
                centered
                overlayColor={
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[9]
                        : theme.colors.gray[2]
                }
                overlayOpacity={0.55}
                overlayBlur={3}
                size="md"
                // height="1500"
                styles={{
                    modal: {
                        backgroundColor: "#062539",
                        // height: '1000px',
                        overflow: 'atuo',
                    }
                }}
            >
                {children}
            </Modal>
        </>
    )
}

export default CenteredModal