import './styles/style.css'
import Calendar from './components/Calendar';


function App(start, end) {

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
        <button>1</button>
        <button type="button">3</button>
        <button type="button">6</button>
        <button type="button">12</button>
      </div>

      <div className='calendar-area'>

        <Calendar />
      </div>
      {/* <div>Seçili tarihler {start ? start : "seçili değil"} - {end ? end : "seçili değil"}</div> */}
    </>

  );
}

export default App;
