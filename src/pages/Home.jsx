import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/SignUp')}>Login</button>ss
    </div>

  )
}

export default Home