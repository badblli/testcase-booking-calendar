import './styles/style.css'
import './components/Calendar'
import Calendar from './components/Calendar';
import Datepicker from 'vanillajs-datepicker/Datepicker';

function App() {

  return (
    <>
      <div className='header blue'>
        <h4>UYGUNLUK TAKVİMİ</h4>
        <div className='information-box-area blue'>
          <div className='information-box grey'></div><p>Müsait</p>
          <div className='information-box red'></div><p>Dolu</p>
          <div className='information-box orange'></div><p>Ödeme Bekliyor</p>
          <div className='information-box red'></div><p>Giriş-Çıkış</p>
        </div >
      </div>
      <div id="foo" data-date="01/25/2020">
        <Datepicker />
      </div>
    </>

  );
}

export default App;
