import { Modal, HeadingText, Button, BlockText } from "nr1";
import { useState } from "react";

function ModalDemo() {
  const [hidden, setHidden] = useState(true);
  const [mounted, setMounted] = useState(false);

  function onClickModalButton() {
    setHidden(false);
    setMounted(true);
  }

  const onClose = () => {
    setHidden(true);
  };

  const onHideEnd = () => {
    setMounted(false);
  };

  return (
    <div>
      <Button onClick={onClickModalButton}>Open modal</Button>

      {mounted && (
        <Modal hidden={hidden} onClose={onClose} onHideEnd={onHideEnd}>
          <HeadingText type={HeadingText.TYPE.HEADING_3}>Modal</HeadingText>

          <BlockText
            spacingType={[
              BlockText.SPACING_TYPE.EXTRA_LARGE,
              BlockText.SPACING_TYPE.OMIT,
            ]}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst
            quisque sagittis purus sit amet.
          </BlockText>

          <Button onClick={onClose}>Close</Button>
        </Modal>
      )}
    </div>
  );
}

export default ModalDemo;
