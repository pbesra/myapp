import { Component} from 'react';

class Welcome extends Component {

    constructor(props){
        super(props);

        this.state={
            username:''
        }

        console.log('Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount')
    }
    
    render(){
        console.log('render');
        return(<div>
            return statement
        </div>);
    }
}

export default Welcome;