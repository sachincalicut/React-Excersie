import { useState, useEffect } from "react";
import "./App.css";
import theme from "./component/ui/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "./component/ui/layout/layout";
import BarLoader from "react-spinners/BarLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="overlay">
          <BarLoader className="loader" color={"#30d22e"} loading={loading} />
          Please Wait..
        </div>
      ) : (
        <ThemeProvider theme={theme}>
          <Layout />
        </ThemeProvider>
      )}
    </div>
  );
}
export default App;
