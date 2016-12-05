import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Test extends React.Component<{ }, { }> {
    render( ) {
        return <h1>123</h1>
    }
}

ReactDOM.render(
    <Test />,
    document.getElementById('root')
)

