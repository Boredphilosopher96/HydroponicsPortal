import React, { Component } from 'react'; 
import { Bar, Line } from 'react-chartjs-2';
import {
  Alert,
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  //Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import {getWeather} from '../../components/UserFunctions';
var axios = require('axios');

//const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};


const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Median Temperature',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Median Water Level',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Median pH',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'median EC',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

const  plant_data ={
  "type":[
    "Basil",
    "Stevia",
    "Chilli",
    "All"
  ]
};

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      date: new Date().toLocaleDateString(),
      hover: new Array(10).fill(false),
      apiResponse: "",
      temperature: undefined,
    }; 
  }

  dropdown(plant_name){
    return (<DropdownItem>{plant_name}</DropdownItem>);
  }

  create_dropdowns(downs){
    console.log(downs);
return downs.map(this.dropdown);
  }

  

  handleMouseEnter = (hoverId) => {
    const tempArraystate = this.state.hover.map((element,index) => {return index ===hoverId ? true : element});
    this.setState({hover : tempArraystate});
  }

  handleMouseLeave = (hoverId) => {
    const tempArraystate = this.state.hover.map((element,index) => {return index ===hoverId ? false : element});
    this.setState({hover : tempArraystate});
  }

  callAPI() {
    fetch("/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  getWeather(){
    fetch('/helper/')
    //.then(res=>res.text())
    .then(res => this.setState ({
      temperature: "32"
    }));
  }

componentWillMount() {
    this.callAPI();
    //this.getWeather();
  }


  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      {this.create_dropdowns(plant_data.type)}
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">8500</div>
                <div>Total Plants</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-success">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card3' isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                    {this.create_dropdowns(plant_data.type)}
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">8000</div>
                <div>Plants Healthy</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px'}}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card4' isOpen={this.state.card4} toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                    {this.create_dropdowns(plant_data.type)}
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">500</div>
                <div>Plants Unhealthy</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="7" xs="6" md="6">
                    <CardTitle className="mb-0">Number of Plants</CardTitle>
                    <div className="small text-muted">{this.state.date}</div>
                  </Col>
                  <Col sm="7" xs="6" md="6" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
              <CardFooter>
                <Row className="text-center">
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Estimated Yield</div>
                    <strong>29.703 Tonnes</strong>
                    <Progress className="progress-xs mt-2" color="success" value="40" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Estimated Profit</div>
                    <strong>24,093 Rupees</strong>
                    <Progress className="progress-xs mt-2" color="info" value="20" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Changes this week</div>
                    <strong>23% Increase</strong>
                    <Progress className="progress-xs mt-2" color="warning" value="60" />
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card id="iotcard">
              <CardHeader style={{display:"flex"}}>
                  <Col xs="6" md="6">
                    <div style={{display:"inline-block"}}>IoT Values</div>
                  </Col>
                  <Col xs="6" md="6" style={{textAlign:"right",alignSelf:"stretch"}}>
                    <ButtonDropdown isOpen={this.state.iotcard} toggle={() => { this.setState({ iotcard: !this.state.iotcard }); }}>
                      <DropdownToggle caret>Basil</DropdownToggle>
                      <DropdownMenu right>
                      {this.create_dropdowns(plant_data.type)}
                      </DropdownMenu>
                    </ButtonDropdown>
                  </Col>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" md="6" xl="6">
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">Median Temperature</small>
                          <br />
                          <strong className="h4">9,123</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(0, brandPrimary)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                    <Col sm="6">
                        <div className="callout callout-danger">
                          <small className="text-muted">Median Water Level</small>
                          <br />
                          <strong className="h4">22,643</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr className="mt-0" />
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Humidity
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress color="warning" value="89" onMouseOver={ () => { this.handleMouseEnter(0) } } onMouseLeave={ () => {this.handleMouseLeave(0)}}>89</Progress>
                        <Alert color = "warning" style = {{display : this.state.hover[0] ? 'block' : 'none'}}>
                          Sector 23
                        </Alert>
                        <Progress color="info" value="83" >83</Progress>
                        <Progress color="danger" value="76" onMouseOver={ () => { this.handleMouseEnter(1) } } onMouseLeave={ () => {this.handleMouseLeave(1)}}>76</Progress>
                        <Alert color = "danger" style = {{display : this.state.hover[1] ? 'block' : 'none'}}>
                          Sector 23
                        </Alert>
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Environment Temperature
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress color="warning" value="92" onMouseOver={ () => { this.handleMouseEnter(2) } } onMouseLeave={ () => {this.handleMouseLeave(2)}} >92</Progress>
                        <Alert color = "warning" style = {{display : this.state.hover[2] ? 'block' : 'none'}}>
                          Sector 23
                        </Alert>
                        <Progress color="info" value="81" >81</Progress>
                        <Progress color="danger" value="67" onMouseOver={ () => { this.handleMouseEnter(3) } } onMouseLeave={ () => {this.handleMouseLeave(3)}}>67</Progress>
                        <Alert color = "danger" style = {{display : this.state.hover[3] ? 'block' : 'none'}}>
                          Sector 23
                        </Alert>
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Water temperature
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress color="warning" value="99" onMouseOver={ () => { this.handleMouseEnter(4) } } onMouseLeave={ () => {this.handleMouseLeave(4)}}>99</Progress>
                        <Alert color = "warning" style = {{display : this.state.hover[4] ? 'block' : 'none'}}>
                          Sector 23
                        </Alert>
                        <Progress color="info" value="33" >33</Progress>
                        <Progress color="danger" value="6" onMouseOver={ () => { this.handleMouseEnter(5) } } onMouseLeave={ () => {this.handleMouseLeave(5)}}>6</Progress>
                        <Alert color = "danger" style = {{display : this.state.hover[5] ? 'block' : 'none'}}>
                          Sector 23
                        </Alert>
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        pH
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress color="warning" value="54" onMouseOver={ () => { this.handleMouseEnter(6) } } onMouseLeave={ () => {this.handleMouseLeave(6)}}>54</Progress>
                        <Alert color = "warning" style = {{display : this.state.hover[6] ? 'block' : 'none'}}>
                          Sector 23
                        </Alert>
                        <Progress color="info" value="44" >44</Progress>
                        <Progress color="danger" value="12" onMouseOver={ () => { this.handleMouseEnter(7) } } onMouseLeave={ () => {this.handleMouseLeave(7)}}>12</Progress>
                        <Alert color = "danger" style = {{display : this.state.hover[7] ? 'block' : 'none'}}>
                          Sector 23
                        </Alert>
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Electrical Conductivity
                        </span>
                      </div>
                      <div className="progress-group-bars" width = "300px">
                        <Progress color="warning" value="100" onMouseOver={ () => { this.handleMouseEnter(8) } } onMouseLeave={ () => {this.handleMouseLeave(8)}} >100</Progress>
                        <Alert color = "warning" style = {{display : this.state.hover[8] ? 'block' : 'none'}}>
                          Sector 23
                        </Alert>
                        <Progress color="blue" value="54">54</Progress>
                        <Progress color="danger" value="23" onMouseOver={ () => {this.handleMouseEnter(9)}} onMouseLeave={() => {this.handleMouseLeave(9)}} >23</Progress>
                        <Alert color = "danger" style = {{display : this.state.hover[9] ? 'block' : 'none'}}>
                          Sector 12
                        </Alert>
                      </div>
                    </div>
                    <div className="legend text-center">
                      <small>
                        <sup className="px-1"><Badge pill color="warning">&nbsp;</Badge></sup>
                        Maximum Value
                        &nbsp;
                        <sup className="px-1"><Badge pill color="info">&nbsp;</Badge></sup>
                        Median Value
                        &nbsp;
                        <sup className="px-1"><Badge pill color="danger">&nbsp;</Badge></sup>
                        Minimum Value
                      </small>
                    </div>
                  </Col>
                  <Col xs="12" md="6" xl="6">
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-warning">
                          <small className="text-muted">Median pH</small>
                          <br />
                          <strong className="h4">78,623</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(2, brandWarning)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-success">
                          <small className="text-muted">Median EC</small>
                          <br />
                          <strong className="h4">49,123</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(3, brandSuccess)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr className="mt-0" />
                    
                  </Col>
                </Row>
                <br />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
