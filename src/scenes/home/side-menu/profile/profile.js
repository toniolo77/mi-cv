import React from 'react';
import Title from '../../../../componentsGbl/title/title';
import ItemProfile from './item-profile/itemProfile';

const Profile = (props) => {
    const listItemProfile = props.data.content.map(item => {
        return (
            <ItemProfile
                icon={item.icon}
                description={item.description}
            />

        )
    })
    return (
        <div>
            <Title title={props.data.title} icon={props.data.icon} style="white"></Title>
            { listItemProfile }
        </div>
    )
}

export default Profile;

