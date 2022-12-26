import React from 'react';

const Header = () => {
    return (
        <header style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
        }}>
            <img style={{
                width: "40px",
                height: "40px",
                borderRadius: "50px"
            }} 
            src="https://avatars.githubusercontent.com/u/65895810?v=4" />
            <h2>
                the simple calendar app ReactTS + Flask 🧑🏻‍🎄🎁
            </h2>
            <a href="https://github.com/egorkaBurkenya">
                developer
            </a>
        </header>
    );
};

export default Header;