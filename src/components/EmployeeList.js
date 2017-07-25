import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Text } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
import { Card } from './common';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }
  
  renderItem({ item }) {
    return <ListItem employee={item} />;
  }
  
  render() {
    return (
      <Card style={{flex:1}}>
        <FlatList
          data={this.props.employees}
          renderItem={this.renderItem}
        />
      </Card>
    );
  };
};

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; 
  });
  
  return { employees };
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
