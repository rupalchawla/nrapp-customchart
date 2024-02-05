import React, { useState } from "react";
import {
  BillboardChart,
  PieChart,
  Grid,
  GridItem,
  Button,
  BlockText,
  HeadingText,
  Card,
  CardHeader,
  CardBody,
  Modal,
} from "nr1";
import LineChartDemo from "../common/LineChartDemo";
import StackedBarChartDemo from "../common/StacketBarChartDemo";
import BarChartDemo from "../common/BarChartDemo";
import CustomBarChartDemo from "../common/CustomBarChartDemo";
import AccountPickerDemo from "../common/AccountPicker";
import ModalDemo from "../common/ModalDemo";
import PopoverDemo from "../common/PopoverDemo";
// import CustomBarChartDemo from "../../visualizations/custombarchart";

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

// export default class BhnappNerdlet extends React.Component {
function BhnappNerdlet() {
  return (
    <Card>
      <CardHeader
        title="Hello, bhnapp Nerdlet!"
        subtitle="This is the card's subtitle"
      />
      <CardBody>
        <Grid>
          {/* OVerlays */}
          <GridItem columnSpan={6}>
            <ModalDemo />
          </GridItem>
          <GridItem columnSpan={6}>
            <PopoverDemo />
          </GridItem>
          

          {/* AccountPickerDemo */}
          <GridItem columnSpan={12}>
            <AccountPickerDemo />
          </GridItem>
          {/* LineChartDemo */}
          <GridItem columnSpan={4}>
            <LineChartDemo />
          </GridItem>
          {/* BillboardChartDemo */}
          <GridItem columnSpan={4}>
            <BillboardChartDemo />
          </GridItem>
          {/* PieChartDemo */}
          <GridItem columnSpan={4}>
            <PieChartDemo />
          </GridItem>
          {/* StackedBarChartDemo */}
          <GridItem columnSpan={4}>
            <StackedBarChartDemo />
          </GridItem>
          {/* BarChartDemo */}
          <GridItem columnSpan={4}>
            <BarChartDemo />
          </GridItem>
          {/* CustomBarChartDemo */}
          <GridItem columnSpan={12}>
            <h1>Hello! This is a custom bar chart</h1>
            <br />
            <CustomBarChartDemo />
          </GridItem>
        </Grid>
      </CardBody>
    </Card>
  );
}

/**------------------------------------------------------------------------
 * Billboard chart demo
 *------------------------------------------------------------------------**/
function BillboardChartDemo() {
  const [count, setCount] = useState(0);

  const clickCount = {
    metadata: {
      id: "1",
      name: "Count",
      viz: "main",
    },
    data: [{ y: count }],
  };
  return (
    <div>
      <BillboardChart data={[clickCount]} />
      <button onClick={() => setCount(count + 1)}>Increment count</button>
    </div>
  );
}

/**------------------------------------------------------------------------
 *
 *------------------------------------------------------------------------**/
function PieChartDemo() {
  const cancellationsA = {
    metadata: {
      id: "cancellations-A",
      name: "Version A",
      viz: "main",
      color: "blue",
    },
    data: [{ y: 118 }],
  };
  const cancellationsB = {
    metadata: {
      id: "cancellations-B",
      name: "Version B",
      viz: "main",
      color: "green",
    },
    data: [{ y: 400 }],
  };
  return <PieChart data={[cancellationsA, cancellationsB]} fullWidth />;
}

export default BhnappNerdlet;
