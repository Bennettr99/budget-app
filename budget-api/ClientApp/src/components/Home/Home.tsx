import { Col, Row } from 'antd';
import React from 'react';
import { BRCol } from '../BRWrappers/BRCol/BRCol';
import "../BRWrappers/BRCol/BRCol.css";

class HomeComponent extends React.Component {
    render() {
        return (
                <Row justify="center">
                    <BRCol span={12}>
                        Home Page
                    </BRCol>
                </Row>
            )
    }
}

export const Home = HomeComponent;