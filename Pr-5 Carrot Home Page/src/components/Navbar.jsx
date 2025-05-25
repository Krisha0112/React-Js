import './Navbar.css'
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Category</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Product</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              pages
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disablsed" aria-disabled="true">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disablsed" aria-disabled="true">element</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disablsed" aria-disabled="true">
                +123 ( 456 ) ( 7890 )</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

    )
}

export default Navbar
