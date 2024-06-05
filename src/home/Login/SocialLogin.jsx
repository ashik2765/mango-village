import React, { useContext } from 'react'
import { AuthContext } from '../../firebase/AuthProvider';
import toast from 'react-hot-toast';

export default function SocialLogin() {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleLogin = () => {
        googleSignIn().then((data) => {
            if (data?.user?.email) {
                const userInfo = {
                    email: data?.user?.email,
                    name: data?.user?.displayName
                }
                fetch('http://localhost:5000/user', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userInfo)
                }).then(res => res.json())
                    .then((data) => {
                        localStorage.setItem('token', data?.token)
                        toast.success("user saved in Database")
                    })
            }
        })

    };

    const handleFacebookLogin = () => {
        // Add logic to handle Facebook login
        console.log('Facebook login clicked');
    };
    return (
        <div className="mt-4 flex justify-center space-x-4">
            <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300"
            >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M23.76 12.21c0-.77-.07-1.51-.2-2.22H12v4.2h6.61a5.67 5.67 0 0 1-2.46 3.72v3.09h3.95a11.94 11.94 0 0 0 3.66-8.79z" /><path d="M12 24c3.24 0 5.95-1.07 7.93-2.88l-3.95-3.09a7.44 7.44 0 0 1-11.14-4.36H1.76v3.15A11.99 11.99 0 0 0 12 24z" /><path d="M4.86 14.66a7.45 7.45 0 0 1 0-4.32V7.19H1.76v3.15A11.99 11.99 0 0 0 12 24z" /><path d="M12 4.74a6.54 6.54 0 0 1 4.63 1.81l3.47-3.47A11.93 11.93 0 0 0 12 0a11.99 11.99 0 0 0-10.24 5.99l3.1 2.15A7.41 7.41 0 0 1 12 4.74z" /></svg>
                Google
            </button>
            <button
                onClick={() => console.log('Facebook register clicked')}
                className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
            >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.35v21.301c0 .75.6 1.349 1.325 1.349h11.498v-9.294h-3.133v-3.622h3.133V8.4c0-3.1 1.894-4.786 4.658-4.786 1.325 0 2.465.099 2.796.143v3.241l-1.919.001c-1.505 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123v9.293h6.116c.725 0 1.325-.599 1.325-1.348V1.35c0-.75-.6-1.35-1.325-1.35z" /></svg>
                Facebook
            </button>
        </div>
    )
}
