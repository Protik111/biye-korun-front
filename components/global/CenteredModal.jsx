import { Modal, useMantineTheme } from "@mantine/core";
import ModalTitle from "./ModalTitle";

const CenteredModal = ({
  modalOpen,
  handleModalClose,
  modalTitle = "",
  size = "md",
  children,
}) => {
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={modalOpen}
        onClose={handleModalClose}
        // title={<div className="flex justify-center align-center">
        //     {modalTitle}
        // </div>}
        // title={
        //   <div className="flex justify-center align-center">
        //     <h3 className="text-center">Let's Create an Account! </h3>
        //   </div>
        // }
        centered
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        size={size}
        // height="1500"
        styles={{
          modal: {
            backgroundColor: "#062539",
            // height: '1000px',
            overflow: "atuo",
          },
        }}
      >
        {children}
      </Modal>
    </>
  );
};

export default CenteredModal;
