import {
  Popover,
  PopoverTrigger,
  PopoverBody,
  PopoverFooter,
  Button,
  Card,
  CardBody,
  HeadingText,
  BlockText,
} from "nr1";

import React, { useState } from "react";

function PopoverDemo() {
  const [opened, setOpened] = useState(false);

  function onChange(evt, opened) {
    setOpened(opened);
  }

  return (
    <Popover opened={opened} onChange={onChange}>
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverBody>
        <Card style={{ width: "250px" }}>
          <CardBody>
            <HeadingText>Heading</HeadingText>
            <BlockText
              spacingType={[
                BlockText.SPACING_TYPE.MEDIUM,
                BlockText.SPACING_TYPE.NONE,
              ]}
            >
              Item content
            </BlockText>
            <BlockText>Item content</BlockText>
          </CardBody>
        </Card>
        <PopoverFooter style={{ textAlign: "right" }}>
          Info message
        </PopoverFooter>
      </PopoverBody>
    </Popover>
  );
}

export default PopoverDemo;
