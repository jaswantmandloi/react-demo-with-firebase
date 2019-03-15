//@flow
import { Component } from 'react';

import AppTemplate from './AppTemplate';

type Props = {};

class App extends Component<Props> {
    
    constructor(props: Object) {
        super(props);        
    }

    render () {
       return AppTemplate.call(this);
    }
}

export default App;