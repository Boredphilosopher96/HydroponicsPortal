import React, { Component } from 'react';
import HeatMap from 'react-heatmap-grid';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';

const xLabels = new Array(15).fill(0).map((_, i) => `${i}`);
const yLabels = ['A', 'B', 'C','D','E','F','G','H','I','J','K'];
const data = new Array(yLabels.length)
.fill(0)
.map(() => new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 156)));


class SectorwiseMap extends Component {
  render() {
    return (
      <div className="animated fadeIn">
       
        <CardColumns className="cols-2" md="6" xs="6" xl="6">
          <Card style={{overflowX:'auto'}}>
            <CardHeader>
              Temperature Distribution
            </CardHeader>
            <CardBody>  
                  <div> 
                    <HeatMap
                      background="#f86c6b"
                      squares
                      xLabels={xLabels}
                      yLabels={yLabels}
                      data={data}
                      //onClick={(x, y) => alert(`Clicked ${x}, ${y+1}`)}
                      />
                  </div> 
              </CardBody>
          </Card>

          <Card style={{overflowX:'auto'}}>
            <CardHeader>
              pH Distribution
            </CardHeader>
            <CardBody>
                    <HeatMap
                      background="#f86c6b"
                      squares
                      xLabels={xLabels}
                      yLabels={yLabels}
                      data={data}
                      //onClick={(x, y) => alert(`Clicked ${x}, ${y+1}`)}
                      />
                
              </CardBody>
          </Card>
      {/* </CardColumns> */}
      <Card style={{overflowX:'auto'}}>
            <CardHeader>
             Electrical Conductivity
            </CardHeader>
            <CardBody>  
                  <div> 
                    <HeatMap
                      background="#f86c6b"
                      squares
                      xLabels={xLabels}
                      yLabels={yLabels}
                      data={data}
                      //onClick={(x, y) => alert(`Clicked ${x}, ${y+1}`)}
                      />
                  </div> 
              </CardBody>
          </Card>

          <Card style={{overflowX:'auto'}}>
            <CardHeader style={{overflowX:'auto'}}>
              Yield Prediction
            </CardHeader>
            <CardBody>
                    <HeatMap
                      background="green"
                      squares
                      xLabels={xLabels}
                      yLabels={yLabels}
                      data={data}
                      />
                
              </CardBody>
          </Card>
          </CardColumns>
    </div>

    );
  }
}

export default SectorwiseMap;
