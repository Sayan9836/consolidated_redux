import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../redux/features/PostSlice'
import Spinner from './Spinner'

const CreatePost = () => {
  const [values, setValues] = useState({ title: "", body: "" })
  const [showpost, setShowPost] = useState(false);
  const { title, body } = values;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, post } = useSelector(state => ({ ...state.app }))

  const HandleClick = (e) => {
    e.preventDefault();
    dispatch(createPost(values));
    setValues({ title: "", body: "" });
    setShowPost(true);
  };   

  const showCreatedPost = () => {
    return (
      <>
        {loading ? <Spinner /> : (
          <div className="card mt-4" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">{post[0].title}</h5>
              <p className="card-text">{post[0].body}</p>
            </div>
          </div>
        )}
      </>
    )
  }
  return (
    <div>
      <h1 className='text-center bg-dark text-white p-2'>Create Post</h1>
      <form action="">
        <div className="mb-3">
          <input type="text" value={title} onChange={(e) => setValues({ ...values, title: e.target.value })} placeholder='Enter Post Title' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="form-floating">
          <textarea value={body} onChange={(e) => setValues({ ...values, body: e.target.value })} className="form-control" placeholder="Enter text" id="floatingTextarea2" style={{ height: 100 }} />
          <label htmlFor="floatingTextarea2">Comments</label>
        </div>
        <button onClick={() => navigate('/')} type="submit" className="btn btn-primary mt-4">Go Home</button>
        <button onClick={HandleClick} type="submit" className="btn btn-primary mt-4 ms-4">Submit</button>
      </form>
      {
        showpost && <div>{showCreatedPost()}</div>
      }
    </div>
  )
}

export default CreatePost

