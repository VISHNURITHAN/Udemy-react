

function Navbar() {
    return (
      <div className="navbar">
      <div className="navbar__s1">
          <h1 className="navbar__s1__title">Udemy</h1>
          <p>Categories</p>
      </div>
  
      <div className="navbar__s2">
      <i className="fa-solid fa-magnifying-glass" style={{ color: "#000205" }}></i>
          <input placeholder="Search here..."></input>
      </div>
  
      <div className="navbar__s3">
          <p>plans & Pricing</p>
          {/* <!-- <p>Udemy Business</p> --> */}
           <div className="Udemybusiness">
              <p>Udemy Business</p>
              <div className="Udemybusiness__popup">
                  <h3>Get your team access to over 26,000 top Udemy courses, anytime, anywhere.
                  </h3>
                  <button>Try Udemy Business</button>
              </div>
           </div>
          {/* <!-- <p>Teach on Udemy</p> --> */}
           <div className="Teachonudemy">
              <p>Teach on Udemy</p>
              <div className="Teachonudemy__popup">
                  <h3>Turn what you know into an opportunity and reach millions around the world.
                  </h3>
                  <button>Learn More</button>
              </div>
           </div>
      </div>
      <div className="navbar__s4">
      <i className="fa-solid fa-cart-shopping" style={{ color: "#000000" }}></i>
          <button className="navbar__s4__login">Login</button>
          <button className="navbar__s4__signup">Sign Up</button>
          <button className="navbar__s4__globe"><i className="fa-solid fa-globe"></i></button>
      </div>
      <div className="navbar__s5">
          <i className="fa-solid fa-bars"></i>
      </div>
  </div>
  
  
    );
  }
  
  export default Navbar
  