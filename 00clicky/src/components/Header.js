import React from "react";
import '../styles/index.css';



function Header(props) {
   
        return (
            <header>
                <div className='headerContainer'>
                    <h1>Daily Memory Game!</h1>
                    <h2>Challenge yourself. </h2>
                    <h3>Can you remember the most influential people of the 21 century?</h3>
                    <p>Work your brain out. Click once. Click the same person twice to loose</p>
                </div>
            </header>
        );
    }


export default Header;