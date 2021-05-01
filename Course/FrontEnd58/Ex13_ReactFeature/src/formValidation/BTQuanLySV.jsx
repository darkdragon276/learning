import React, { Component } from 'react'
import FormValidation from './FormValidation'
import TableSinhVien from './TableSinhVien'

export default class BTQuanLySV extends Component {
    render() {
        return (
            <div className="container">
                <FormValidation></FormValidation>
                <TableSinhVien></TableSinhVien>
            </div>
        )
    }
}

