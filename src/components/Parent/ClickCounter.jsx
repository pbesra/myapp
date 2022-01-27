import React from 'react';
import UpdatedComponent from './withCounter';
class ClickCounter extends React.Component {
    render(){
        const {count, handleClick}=this.props;
        return(
            <>
                <div>
                    <button onClick={handleClick}>clicked {count} times</button>
                </div>
             </>
        );
    }
}

export default UpdatedComponent(ClickCounter);