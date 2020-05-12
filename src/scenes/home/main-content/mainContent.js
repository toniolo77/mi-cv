import React from 'react';
import Section  from '../../../componentsGbl/section/section';

const mainContent = (props) =>  {
    let listSection= props.mainContent.map(item => (
            <Section
                key={item.id_main}
                title={item.title}
                icon={item.icon}  
                list_item={item.content}
            />
        )
    );
    return (
        <div>
            { listSection }
        </div>
    );
}


export default mainContent;
