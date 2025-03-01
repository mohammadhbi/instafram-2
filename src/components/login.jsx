import React from 'react'
import Logo from '../assets/images/Frame 20.png'
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div className='grid justify-center mt-36' >
            <div>
                <img className='mb-9' src={Logo} alt="" />
            </div>
            <form className='grid grid-cols-1' action="">

                <label className="input mb-3 w-96">

                    <input type="text" className="grow" placeholder="User Name" />
                </label>
                <label className="input w-96">

                    <input type="text" className="grow" placeholder="Password" />
                    <span className="badge badge-xs text-[#8A8888]">Show</span>
                </label>

                <button className='bg-[#44B8FA] rounded-2xl border-none outline-0 w-96 h-10 text-white mt-6'>Log in</button>

                <div className='flex font-light mt-3'>
                    <p className='mr-2'>Don’t have an account?</p>
                    <Link> <span className='text-[#44B8FA]'>Log in</span> </Link>
                </div>

            </form>
        </div>
    )
}

export default Login;