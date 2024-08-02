import React from 'react'
import './Header.css'
function header() {
    return (
        <>
            <div class="header">
                <img class="logo" src="logobkg.png" />
                <p>Explore IGDTUW</p>

                <div class="buttons">
                    <button>Home</button>
                    <button>Faculty</button>
                    <button>InfraStructure</button>
                    <button>Society</button>
                    <button>Academics</button>
                    <button>Opportunities</button>
                    <button>Login</button>
                    <button>Sign up</button>
                </div>

            </div>
        </>
    )
}
export default header