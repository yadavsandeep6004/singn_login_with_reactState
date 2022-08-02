import "./style.css";
import Singnup from "../Singnup";
import LoginForm from "../LoginForm";
import Home from "../../components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { getData } from "../../services/storge";
import { removeData } from "../../services/storge";
import { setData } from "../../services/storge";

export default function App() {
  const [flag, setFlag] = useState(null);
  const [out, setOut] = useState(false);
  const [value, setValue] = useState("");

  const homeHandler = (val) => {
    setValue(val.data);
    setOut(true);
    setData("login", true);
  };

  const loginHandler = () => {
    setFlag(true);
  };

  useEffect(() => {
    setFlag(getData("login"));
  }, []);

  const logOutHandler = () => {
    setOut(false);
    removeData("login");
  };

  return (
    <div className="App">
      {flag ? (
        out ? (
          <Home data={value} onClick={logOutHandler} />
        ) : (
          <LoginForm onData={homeHandler} />
        )
      ) : (
        <Singnup onLogin={loginHandler} />
      )}

      <ToastContainer />
    </div>
  );
}
