import React from 'react';
import {SystemIcon} from 'server-os-uikit'

interface ITabBarProps {
    children: React.ReactNode
}

const TabBar: React.FC<ITabBarProps> = ({children}) => {
    return (
        <div style={{
            border: "3px solid white",
            borderRadius: "10px",
            padding: "5px 20px",
            display: "flex",
            gap: "20px"
        }}
        >
        {children}
        </div>
    );
};

export default TabBar;