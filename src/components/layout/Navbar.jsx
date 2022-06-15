import Logo from "../Logo"

// import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar py-2 shadow-lg bg-white text-neutral-content nv">
      <div className="container mx-auto">
        <div className="flex">
          <div className="mt-4">
            <Logo className='inline'/>
          </div>
         
        
       
        <div className="flex-1 ">
          <div className="flex justify-end">
            <button className="btn mr-10 pt-2  btn-sm rounded-btn text-gray-600 focus:border-b-2 focus:border-Limegreen-400">Home</button>
            <button  className="btn mr-10 pt-2  rounded-btn text-gray-600 focus:border-b-2 focus:border-Limegreen-400 ">About</button>
            <button className="btn mr-16 pt-2 btn-sm rounded-btn text-gray-600 focus:border-b-2 focus:border-Limegreen-400">Contact</button>
        
            <a href="" className="btn  mr-10 px-5 py-2 mt-2 font-bold text-white bg-gradient-to-r from-Limegreen-400 to-cyan-400 hover:text-black rounded-full">Request Invite</a>

          
          </div>
          
          </div>
      </div>
      </div>
      
      
    </nav>
  )
}

export default Navbar