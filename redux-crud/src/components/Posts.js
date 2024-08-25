import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deletePost, getPost, setEdit } from '../redux/features/PostSlice'
import Spinner from './Spinner'
const Posts = () => {
    const [id, setId] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, post, body, edit } = useSelector(state => ({ ...state.app }))
    const handleFetchData = (e) => {
        e.preventDefault();
        if (!id) {
            alert('Please Provide Post ID')
        } else {
            dispatch(getPost(id));
        }
    }
    const handleDelete = (userId) => {
        dispatch(deletePost(userId));
        alert("do you want to delete")
    }
    return (
        <>
            <div className="container row mt-4">
                <div className="col-md-8">
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                        Search By ID:
                    </label>
                    <form action=''>
                        <div className="mb-3">
                            <input type="number" className="form-control" onChange={(e) => setId(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleFetchData}>Fetch Post</button>
                        <button type="submit" className="btn btn-warning ms-4" onClick={() => navigate('/createpost')}>Create Post</button>
                    </form>
                </div>
            </div>
            <div className='container'>
                {
                    loading ? <Spinner /> : (
                        <>
                            {
                                post.length > 0 && (
                                    <div className="card mt-4" style={{ width: '18rem' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{post[0].title}</h5>
                                            {edit ? (<h1>hii</h1>) : (
                                                <p className="card-text">{post[0].body}</p>
                                            )}
                                            <button href="#" className="btn btn-primary" onClick={dispatch(setEdit({edit:true,body:post[0].body}))}>Edit</button>
                                            <button href="#" className="btn btn-warning ms-4" onClick={() => handleDelete(post[0].id)}>Delete</button>
                                        </div>
                                    </div>

                                )
                            }
                        </>
                    )
                }
            </div>

        </>
    )
}

export default Posts
