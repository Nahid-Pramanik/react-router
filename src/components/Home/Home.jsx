import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";


const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <div className={navigation.state === 'loading' ? "Loding" : ""}>
                
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;