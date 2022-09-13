import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Blog from "./pages/Blog";
import About from "./pages/About";

function App(){
  let Component = App
  // eslint-disable-next-line default-case
  switch(window.location.pathname){
    case "/":
      Component = <App/>
      break
    case "/Home":
      Component = <Home/>
      break
    case "/About":
      Component = <About/>
      break
    case "/Blog":
      Component = <Blog/>
      break
    case "/Forum":
      Component = <Forum/>
      break
  }  

  return (
    <>
      <Navbar/>
      <div className="container">
        {Component}
      </div>
    </>
  )
}
 
export default App;