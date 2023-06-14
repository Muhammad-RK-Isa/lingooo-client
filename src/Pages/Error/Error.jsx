import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className="bg-white dark:bg-black grid place-items-center h-screen text-5xl leading-normal text-center fixed top-0 left-0 z-50">
            <div className='flex flex-col items-center justify-center'>
                404 | Page not found
                <Link to="/" className="text-blue-500 text-base">Go to Home</Link>
            </div>
        </div>
    );
};

export default Error;