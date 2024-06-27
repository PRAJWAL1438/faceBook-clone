import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import RightSidebar from "./RightSidebar";
import Sidebar from "./Sidebar";
import { useStateValue } from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();

  console.log(user);
  return (
    <>
    {
      !user ? (<Login/>) : (
        <div className="App">
          <Header/>

          <div className="app__body">
            <Sidebar/>
            <Feed/>
            <RightSidebar/>
          </div>
        
        </div>
      )
    }
    
    </>
  );
}

export default App;
