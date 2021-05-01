let initialState = {
    students: [{
        id: "1",
        name: "nam",
        phone: "123",
        email: "123@commit.com.vn",
    }]
}

const FormReducer = (state = initialState, { type, student }) => {
    // console.log("instore");
    // console.log(state); 
    switch (type) {
    case "NEW":
        // console.log("New");
        // console.log(state.student);
        state.students.push(student);
        return JSON.parse(JSON.stringify(state));

    default:
        return JSON.parse(JSON.stringify(state));
    }
}

export default FormReducer


