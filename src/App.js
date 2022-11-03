
import './App.css';
import Journal from './components/Journal';
import './index.css'
import './style.css'
import Nav from './components/Nav'
import Data from './components/Data'


function App() {
  let journey  = Data.map(travel=>{
    return(
      <Journal 
      Travels = {travel}
      
      
      
      
      
      />
    )



  })

  return (
    <div className="App">
   <Nav />
    <section className='journey--list'>{journey}</section> 
    </div>
  );
}
 
export default App;

