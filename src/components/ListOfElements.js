import React from 'react';

class ListOfElements extends React.Component {
    render (){
        const topicList = ['HTML', 'CSS', 'React'];
        return(
            <div>
                Lista de elementos:
                <ul>
                    {topicList.map(topic => <li>{topic}</li>)}
                </ul>
            </div>
        );
    }
}

export default ListOfElements;