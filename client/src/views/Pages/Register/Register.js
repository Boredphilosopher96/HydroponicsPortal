import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {register} from '../../../components/UserFunctions';
import { Link } from 'react-router-dom';



class Register extends Component {

  constructor() {
    super();
    this.state = {
      username : '',
      password: '',
      fullname:'',
      rpassword:'',
      error:''
    } 
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.password === this.state.rpassword) {
      const user = {
        fullname: this.state.fullname,
        username: this.state.username,
        password: this.state.password,
      }
  
      register(user).then(res => {
          console.log(res);
          this.props.history.push('/login');
      })      
    } else {
      this.setState({
        error:'Passwords do not match',
      })
    }

  }





  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.onSubmit}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <div xs="6" md="6" style={{color:"red"}}>{this.state.error}</div>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" autoComplete="username" name="username" value ={this.state.username} onChange = {this.onChange}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="icon-user"/></InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Full Name" autoComplete="on" name="fullname" value= {this.state.fullname} onChange = {this.onChange} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="new-password" name="password" value= {this.state.password} onChange = {this.onChange} />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" autoComplete="new-password" name="rpassword" value= {this.state.rpassword} onChange = {this.onChange}/>
                    </InputGroup>
                    <Button color="success" type= "submit">Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                <div xs="6" md="6" style={{display: 'flex', justifyContent: 'center'}}>Already have an account?<pre> </pre><Link to='/login'>Sign In</Link></div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
