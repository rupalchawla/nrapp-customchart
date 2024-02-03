import React, { useState } from "react";
import { BillboardChart, PieChart } from "nr1";
import LineChartDemo from "../common/LineChartDemo";
import StackedBarChartDemo from "../common/StacketBarChartDemo";
import BarChartDemo from "../common/BarChartDemo";
import CustomBarChartDemo from "../common/CustomBarChartDemo";
// import CustomBarChartDemo from "../../visualizations/custombarchart";


// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

// export default class BhnappNerdlet extends React.Component {
function BhnappNerdlet() {
  return (
    <div>
      <h1>Hello, bhnapp Nerdlet!</h1>
      <LineChartDemo />
      <BillboardChartDemo />
      <PieChartDemo />
      <StackedBarChartDemo />
      <BarChartDemo />
      <br />
      Hello! This is a custom bar chart
      <CustomBarChartDemo />
    </div>
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
