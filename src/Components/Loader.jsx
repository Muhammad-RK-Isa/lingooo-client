import { InfinitySpin } from "react-loader-spinner";
import useAuth from "../Hooks/useAuth";

const Loader = () => {
    const { loading } = useAuth();
    return (
        <div className={ `${ loading ? 'grid': 'hidden'} w-screen h-screen bg-primary bg-opacity-20 backdrop-blur-sm fixed top-0 left-0 z-50 place-content-center`}>
            <InfinitySpin
                width='200'
                color="#00c9b7"
            />
        </div>
    );
};

export default Loader;