import * as React from 'react';
import  './couter.less';


export default class Counter extends React.PureComponent< IProp, IState >{

    static defaultProps = { };

    constructor( ) {
        super( );
        this.state = {
            count: 1
        }
    }

    add = ( ) => {
        let { count } = this.state;
        this.setState({
            count: ++count
        })

    }

    del = ( ) => {
        let { count } = this.state;
        this.setState({
            count: --count
        })
    }

    render( ) {
        let { count } = this.state;
        return <div className="c_counter">
            <h3 className="title">{ count }</h3>
            <button onClick={this.add}>+</button>
            <button onClick={this.del}>-</button>
        </div>
    }
}

interface IState {
    count: number
}

interface IProp {

}