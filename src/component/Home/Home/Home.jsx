
import useUser from "../../../Hooks/useUser";
import Banner from "../../Banner/Banner";


const Home = () => {
    const user = useUser()
    console.log(user)

    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;