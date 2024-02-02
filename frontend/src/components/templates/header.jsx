import './header.css'
import React from 'react'


export default props =>
    <header className="header d-sn-flex flex-column">
        <h1 className='nt-3'>
           <i className={`fa fa-${props.icon}`}></i>{props.title}
        </h1>
        <p className="lead ">{props.subtitle}</p>
    </header>
