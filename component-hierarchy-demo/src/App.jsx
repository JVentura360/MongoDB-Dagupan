import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  const user = {
    name: "Jonel Ventura",
    course: "BS Information Technology",
    section: "IT-2A"
  };

  return (
    <div className="app">
      <Header />

      <ProfileCard
        name={user.name}
        course={user.course}
        section={user.section}
      />

      <Footer />
    </div>
  );
}

export default App;