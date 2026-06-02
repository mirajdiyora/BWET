import Link from "next/link";

export default function Navbar(){
    return(
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">
      navbar
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active m-3" aria-current="page" href="/">
            Home
          </Link>
        </li>
        <li className="nav-item m-3">
          <Link className="nav-link" href="/about">
            about
          </Link>
        </li>
        <li className="nav-item m-3">
          <Link className="nav-link" href="/login">
            login
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
    )
}