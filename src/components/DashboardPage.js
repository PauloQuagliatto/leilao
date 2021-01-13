import React from 'react'

const DashboardPage = () => (
    <div className="content-container">
    <div className="header-container">
       <div className="header">
           <h1>LEILÃO</h1>
           <div className="log-box">
               <img alt="user" src="./images/icons/no-user-image.png" className="user-image" />
               <button className="btn btn--login">Login</button>
           </div>
       </div>
       
       <div className="menu">
           <div>
                <button className="btn btn--navigation">Inicio</button>
                <button className="btn btn--navigation">Produtos</button>
                <button className="btn btn--navigation">Ofertar</button>
            </div>
            <input className="search-bar" placeholder="Procure seu produto"/>
       </div>
       </div>
       <h3>The Rest</h3>
    </div>
)

export { DashboardPage as default }