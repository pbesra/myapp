import React from 'react';
import UpdatedComponent from './withCounter';
class HoverCounter extends React.Component {
    
    render(){
        const {count, handleClick}=this.props;
        return(
            <>
                <div>
                    <button onMouseOver={handleClick}>hovered {count} times</button>
                </div>
             </>
        );
    }
}

export default UpdatedComponent(HoverCounter);