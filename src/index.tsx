import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Counter from './t/couter.component';

class App extends React.PureComponent<{ }, { }> {

    render( ) {
        return <div>
            <h1>Welcome!</h1>
            { this.props.children }
        </div>
    }
}



ReactDOM.render((
    <Router history={ hashHistory } >
        <Route path="/" component={ App } >
            <Route path="couter" component={ Counter } ></Route>
        </Route>
    </Router>),
    document.getElementById('root')
)

