import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const bar = {
  labels: ['Stevia', 'Basil', 'Lettuce'],
  datasets: [
    {
      label: 'Healthy Plants',
      backgroundColor: '#36A2EB',
      borderColor: '#36A2EB',
      borderWidth: 1,
      hoverBackgroundColor: '#4dbd74',
      hoverBorderColor: '#4dbd74',
      data: [65, 90, 99],
    },
    {
      label: 'Unhealthy Plants',
      backgroundColor: '#FFCE56',
      borderColor: '#FFCE56',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [29, 11, 2],
    }
  ],
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}


const line1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Stevia Healthy',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#4dbd74',
      borderColor: '#4dbd74',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#4dbd74',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#4dbd74',
      pointHoverBorderColor: '#4dbd74',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: 'Stevia Diseased',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#FF6384',
      borderColor: '#FF6384',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#FF6384',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#FF6384',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [46, 66, 45, 84, 50, 40, 78],
    }
  ],
};

const line2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Basil Healthy',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#4dbd74',
      borderColor: '#4dbd74',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#4dbd74',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#4dbd74',
      pointHoverBorderColor: '#4dbd74',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: 'Basil Diseased',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#FF6384',
      borderColor: '#FF6384',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#FF6384',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#FF6384',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [46, 66, 45, 84, 50, 40, 78],
    }
  ],
};

const line3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Lettuce Healthy',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#4dbd74',
      borderColor: '#4dbd74',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#4dbd74',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#4dbd74',
      pointHoverBorderColor: '#4dbd74',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: 'Lettuce Diseased',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#FF6384',
      borderColor: '#FF6384',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#FF6384',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#FF6384',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [46, 66, 45, 84, 50, 40, 78],
    }
  ],
};

const doughnut = {
  labels: [
    'Stevia',
    'Basil',
    'Lettuce',
  ],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
    }],
};


class Colors extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <CardColumns className="cols-2">
          <Card >
            <CardHeader>
              Plant Distribution
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Doughnut data={doughnut} />
              </div>
            </CardBody>
          </Card>
          <Card >
            <CardHeader>
              Plant Health Data
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
              <Bar data={bar} options={options} />
              
              </div>
            </CardBody>
          </Card>
          <Card >
            <CardHeader>
              Plant Health Trends
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
              <Line data={line1} options={options} />
              {/* <Line data={line1} options={options}/> */}
              </div>
            </CardBody>
          </Card>
          <Card >
            <CardHeader>
              Plant Health Trends
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
              <Line data={line2} options={options} />
              </div>
            </CardBody>
          </Card>
          <Card >
            <CardHeader>
              Plant Health Trends
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
              <Line data={line3} options={options} />
              </div>
            </CardBody>
          </Card>
        </CardColumns>
      </div>
    );
  }
}

export default Colors;
