import '../Components/Tic.css'
import { useRef, useState } from 'react';

function TicTacToe() {
  const [flag, setFlag] = useState(true);
  const [xturn, setturn] = useState("X turn");
  const topleft = useRef();
  const topcenter = useRef();
  const topright = useRef();
  const centerleft = useRef();
  const centercenter = useRef();
  const centerright = useRef();
  const bottomleft = useRef();
  const bottomcenter = useRef();
  const bottomright = useRef();
  const xandyturn = useRef();

  function play(ref) {
    if (flag) {
      ref.current.innerHTML = "X";
      ref.current.style.pointerEvents = 'none';
       setturn("0 turn");
    } else {
      ref.current.innerHTML = '0';
      ref.current.style.pointerEvents = 'none';
       setturn("X Turn");
    }
    setFlag(!flag);
    checkwin();
  }

  function checkwin(){
    setTimeout(() => {
      
    
    if((topleft.current.innerHTML==="X") && (topcenter.current.innerHTML==="X") &&
    (topright.current.innerHTML==="X")){
      alert("x win");
      restart();
    }
    else if((centerleft.current.innerHTML==="X") && (centercenter.current.innerHTML==="X") &&
    (centerright.current.innerHTML==="X")){
      alert("X win");
      restart();
    }
    else if((bottomleft.current.innerHTML==="X") && (bottomcenter.current.innerHTML==="X") &&
    (bottomright.current.innerHTML==="X")){
      alert("X win");
      restart();
    }
    else if((topleft.current.innerHTML==="X") && (centerleft.current.innerHTML==="X") &&
    (bottomleft.current.innerHTML==="X")){
      alert("X win");
      restart();
    }
    else if((topcenter.current.innerHTML==="X") && (centercenter.current.innerHTML==="X") &&
    (bottomcenter.current.innerHTML==="X")){
      alert("X win");
      restart();
    }
    else if((topright.current.innerHTML==="X") && (centerright.current.innerHTML==="X") &&
    (bottomright.current.innerHTML==="X")){
      alert("X win");
      restart();
    }
    else if((topleft.current.innerHTML==="X") && (centercenter.current.innerHTML==="X") &&
    (bottomright.current.innerHTML==="X")){
      alert("X win");
      restart();
    }
    else if((topright.current.innerHTML==="X") && (centercenter.current.innerHTML==="X") &&
    (bottomleft.current.innerHTML==="X")){
      alert("X win");
      restart();
    }
    if((topleft.current.innerHTML==="0") && (topcenter.current.innerHTML==="0") &&
    (topright.current.innerHTML==="0")){
      alert("0 win");
      restart();
    }
    else if((centerleft.current.innerHTML==="0") && (centercenter.current.innerHTML==="0") &&
    (centerright.current.innerHTML==="0")){
      alert("0 win");
      restart();
    }
    else if((bottomleft.current.innerHTML==="0") && (bottomcenter.current.innerHTML==="0") &&
    (bottomright.current.innerHTML==="0")){
      alert("0 win");
      restart();
    }
    else if((topleft.current.innerHTML==="0") && (centerleft.current.innerHTML==="0") &&
    (bottomleft.current.innerHTML==="0")){
      alert("0 win");
      restart();
    }
    else if((topcenter.current.innerHTML==="0") && (centercenter.current.innerHTML==="0") &&
    (bottomcenter.current.innerHTML==="0")){
      alert("0 win");
      restart();
    }
    else if((topright.current.innerHTML==="0") && (centerright.current.innerHTML==="0") &&
    (bottomright.current.innerHTML==="0")){
      alert("0 win");
      restart();
    }
    else if((topleft.current.innerHTML==="0") && (centercenter.current.innerHTML==="0") &&
    (bottomright.current.innerHTML==="0")){
      alert("0 win");
      restart();
    }
    else if((topright.current.innerHTML==="0") && (centercenter.current.innerHTML==="0") &&
    (bottomleft.current.innerHTML==="0")){
      alert("0 win");
      restart();
    }
    else if((topleft.current.innerHTML !== "") && (topcenter.current.innerHTML !== "") &&
    (topright.current.innerHTML !== "") &&  (centerleft.current.innerHTML !== "") && 
    (centercenter.current.innerHTML !== "") && (centerright.current.innerHTML !== "") && 
    (bottomleft.current.innerHTML !== "") && (bottomcenter.current.innerHTML !== "") && 
    (bottomright.current.innerHTML !== "")){
      alert("draw");
      restart();
    }}, 100);
  }
  function restart(){

      topleft.current.innerHTML = "";
      topcenter.current.innerHTML = "";
      topright.current.innerHTML = "";
      centerleft.current.innerHTML = "";
      centercenter.current.innerHTML = "";
      centerright.current.innerHTML = "";
      bottomleft.current.innerHTML = "";
      bottomcenter.current.innerHTML = "";
      bottomright.current.innerHTML = "";
      setFlag("true");
      setturn("X Turn");
      resetPointerEvents();
    }
  function resetPointerEvents() {
    topleft.current.style.pointerEvents = 'auto';
    topcenter.current.style.pointerEvents = 'auto';
    topright.current.style.pointerEvents = 'auto';
    centerleft.current.style.pointerEvents = 'auto';
    centercenter.current.style.pointerEvents = 'auto';
    centerright.current.style.pointerEvents = 'auto';
    bottomleft.current.style.pointerEvents = 'auto';
    bottomcenter.current.style.pointerEvents = 'auto';
    bottomright.current.style.pointerEvents = 'auto';
  }


      return (
        <div className='pt-32'>
    <div className="container-fluid ">
      <h1 className="text-center mt-2 mb-2">Tic Tac Toe</h1>
      <h6 className="text-center mt-2 mb-2">TURN</h6>
      <p className="xandyturn text-center" ref={xandyturn}>{xturn}</p>
      <div className="col-sm-5 d-flex mx-auto mt-4">
        <div className="topleft col-sm-4">
          <p className="pblock text-center" ref={topleft} onClick={() => play(topleft)}></p>
        </div>
        <div className="topcenter col-sm-4">
          <p className="pblock text-center" ref={topcenter} onClick={() => play(topcenter)}></p>
        </div>
        <div className="topright col-sm-4">
          <p className="pblock text-center" ref={topright} onClick={() => play(topright)}></p>
        </div>
      </div>
      <div className="col-sm-5 d-flex mx-auto">
        <div className="centerleft col-sm-4">
          <p className="pblock text-center" ref={centerleft} onClick={() => play(centerleft)}></p>
        </div>
        <div className="centercenter col-sm-4">
          <p className="pblock text-center" ref={centercenter} onClick={() => play(centercenter)}></p>
        </div>
        <div className="centerright col-sm-4">
          <p className="pblock text-center" ref={centerright} onClick={() => play(centerright)}></p>
        </div>
      </div>
      <div className="col-sm-5 d-flex mx-auto mb-4">
        <div className="downleft col-sm-4">
          <p className="pblock text-center" ref={bottomleft} onClick={() => play(bottomleft)}></p>
        </div>
        <div className="downcenter col-sm-4">
          <p className="pblock text-center" ref={bottomcenter} onClick={() => play(bottomcenter)}></p>
        </div>
        <div className="downright col-sm-4">
          <p className="pblock text-center" ref={bottomright} onClick={() => play(bottomright)}></p>
        </div>
      </div>
      <div className="buttondiv col-sm-3 mx-auto">
        <button type="button" className="btn btn-success btn-sm" onClick={restart}>Play again</button>
      </div>
    </div>
    </div>
  );
      }

export default TicTacToe;
