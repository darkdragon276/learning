import { Fragment } from "react"
import { Route } from "react-router-dom"
import Header from "../../components/Header/Header"





//HOC higher order component
//component nhận vào tham số là component và trả ra component mới
export const HomeTemplate = (props) => { //props.path, props.component
    //Thẻ route sẽ được hiển giao diện tương ứng khi người dùng gõ đúng path
    return <Route path={props.path} exact render={(propsRoute) => {
        return <Fragment>
            <Header {...propsRoute}  />
            <props.component {...propsRoute} />
            <footer className="bg-dark text-white text-center p-5 mt-5">
                footer
            </footer>
        </Fragment>
    }} />
}