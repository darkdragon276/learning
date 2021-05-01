import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormValidation extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            student: {
                id: "",
                name: "",
                phone: "",
                email: "",
            }
        }
    }

    // validation info?
    // add
    // modified
    // delete

    handleOnChange = (event) => {
        let { name, value } = event.target;
        this.setState({ student: { ...this.state.student, [name]: value } }, () => {
            console.log("state", this.state);
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let { add } = this.props;
        add({ ...this.state.student });
    }

    handleOnBlur = (event) => {

    }

    // static getDerivedStateFromProps(props, state) {
    //     if(props.students === undefined) {
    //         return state
    //     }
    //     return { ...state, students: props.students }
    // }

    render() {
        let { id, name, phone, email } = this.state.student;
        return (
            <div className="card text-white bg-dark">
                <div className="card-header">THONG TIN SINH VIEN</div>
                <form className="card-body form" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="form-group col-6">
                            <p>ID</p>
                            <input type="text" className="form-control" value={id} name="id" onChange={this.handleOnChange} onBlur={this.handleOnBlur} />
                        </div>
                        <div className="form-group col-6">
                            <p>Name</p>
                            <input type="text" className="form-control" value={name} name="name" onChange={this.handleOnChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-6">
                            <p>Phone</p>
                            <input type="text" className="form-control" value={phone} name="phone" onChange={this.handleOnChange} />
                        </div>
                        <div className="form-group col-6">
                            <p>Email</p>
                            <input type="text" className="form-control" value={email} name="email" onChange={this.handleOnChange} />
                        </div>                        </div>
                    <div className="row">
                        <button type="submit" className="btn btn-success">Them sinh vien</button>
                        <button type="button" className="btn btn-primary" onClick={() => {

                        }}>Cap Nhat</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    console.log(store);
    console.log("mapStateToProps");
    return ({
        students: store.form.students,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        add: (student) => {
            // console.log("add");
            // console.log(student);
            dispatch({ type: "NEW", student: student });
        },
    })

}

export default connect(mapStateToProps, mapDispatchToProps)(FormValidation)
