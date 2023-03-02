import React, { useState, useRef } from 'react';
import './App.css'
import ResizeModal from './components/ResizeModal'




const App = () => {
    const [modal, setModal] = useState(false);

    const openModal=(e)=>{
        setModal(!modal)
    }
        /* const favoriteBtn = useRef(null);
        const onFavoriteToggle = (e) => {
          favoriteBtn.current.style.backgroundColor = '#959595';
          favoriteBtn.current.style.border = '#959595';
          e.target.value();
          console.log(e.target.value());
        } */
    
   
  return (
    <div className='desktop'>
        <div className='icon favoriteButton' onDoubleClick={openModal} >1</div>
        <div className='icon favoriteButton' onDoubleClick={openModal} >2</div>
        <div className='icon favoriteButton' onDoubleClick={openModal} >3</div>
        <div className='icon favoriteButton' onDoubleClick={openModal} >4</div>
        <div className='icon favoriteButton' onDoubleClick={openModal} >5</div>
        {/* <div className='icon favoriteButton' onClick={() => {onFavoriteToggle();}} onDoubleClick={openModal} ref={favoriteBtn}>1</div>
        <div className='icon favoriteButton' onClick={() => {onFavoriteToggle();}} onDoubleClick={openModal} ref={favoriteBtn}>2</div>
        <div className='icon favoriteButton' onClick={() => {onFavoriteToggle();}} onDoubleClick={openModal} ref={favoriteBtn}>3</div>
        <div className='icon favoriteButton' onClick={() => {onFavoriteToggle();}} onDoubleClick={openModal} ref={favoriteBtn}>4</div>
        <div className='icon favoriteButton' onClick={() => {onFavoriteToggle();}} onDoubleClick={openModal} ref={favoriteBtn}>5</div> */}
        {/* <div className="icon" onClick={openModal}>1</div>
        <div className="icon" onClick={openModal}>2</div>
        <div className="icon" onClick={openModal}>3</div>
        <div className="icon" onClick={openModal}>4</div>
        <div className="icon" onClick={openModal}>5</div>
        <div className="icon" onClick={openModal}>6</div>
        <div className="icon" onClick={openModal}>7</div> */}
        <div className="dock">
            <div className="start-btn">Start</div>
            <div className="time">PM 03:12</div>
        </div>
        <ResizeModal
            title={'모달 테스트'}
            open={modal}
            isResize={true}
            width={600}
            height={400}
            onClose={openModal}
        >
        </ResizeModal>
    </div>
    
  );
};


export default App;
