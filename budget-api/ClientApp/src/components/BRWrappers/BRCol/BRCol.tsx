import { Col } from 'antd';
import { ColSize } from 'antd/lib/col';
import React, { ReactNode } from 'react';
import "./BRCol.css"

declare type ColSpanType = number | string;
declare type FlexType = number | 'none' | 'auto' | string;

interface BRColProps {
    flex?: FlexType;
    span?: ColSpanType;
    order?: ColSpanType;
    offset?: ColSpanType;
    push?: ColSpanType;
    pull?: ColSpanType;
    xs?: ColSpanType | ColSize;
    sm?: ColSpanType | ColSize;
    md?: ColSpanType | ColSize;
    lg?: ColSpanType | ColSize;
    xl?: ColSpanType | ColSize;
    xxl?: ColSpanType | ColSize;
    prefixCls?: string;
    children?: ReactNode;
}

export class BRCol extends React.Component<BRColProps, {}> {
    render() {
        return (
            <Col
                className="text-center"
                {...this.props}
            >
                {this.props.children}
            </Col>
        );
    }
}