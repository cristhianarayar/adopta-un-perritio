import Header from './components//Header/Header'
import Footer from './components/Footer/Footer'
import MyCard from './components/MyCard/MyCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
  return (
    <>
      <main>  
        <Header title = 'Adopta un perrito'/>
        <div className='mycard'>
          <MyCard  img = './src/assets/Atom.jpg' title='Atom' text='Lleno de energía y listo para jugar. ¡Apura para llevarlo a casa!' color='success' badge='Akita'/>
          <MyCard  img = './src/assets/Candado.jpg' title='Candado' text='Lleno de energía y listo para jugar. ¡Apura para llevarlo a casa!' color='primary' badge='Puppy'/>
          <MyCard  img = './src/assets/Rocky.jpg' title='Rocky' text='Lleno de energía y listo para jugar. ¡Apura para llevarlo a casa!' color='danger' badge='Labrador'/>
          <MyCard  img = './src/assets/Rony.jpg' title='Rony' text='Lleno de energía y listo para jugar. ¡Apura para llevarlo a casa!' color='warning' badge='Podle'/>
        </div>    
        <Footer description = 'Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su escencia única. Adopta un perro y brindale una segunda oportunidad. Encuentra a tu compañero peludo para siempre.'/>
      </main>
    </>
  )
}

export default App


