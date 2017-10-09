import React from 'react';


class Clock extends React.Component{

    render(){
        const now = new Date();
        return <div>El timepo actual es: {now.toTimeString()}</div>
    }

}

export default Clock;