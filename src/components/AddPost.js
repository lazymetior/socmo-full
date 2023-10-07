import React from 'react'

export const AddPost = () => {
  return (
    <section className="py-5 text-center container">
        <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Add a post</h1>

                <form>
                    <div className="mb-3">
                        
                        <input type="file" className="form-control" id="+" accept="image/*" />
                    </div>
                    
               </form>
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            </div>
        </div>
    </section>
  )
}
