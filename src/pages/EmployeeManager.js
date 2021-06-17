import React, { Component } from 'react';

import NavBarLP from '../components/NavBarLP';

// Components
import AddEmployee from '../components/add/AddEmployee';
import ManageEmployees from '../components/manage/ManageEmployees';

import Container from '@material-ui/core/Container'

// redux
import { connect } from 'react-redux';
import { fetchAllEmployeesInfo } from '../redux/actions/employeeAction';

export class EmployeeManager extends Component {

    componentDidMount() {
        this.props.fetchAllEmployeesInfo();
    }

    render() {
        return (
            <div>
                <NavBarLP/>
                <Container maxWidth="lg" style={{marginTop: '100px'}}>
                <ManageEmployees/>
                <AddEmployee/>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    employees: state.employee.employeeS
})

export default connect(mapStateToProps,{fetchAllEmployeesInfo})(EmployeeManager);
