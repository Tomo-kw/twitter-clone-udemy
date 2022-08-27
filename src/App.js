import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Timeline from "./components/timeline/Timeline";

function App() {
  return (
    <div className="app">
      {/* サイドバー */}
      <Sidebar />
      {/* タイムライン */}
      <Timeline />
      {/* ウィジェット */}
    </div>
  );
}

export default App;
