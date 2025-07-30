import { useState } from 'react'
import Text from '../components/Text'
const Login = () => {
    const [currentState, setCurrentState] = useState('login');
    const handleOnSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleOnSubmit} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
            <Text text1={currentState === 'login' ? 'Login' : 'Sign Up'} text2={currentState === 'login' ? 'Please enter your credentials to login.' : 'Please fill in the details to register.'} />
            {currentState === 'login' ? null : <input type="text" placeholder='Name' className='place-order-input w-full' required />}
            <input type="email" placeholder='Email' className='place-order-input w-full' required />
            <input type="password" placeholder='Password' className='place-order-input w-full' required />
            <div className='flex justify-between items-center w-full text-sm mt-[-8px]'>
                <p className='cursor-pointer'>Forgot your password?</p>
                {
                    currentState === 'login' ?
                        <p onClick={() => setCurrentState('signup')} className='cursor-pointer text-blue-950 text-grad'>Create an account</p> :
                        <p onClick={() => setCurrentState('login')} className='cursor-pointer text-blue-950 text-grad'>Already have an account?</p>
                }
            </div>
            <button className='bg-grad px-8 py-2 mt-4 text-white rounded-lg cursor-pointer'>{currentState === 'login' ? 'Sign In' : 'Sign Up'}</button>
        </form>
    )
}

export default Login
