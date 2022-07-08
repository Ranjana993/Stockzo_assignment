import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import "./App.css"
import Hero from './Components/Hero/Hero';
import Card from './Components/Cards/Card';
import Team from './Components/TeamSection/Team';
import Login from './Components/LoginCom/Login';
import UserCard from './Components/UsersCard/UserCard';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <Main />
      <Hero />
      <Card />
      <Team />
      <Login />
      <UserCard/>
      <Blogs/>
      <Contact/>
    </div>
  );
}

export default App;
