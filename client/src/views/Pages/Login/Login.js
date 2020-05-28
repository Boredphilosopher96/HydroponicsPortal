import React, { Component } from 'react';
import { Link ,Redirect} from 'react-router-dom';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
//import routes from '../../../routes';
import {login} from '../../../components/UserFunctions';


//const DefaultLayout = React.lazy(() => import('../../../containers/DefaultLayout'));
//const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;


class Login extends Component {

  constructor() {
    super();
    this.state = {
      username : '',
      password: '',
      errormessage:'',
    }
    
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  onSubmit = (e) => {
    console.log('clicked!!');
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
    }

    login(user).then(res => {
      if(res) {
        console.log('received!!');
        this.props.history.push('/');
      } else {
        this.setState({
          errormessage: 'Invalid Credentials'
        })
      } 
    })
  }


  render() {
    if(localStorage.getItem('usertoken')) {
      return <Redirect to='/'/>
    }
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
                <Card className="mx-4">
                  <CardBody className="p-4">
                    <Form onSubmit={this.onSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <div xs="6" md="6" style={{color:"red"}}>{this.state.errormessage}</div>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" name="username" value={this.state.username} onChange = {this.onChange}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" name="password" value = {this.state.password} onChange = {this.onChange} />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" type ="submit">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                  <div xs="6" md="6" style={{display: 'flex', justifyContent: 'center'}}>Need an account?<pre> </pre><Link to='/register'>Sign Up</Link></div>
                </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
