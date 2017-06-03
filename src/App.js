import React from 'react'
import GetImage from './getImage/GetImage'
import SetText from './setText/SetText'

import { Button } from 'antd';
import './App.css';

const App = () => (
    <div>
        <Button type="primary">Button</Button>
        <SetText />
        <GetImage />
    </div>
)

export default App