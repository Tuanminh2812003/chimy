import './App.css';
import { Route, Routes } from 'react-router-dom';
import QTDTCDH from './Layouts/QTDTCDH';
import QTDTTA from './Layouts/QTDTTA';
import TNTM from './Layouts/TNTM';
import BTSVM from './Layouts/BTSVM';
import HTTL from './Layouts/hoangthanhthanglong';
import HHSTD from "./Layouts/hoanghoasutrinhdo";
import DSTNH from "./Layouts/disanthanhnhaho";
import VHL from "./Layouts/vinhhalong";
import DTCHA from "./Layouts/dothicohoian";
import MBTN from "./Layouts/mocbantrieunguyen";
import CT from "./Layouts/catru";
import DCQH from "./Layouts/dancaquanho";
import NNCDH from "./Layouts/nhanhaccungdinhhue";
import KGVHCC from "./Layouts/khonggianvanhoacongchieng";
import BDN from "./Layouts/banducnoi";
import VQG from "./Layouts/vuonquocgia";
import TDMS from "./Layouts/thanhdiamyson";
import HX from "./Layouts/hatxoan";
import TNTCHV from "./Layouts/tinnguongthocunghungvuong";
import CBTN from "./Layouts/chaubantrieunguyen";
import DCTT from "./Layouts/doncataitu"
import Home from './Layouts/Home';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quanthecodohue' element={<QTDTCDH/>}/>
        <Route path='/tacphamdoibatsuvenhieumau' element={<QTDTTA/>}/>
        <Route path='/tinnguongthomau' element={<TNTM/>}/>
        <Route path='/vanmieuquoctugiam' element={<BTSVM/>}/>
        <Route path='/COVATNGOCTRANGTHAIBINHHUUTUONG' element={<HTTL/>}/>
        <Route path='/tacphamduabobaynui' element={<HHSTD/>}/>
        <Route path='/COVATTUONGDONGTHANTAI' element={<DSTNH/>}/>
        <Route path='/covatamdiemtinh' element={<VHL/>}/>
        <Route path='/dothicohoian' element={<DTCHA/>}/>
        <Route path='/tacphamnhungnguoithuanthu' element={<MBTN/>}/>
        <Route path='/catru' element={<CT/>}/>
        <Route path='/quanhobacninh' element={<DCQH/>}/>
        <Route path='/tacphamtroxuanpha' element={<NNCDH/>}/>
        <Route path='/tacphamlecapsac' element={<KGVHCC/>}/>
        <Route path='/banducnoitrencuudinhtaihue' element={<BDN/>}/>
        <Route path='/covatbinhphaplam' element={<VQG/>}/>
        <Route path='/tacphamtrove' element={<TDMS/>}/>
        <Route path='/hatxoan' element={<HX/>}/>
        <Route path='/tuyetsan' element={<TNTCHV/>}/>
        <Route path='/chaubantrieunguyen' element={<CBTN/>}/>
        <Route path='/tacphammuarong' element={<DCTT/>}/>
      </Routes>
    </>
  );
}

export default App;
