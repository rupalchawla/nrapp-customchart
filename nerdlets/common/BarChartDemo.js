import { BarChart } from "nr1";

/**------------------------------------------------------------------------
 * BarChartDemo
 *------------------------------------------------------------------------**/
function BarChartDemo() {
  const data = [
    {
      metadata: {
        id: 'series-1',
        name: 'Serie 1',
        color: '#a35ebf',
        viz: 'main',
        units_data: {
          y: 'BYTES',
        },
      },
      data: [{ y: 128 }],
    },
    {
      metadata: {
        id: 'series-2',
        name: 'Serie 2',
        color: '#85c956',
        viz: 'main',
        units_data: {
          y: 'BYTES',
        },
      },
      data: [{ y: 256 }],
    },
    {
      metadata: {
        id: 'series-3',
        name: 'Serie 3',
        color: '#f86e40',
        viz: 'main',
        units_data: {
          y: 'BYTES',
        },
      },
      data: [{ y: 300 }],
    },
    {
      metadata: {
        id: 'series-4',
        name: 'Serie 4',
        color: '#c21684',
        viz: 'main',
        units_data: {
          y: 'BYTES',
        },
      },
      data: [{ y: 450 }],
    },
    {
      metadata: {
        id: 'series-5',
        name: 'Serie 5',
        color: '#51c9b7',
        viz: 'main',
        units_data: {
          y: 'BYTES',
        },
      },
      data: [{ y: 170 }],
    },
    {
      metadata: {
        id: 'series-6',
        name: 'Serie 6',
        color: '#48d2f0',
        viz: 'main',
        units_data: {
          y: 'BYTES',
        },
      },
      data: [{ y: 200 }],
    },
  ];

  return <BarChart data={data} fullWidth />;

}

export default BarChartDemo;
