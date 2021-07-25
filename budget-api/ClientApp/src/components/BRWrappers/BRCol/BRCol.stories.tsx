import { storiesOf } from '@storybook/react';
import React from 'react';
import { BRCol } from './BRCol';

storiesOf("BRWrappers", module)
    .add('BRCol', () => {
        return (
            <BRCol span={12}>Test</BRCol>
        )
    });