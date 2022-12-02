import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import './calc.css';


function App() {


  var sig;
  var sig1;

  const [ans,setans] = useState('');
  const [sign,setsign] = useState('');
  const [fno,setfno] = useState('');
  const [dans,setdans] = useState('');
  const [bans,setbans] = useState('');
  const [hans,sethans] = useState('');
  const [oans,setoans] = useState('');
  const [bdisable,setbdisable] = useState(false);
  const [ddisable,setddisable] = useState(false);
  const [odisable,setodisable] = useState(false);
  const [hdisable,sethdisable] = useState(false);

  function number(n)
  {
    var num = n.target.value;
    setans(ans + num);
    // decimal();
    // binary();
    // hexa();
    // octal();

  }
  function arithmetic(s)
  {
    var si = s.target.value;
    setsign(si);
    setfno(ans);
    setans('');
  }
  function equal()
  {
    if(sign=='+')
    {
      var sig1=parseFloat(fno) + parseFloat(ans);
      setans(sig1);
    }
    if(sign=='-')
    {
      var sig1=parseFloat(fno) - parseFloat(ans);
      setans(sig1);
    }
    if(sign=='*')
    {
      var sig1=parseFloat(fno) * parseFloat(ans);
      setans(sig1);
    }
    if(sign=='/')
    {
      var sig1=parseFloat(fno) / parseFloat(ans);
      setans(sig1);
    }

    if(sign=='')
    {
        setans(ans);
        sig1 = ans;
    }

    
    decimal(sig1);
    binary(sig1);
    hexa(sig1);
    octal(sig1); 
  }
  function clear()
  {
    setans('');
    setdans('');
    sethans('');
    setbans('');
    setoans('');
    setbdisable(false);
    setddisable(false);
    sethdisable(false);
    setodisable(false);
  }
  function back()
  {
    var x=ans.substring(0,ans.length-1);
    setans(x);
  }

  function decimal(sig1)
  {
    var dec=Number(sig1).toString(10);
    setdans(dec);
    
  }

  function binary(sig1)
  {
    var bin=Number(sig1).toString(2);
    setbans(bin);
    
  }
  function hexa(sig1)
  {
    var hex=Number(sig1).toString(16);
    sethans(hex);
    
  }
  function octal(sig1)
  {
    var oct=Number(sig1).toString(8);
    setoans(oct);
    
  }

  function decimal1()
  {
    setans(dans);

    setddisable(true);
    setbdisable(false);
    sethdisable(false);
    setodisable(false);
  }
  function binary1()
  {
    setans(bans);
    setbdisable(true);
    setddisable(false);
    sethdisable(false);
    setodisable(false);
  }
  function hexa1()
  {
    setans(hans);
    sethdisable(true);
    setbdisable(false);
    setodisable(false);
    setddisable(false);
  }
  function octal1()
  {
    setans(oans);
    setodisable(true);
    setbdisable(false);
    sethdisable(false);
    setddisable(false);
  }

  



  return (
    <>
      <div className='calculator'>
        <div className='ans-div'>
          <div className='mainans'>
            <input type='text' value={ans}></input>
          </div>
          <div className='programmer-ans'>
            dec : <input type='text' value={dans} className='program' onClick={decimal1} readOnly></input>
            bin : <input type='text' value={bans} className='program' onClick={binary1} readOnly></input>
            hex : <input type='text' value={hans} className='program' onClick={hexa1} readOnly></input>
            oct : <input type='text' value={oans} className='program' onClick={octal1} readOnly></input>
          </div>
        </div>
        <div className='button-div'>
          <div className='number'>
            <input type='button' value={1} disabled={bdisable + ddisable + odisable} onClick={number}></input>
            <input type='button' value={2} onClick={number} disabled={ddisable + odisable}></input>
            <input type='button' value={3} onClick={number} disabled={ddisable + odisable}></input>
            <input type='button' value={4} onClick={number} disabled={ddisable + odisable}></input>
            <input type='button' value={5} onClick={number} disabled={ddisable + odisable}></input>
            <input type='button' value={6} onClick={number} disabled={ddisable + odisable}></input>
            <input type='button' value={7} onClick={number} disabled={ddisable + odisable}></input>
            <input type='button' value={8} onClick={number} disabled={ddisable}></input>
            <input type='button' value={9} onClick={number} disabled={ddisable}></input>
            <input type='button' value={0} disabled={bdisable + ddisable + odisable} onClick={number}></input>
            <input type='button' value={'.'} onClick={number}></input>
            <input type='button' value={'00'} disabled={bdisable + ddisable} onClick={number}></input>
            <input type='button' value={'C'} onClick={back}></input>
            <input type='button' value={'='} onClick={equal}></input>
            <input type='button' value={'E'} disabled={hdisable} onClick={number}></input>
          </div>
          <div className='alpha'>
            <input type='button' value={'A'} disabled={hdisable} onClick={number}></input>
            <input type='button' value={'B'} disabled={hdisable} onClick={number}></input>
            <input type='button' value={'C'} disabled={hdisable} onClick={number}></input>
            <input type='button' value={'D'} disabled={hdisable} onClick={number}></input>
            <input type='button' value={'F'} disabled={hdisable} onClick={number}></input>
          </div>
          <div className='arithmetic'> 
            <input type='button' value={'AC'} onClick={clear}></input>
            <input type='button' value={'+'} onClick={arithmetic}></input>
            <input type='button' value={'-'} onClick={arithmetic}></input>
            <input type='button' value={'*'} onClick={arithmetic}></input>
            <input type='button' value={'/'} onClick={arithmetic}></input>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
