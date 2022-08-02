import "./style.css";

const Home = (props) => {
  return (
    <div className="home">
      <h2>Welcome to Home page</h2>
      <div>
        <p>
          FullName :- {props.data.firstName} {props.data.lastName}{" "}
        </p>
        <p>Email :- {props.data.email} </p>
        <p>Password :- {props.data.password} </p>
      </div>
      <button onClick={props.onClick}>Logout</button>
    </div>
  );
};
export default Home;
