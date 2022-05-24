import * as React from 'react';
import {INavLink, INavLinkGroup, INavStyles, Nav} from '@fluentui/react/lib/Nav';
import {useNavigate} from "react-router-dom"
import {useState} from "react";



const navLinkGroups: INavLinkGroup[] = [
    {
        links: [
            {
                name: 'Home',
                url: '/',
                key: 'key1',
                isExpanded: true
            },
            {
                name: 'Engagement',
                url: '/Engagement',
                key: 'key2',
            },

        ],
    },
];

export const NavBasicExample: React.FunctionComponent = () => {
    const [selectedKey, setSelectedKey] = useState('key1');
    const navigate = useNavigate();

    // @ts-ignore
    function navMenuClickHandler(ev?: React.MouseEvent<HTMLElement>, item: INavLink) {
        ev?.preventDefault();
        setSelectedKey(item.key ?? "key1");
        navigate(item!.url);
    }


    return (
        <Nav
            onLinkClick={navMenuClickHandler}
            selectedKey={selectedKey}
            ariaLabel="Nav basic example"
            groups={navLinkGroups}
        />
    );
};

