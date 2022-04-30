import Link from "next/link"
import Image from 'next/image'


function Navbar(){
    return(<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link href="/">
      <a className="navbar-brand" >
       <img src="/logo.svg" alt="logo"/>
      </a>
       </Link>
        
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4" >
          <li className="nav-item">
          <Link href="/">
              <a className="nav-link active">Home</a>
         </Link>
          </li>
          <li className="nav-item">
            <Link href="/products">
              <a className="nav-link active">Gallery</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link active">About</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
              <a className="nav-link active">Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </nav>)
}

export default Navbar