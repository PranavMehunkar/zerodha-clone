import React from 'react';

function MiddleSection() {
    return ( 
    <div className="container">
        <div className='row'>
       <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img src="media/images/signup.png" style={{width:"95%"}}/>
        </div>
        <div className="col-md-6 px-5">
          <h1 className="mb-3">Signup now</h1>
          <p className="mb-4">Or track your existing application</p>
        <input  className="form-control" style={{width:"50%"}} placeholder="Enter your mobile number" />
        <br/>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Get OTP
        </button>
        <p>By proceeding, you agree to the Zerodha <a href="" style={{textDecoration:"none"}}>terms</a> & <a href="" style={{textDecoration:"none"}}>privacy policy</a></p>
      </div>
    </div>
    </div>
    );
}

export default MiddleSection;
