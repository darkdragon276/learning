import React, { useState } from 'react'

import { Tabs, Radio, Space } from 'antd';
import { Tag, Divider } from 'antd';

import moment from 'moment';
import { NavLink } from 'react-router-dom';

const { TabPane } = Tabs;


export default function MenuRap(props) {

    let { heThongRapChieu } = props;

    const [state, setState] = useState({
        tabPosition: 'left',
    });


    const renderHeThongRap = () => {
        return heThongRapChieu?.map((htr, index) => {
            return <TabPane tab={<img src={htr.logo} style={{ borderRadius: '50%' }} width="50" height="50" />} key={index}>
                {htr.cumRapChieu?.map((cumRap, index) => {
                    return <div key={index}>
                        <h3>{cumRap.tenCumRap}</h3>
                        <div className="row my-2">
                            {cumRap.lichChieuPhim?.slice(0,12).map((lichChieu, index) => {
                                return <NavLink className="col-3 my-2" to={`/datve/${lichChieu.maLichChieu}`}>
                                    <Tag color="magenta" style={{fontSize:17}}>
                                        
                                        {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                    
                                    </Tag>
                                </NavLink>
                            })}
                        </div>
                    </div>
                })}
            </TabPane>
        })
    }

    const { tabPosition } = state;
    return (
        <div className="mt-5">

            <Tabs tabPosition={tabPosition}>
                {renderHeThongRap()}

                {/* <TabPane tab="Tab 2" key="2">
                    Content of Tab 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab 3
                </TabPane> */}
            </Tabs>
        </div>
    );
}
