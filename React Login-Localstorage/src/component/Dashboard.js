import React, { Fragment } from 'react'

const Dashboard = () => {
    const handleClick = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <>
              <h1 className="h3 mb-3 fw-normal">Welcome to Guest User</h1>
            <button onClick={handleClick} className="btn btn-md btn-success btn-width">Logout</button>
        </>
    )
}

export default Dashboard
