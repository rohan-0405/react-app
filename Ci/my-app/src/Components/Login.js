import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './../aseests/Animal-welfare-&-save-birds-campaign-1.png'
import image2 from './../aseests/Education-Supplies-for-Every--Pair-of-Shoes-Sold-1.png'; 
import  './../App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="5000">
                <img src={image1} className="d-block w-100 carousel-img object-fit-none" alt="Slide 1" />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Title 1</h2>
                  <p>Description 1</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <img src={image2} className="d-block w-100 carousel-img object-fit-none" alt="Slide 2" />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Title 2</h2>
                  <p>Description 2</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="align-self-center col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-2 rgt_div">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-9 col-sm-9">
              <form onSubmit={handleLogin} className="form-horizontal">
                {/* ... (email and password input fields) */}
                <div className="mt-4">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
                <div className="mt-3 text-center">
                  <a href="/forget">Lost Password?</a>
                </div>
                <div className="mt-2 text-center">
                  <span>Don’t have an account? <a href="/registration">Create Account</a></span>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center text-secondary mt-4">
            <span className="align-bottom">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
