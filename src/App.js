import CardsList from "./components/CardsList";
import CssBaseline from "@mui/material/CssBaseline";
import NavigationBar from "./components/NavigationBar";
import Routebar from "./components/Routebar";
function App() {
  return (
    <>
      <NavigationBar />
      <Routebar />
      <CssBaseline />
      <CardsList />
    </>
  );
}

export default App;
