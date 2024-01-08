import "./App.css";
import Profile from "./components/profile";
import Skills from "./components/profile/skills";

function App() {
  return (
    <div>
      <Profile />

      <div
        style={{
          width: "500px",
          marginLeft: "300px",
        }}
      >
        <h3> Programmer's List:</h3>

        <div style={{ marginTop: "30px" }}>
          <p style={{ marginBottom: "0px" }}>
            Name: <strong>Mr. XXX</strong>
          </p>
          <Skills skill1={"React"} skill2={"Angular"} skill3={"Vue"} />
        </div>

        <div>
          <p style={{ marginBottom: "0px" }}>
            Name: <strong>Mr. XXX</strong>
          </p>
          <Skills skill1={"HTML"} skill2={"CSS"} skill3={"Tailwind"} />
        </div>
      </div>
    </div>
  );
}

export default App;
