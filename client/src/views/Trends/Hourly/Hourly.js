import React, { Component } from 'react';
import {  Col, Card, CardBody, CardHeader, CardColumns, ButtonDropdown, DropdownItem, DropdownMenu,DropdownToggle } from 'reactstrap';
import {  Line } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}

const line1 = {
  labels: ['4:00', '8:00', '12:00', '16:00', '20:00', '00:00'],
  datasets: [
    {
      label: 'Median value',
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
      data: [65, 59, 80, 81, 55, 40],
    },
    {
      label: 'Minimum Value',
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
      data: [46, 66, 45, 84, 50, 78],
    },
    {
      label: 'Maximum Value',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#63c2de',
      borderColor: '#63c2de',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#63c2de',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#63c2de',
      pointHoverBorderColor: '#63c2de',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [43, 73, 50, 66, 51, 89],
    },
  ],
};




class Hourly extends Component {
  constructor(props) {
      super(props);
      this.state = {
        tempiot:false
      };
  }
  render() {
    return (
      <div className="animated fadeIn">
        <CardColumns className="cols-2" md="6" xs="6" xl="6">
          <Card id="tempiot">
            <CardHeader style={{display:"flex"}}>
              <Col xs="6" md="6"> 
              <div style={{display:"inline-block", textAlign:"left"}}>Temperature data trend</div>
              </Col>
              <Col xs="6" md="6" style={{textAlign:"right",alignSelf:"stretch"}}>
                  <ButtonDropdown isOpen={this.state.tempiot} toggle={() => { this.setState({ tempiot: !this.state.tempiot }); }}>
                      <DropdownToggle caret>Basil</DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Stevia
                        </DropdownItem>
                        <DropdownItem>
                          Lettuce
                        </DropdownItem>
                        <DropdownItem>
                          All
                        </DropdownItem>
                     </DropdownMenu>
                  </ButtonDropdown>
              </Col>
            </CardHeader>
            <CardBody>
              <Line data={line1} options={options}/>
            </CardBody>
          </Card>
          
          <Card id="phiot">
            <CardHeader style={{display:"flex"}}>
              <Col xs="6" md="6"> 
                <div style={{display:"inline-block", textAlign:"left", alignSelf:"stretch"}}>pH data trend</div>
              </Col>
              <Col xs="6" md="6" style={{textAlign:"right",alignSelf:"stretch"}}>
                  <ButtonDropdown isOpen={this.state.phiot} toggle={() => { this.setState({ phiot: !this.state.phiot }); }}>
                      <DropdownToggle caret>Basil</DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Stevia
                        </DropdownItem>
                        <DropdownItem>
                          Lettuce
                        </DropdownItem>
                        <DropdownItem>
                          All
                        </DropdownItem>
                     </DropdownMenu>
                  </ButtonDropdown>
                </Col> 
              </CardHeader>
              <CardBody>
              <Line data={line1} options={options}/>
            </CardBody>
            </Card>
          <Card id="eciot">
            <CardHeader  style={{display:"flex"}}>
            <Col xs="6" md="6"> 
                <div style={{display:"inline-block", textAlign:"left", alignSelf:"stretch"}}>EC data trend</div>
            </Col>
            <Col xs="6" md="6" style={{textAlign:"right",alignSelf:"stretch"}}>
                  <ButtonDropdown isOpen={this.state.eciot} toggle={() => { this.setState({ eciot: !this.state.eciot }); }}>
                      <DropdownToggle caret>Basil</DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Stevia
                        </DropdownItem>
                        <DropdownItem>
                          Lettuce
                        </DropdownItem>
                        <DropdownItem>
                          All
                        </DropdownItem>
                     </DropdownMenu>
                  </ButtonDropdown>
              </Col> 
            </CardHeader>
            <CardBody>
              <Line data={line1} options={options}/>
            </CardBody>
          </Card>
           <Card id="watiot">
            <CardHeader  style={{display:"flex"}}>
            <Col xs="6" md="6"> 
                <div style={{display:"inline-block", textAlign:"left", alignSelf:"stretch"}}>Water Level data trend</div>
            </Col>
            <Col xs="6" md="6" style={{textAlign:"right",alignSelf:"stretch"}}>
                  <ButtonDropdown isOpen={this.state.watiot} toggle={() => { this.setState({ watiot: !this.state.watiot }); }}>
                      <DropdownToggle caret>Basil</DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Stevia
                        </DropdownItem>
                        <DropdownItem>
                          Lettuce
                        </DropdownItem>
                        <DropdownItem>
                          All
                        </DropdownItem>
                     </DropdownMenu>
                  </ButtonDropdown>
              </Col>
            </CardHeader>
            <CardBody>
              <Line data={line1} options={options}/>
            </CardBody>
          </Card>
        </CardColumns>
      </div>
    );
  }
}

export default Hourly;
