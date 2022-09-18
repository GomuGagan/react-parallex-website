import React from 'react'
import { ImageOne } from './component/ImageOne';
import {ImageTwo} from "./component/ImageTwo"
import {ImageThree} from "./component/ImageThree"
import Text from './component/Text';

const App = () => {
  return (
    <div>

        <ImageOne />
        <Text />
        <ImageTwo />
        <Text />
        <ImageThree />
        

    </div>
  )
}

export default App