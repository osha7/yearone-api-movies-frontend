
import React from 'react';
 
function HeaderLandingPage() {
  
  const greeting = 'MOVIES';
 
  return (
    <div className="header-landing-page">
        <h1>{greeting}</h1>
        <span>"If you only see one movie this year...you need to get out more often."</span>
    </div>
  )
}
 
export default HeaderLandingPage;