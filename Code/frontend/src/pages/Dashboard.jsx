import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


import Spinner from '../components/Spinner'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  // const { isLoading, isError, message } = useSelector(
  //   (state) => state
  // )

  useEffect(() => {
    // if (isError) {
    //   console.log(message)
    // }

    if (!user) {
      navigate('/login')
    }


    return () => {

    }
  }, [user, navigate, dispatch])

  // if (isLoading) {
  //   return <Spinner />
  // }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
      
      </section>

     
{ 
     }
    </>
  )
}

export default Dashboard
