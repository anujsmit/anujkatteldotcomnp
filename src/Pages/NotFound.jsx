import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '96px', margin: '0' }}>404</h1>
      <h2 style={{ fontSize: '32px' }}>Page Not Found</h2>
      <p style={{ fontSize: '18px', color: '#666' }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link 
        to="/" 
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '16px'
        }}
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFound