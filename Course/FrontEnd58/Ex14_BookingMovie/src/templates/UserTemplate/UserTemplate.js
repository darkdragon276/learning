import { Fragment } from "react"
import { Route } from "react-router-dom"






//HOC higher order component
//component nhận vào tham số là component và trả ra component mới
export const UserTemplate = (props) => { //props.path, props.component
    //Thẻ route sẽ được hiển giao diện tương ứng khi người dùng gõ đúng path
    return <Route path={props.path} exact render={(propsRoute) => {
        return <Fragment>
            <div className="row" style={{ overflow: 'hidden' }}>
                <div className="col-6" style={{ height: '100vh' }}>
                    <img src="https://picsum.photos/1000" className="w-100"/>
                </div>
                <div className="col-6">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height:'100vh' }}>
                        <props.component {...propsRoute} />
                    </div>
                </div>
            </div>
        </Fragment>
    }} />
}