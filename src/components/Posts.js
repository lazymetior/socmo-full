import React from 'react'
import { PostImg } from './PostImg'

export const Posts = () => {
  return (
    <div className="col">
            <div className="card shadow-sm">
              <PostImg />
              <div className="card-body">
                <a>
                  <h5>user1</h5>
                </a>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                  <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      <i className="ri-heart-line"/>
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      <i className="ri-chat-1-line"/>
                    </button>
                  </div>
                  <small className="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>
  )
}
