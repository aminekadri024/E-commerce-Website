import { useState } from 'react'
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + 'api/user/admin', { email, password });
            if (response.data.success) {
                setToken(response.data.token);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <form onSubmit={onSubmitHandler} className='flex bg-gray-500 flex-col gap-y-4'>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='your@name.com' />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='your password' />
                <button >Login</button>
            </form>
        </div>
    )
}

export default Login
