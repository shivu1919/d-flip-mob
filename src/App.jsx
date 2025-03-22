import Mobile from "./components/Mobile"
import './App.css'

function App() {

  const mob = [
    {
      src:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/v/0/e/-original-imahagbrshzhznjc.jpeg?q=70&crop=false',
      name:'SAMSUNG Galaxy F06 5G (128 GB)  (4 GB RAM)',
      price:'29,999',
      f1:'8 GB RAM | 128 GB ROM',
      f2:'17.2 cm (6.77 inch) Full HD+ Display',
      f3:'50MP (Main) + 50MP (3X Periscope)+ 8MP (Ultra-Wide)  | 50MP Front Camera',
      f4:'5000 mAh Battery',
      f5:'7s Gen3 Processor'
    },
    {
      src:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/6/1/v/-original-imah5f2tqawgznhv.jpeg?q=70&crop=false',
      name:'MOTOROLA g05 (Plum Red, 64 GB)  (4 GB RAM)',
      price:'16,999'
    }
  ]







  return (
    <>
      <div className="main">

      <Mobile 
        src={mob[0].src} 
        name={mob[0].name}
        price={mob[0].price}
        f1={mob[0].f1}
        f2={mob[0].f2}
        f3={mob[0].f3}
        f4={mob[0].f4}
        f5={mob[0].f5}
        />

      <Mobile 
        src={mob[1].src} 
        name={mob[1].name}
        price={mob[1].price}
        f1={mob[0].f1}
        f2={mob[0].f2}
        f3={mob[0].f3}
        f4={mob[0].f4}
        f5={mob[0].f5}
      />
            <Mobile 
        src={mob[0].src} 
        name={mob[0].name}
        price={mob[0].price}
        f1={mob[0].f1}
        f2={mob[0].f2}
        f3={mob[0].f3}
        f4={mob[0].f4}
        f5={mob[0].f5}
        />

      <Mobile 
        src={mob[1].src} 
        name={mob[1].name}
        price={mob[1].price}
        f1={mob[0].f1}
        f2={mob[0].f2}
        f3={mob[0].f3}
        f4={mob[0].f4}
        f5={mob[0].f5}
      />







      </div>

    
    </>
  )
}

export default App


