import React, { Component } from 'react';
import { Container, Header, Left, Right, Body, Title, Text, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
class SignUp_Component extends Component {
    constructor(props) {
        super(props);

        this.state = {

            email: '',
            pass: ''

        };

    }


    signUp() {

        var fName = this.state.fName;
        var lName = this.state.lName;
        var email = this.state.email;
        var pass = this.state.pass;

        if (fName === '' || lName === '' || email === '' || pass === '') {
            alert("All fields required");
        }
        else {
            this.props.signUp({
                fName: fName,
                lName: lName,
                email: email,
                pass: pass,

            });


        }
    }






    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => Actions.pop()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Registration Form</Title>
                    </Body>

                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>First Name</Label>

                            <Input value={this.state.fName} onChange={ev => this.setState({ fName: ev.nativeEvent.text })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Last Name</Label>

                            <Input value={this.state.lName} onChange={ev => this.setState({ lName: ev.nativeEvent.text })} />
                        </Item>
                        <Item floatingLabel >
                            <Label>Email</Label>
                            <Input value={this.state.email} onChange={ev => this.setState({ email: ev.nativeEvent.text })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>

                            <Input secureTextEntry={true} value={this.state.pass} onChange={ev => this.setState({ pass: ev.nativeEvent.text })} />
                        </Item>



                        <Button block success iconRight onPress={this.signUp.bind(this)} >
                            <Text>SIGN UP</Text>
                        </Button>

                    </Form>
                </Content>
            </Container>
        );
    }
}


export default SignUp_Component;