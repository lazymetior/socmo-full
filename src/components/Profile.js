import React from 'react'
import { PostImg } from './PostImg'

export const Profile = () => {
  return (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title text-center">Your Profile</h4>
                    </div>
                    <div className="card-body">
                        <div className="mb-3 text-center">
                            <img src="" alt="User Image" className="img-fluid rounded-circle"  />
                        </div>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" defaultValue="John Doe" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" defaultValue="johndoe@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="********" />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">Update Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

          <div className="album py-5 bg-body-tertiary">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        
      <PostImg />
    
      
      </div>
    </div>
  </div>
    </div>
  )
}
