import _ from 'lodash';
import React, { Component } from 'react';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const {name, phone, shift} = this.props;
    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const {name, phone, shift} = this.props;
    Communications.text(phone, `Hi, ${name}. Your upcoming shift is on ${shift}`);
  }

  onFirePress() {
    this.setState({ showModal: !this.state.showModal });
  }

  onAccept() {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
    this.setState({ showModal: false });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text {this.props.name} their Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onFirePress.bind(this)}>
            Fire {this.props.name}
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift};
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete
 })(EmployeeEdit);
