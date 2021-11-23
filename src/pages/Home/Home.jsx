import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.scss"

function Home(){
    return(
        
        <div className="home">
        <Sidebar/>
        <div>Home Contents</div>
        <div>Orders</div>
        </div>
        
    );
        
    
}
export default Home;