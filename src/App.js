import logo from './logo.svg';
import './App.css';
import Components from './Components';
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <>
    <Header></Header>
    <form>

      <input type="email" name="email" placeholder='Your Email' required />
      <input type="password" name="password" placeholder='Your Password' required />
      {/* <button type="submit" className='btn' >Login</button> */}
      <a href='#Components' className='btn' >Login</a>
    </form>
    </>
  );
}

export default App;
