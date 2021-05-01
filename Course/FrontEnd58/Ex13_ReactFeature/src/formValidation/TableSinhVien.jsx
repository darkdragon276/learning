import React, { Component } from 'react'
import { connect } from 'react-redux'

export class TableSinhVien extends Component {

    constructor(props) {
        super(props)
        this.state = {
            students: []
        }
    }


    static getDerivedStateFromProps(newProps, curState) {
        if(newProps.students === undefined) {
            return null // return current state
        }
        return { ...curState, students: newProps.students }
    }

    renderThongTin = () => {
        return this.state.students.map((student, index) => {
            let { id, name, phone, email } = student
            return (
                <tr key={index}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                    <td><button className="btn btn-danger">Xoa</button></td>
                </tr>
            )
        })  
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {this.renderThongTin()}
                </tbody>
            </table>
        )
    }

    componentDidMount() {
        // network connection
    }

    componentDidUpdate(preProps, preState, snapshot) {
        if(preProps.students !== this.props.students) {
            
        }
    }
}

const mapStateToProps = (store) => ({
    students: store.form.students,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TableSinhVien)
