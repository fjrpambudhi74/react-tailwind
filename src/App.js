import Sidebar from "./components/Sidebar"
import ContentContainer from "./components/ContentContainer";
import ChannelBar from "./components/ChannelBar";
function App() {
  return (
    <div className="flex">
      <Sidebar/>
      <ChannelBar/>
      <ContentContainer/>
    </div>
  );
}

export default App;
