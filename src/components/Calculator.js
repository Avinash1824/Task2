import React,{useState} from "react";

export default function Calculator() {
    const [result, setresult] = useState("")
    const clicker=(e)=>{
       setresult(result.concat(e.target.name));
    }
    const handleclear=()=>{
        setresult(result.slice(0,result.length-1));
    }
    const clear=()=>{
      setresult("");
  }
    const Evaluate=()=>{
        try{
            setresult((eval(result).toString()));
        }
        catch{
            setresult("Error");
        }
    }
    const mystyle={
        width:"100%",
        textAlign:"right",
        padding:"15px",
        marginRight:"8px",
        border:"none",
        borderRadius:"10px",
        border:" 0 none transparent",
        backgroundColor:"#00356B",
        color:"white",
        outline:"none"
      }
     
    const weat={
        width:"260px",
        backgroundColor:"#03032e",
        borderRadius:"20px"
      }
      const work1={
        borderRadius:"50%",
        fontSize:"20px",
        border:"none",
        backgroundColor:"#03032e",
        margin:"10px",
        padding:"5px 15px",
        color:"#004F98"
      }
      const work={
        borderRadius:"50%",
        fontSize:"20px",
        border:"none",
        backgroundColor:"#03032e",
        margin:"10px",
        padding:"5px 15px",
        color:"white"
      }
      const newstyle={
        backgroundColor:"#00356B",
        borderTopLeftRadius:"20px",
        borderTopRightRadius:"20px"
      }
  return (
    <>
        
      <div className="p-5" >
      <center >
        <h2>My Calculator</h2>
      <div className="my-5" style={weat}>
      
      <div style={newstyle} className="container p-3">
      <input type="text"  className="container " style={mystyle}  value={result} />
      <br/>
          
      </div>
      <button style={work1} name="C" onClick={clear} type="button" className="span-two">
          C
        </button>
        <button style={work1} name="**" onClick={clicker} type="button" className="">
          ^
        </button>
        <button style={work1} name="cl" onClick={handleclear} type="button" className="">
          cl
        </button>
        <button style={work1} name="/" onClick={clicker}  type="button" className="">
          &#247;
        </button>
            <br></br>
        <button style={work} name="7" onClick={clicker} type="button" className="">
          7
        </button>
        <button style={work} name="8" onClick={clicker} type="button" className="">
          8
        </button>
        <button style={work} name="9" onClick={clicker} type="button" className="">
          9
        </button>
        <button style={work1} name="*" onClick={clicker}  type="button" className="">
          &#215;
        </button>
        <br />
        <button style={work} name="4" onClick={clicker} type="button" className="">
          4
        </button>
        <button style={work} name="5" onClick={clicker} type="button" className="">
          5
        </button>
        <button style={work} name="6" onClick={clicker} type="button" className="">
          6
        </button>
        <button style={work1} name='+' onClick={clicker} type="button" className="">
          +
        </button>
        <br />
        <button style={work} name="1" onClick={clicker} type="button" className="">
          1
        </button>
        <button style={work} name="2" onClick={clicker} type="button" className="">
          2
        </button>
        <button style={work} name="3" onClick={clicker} type="button" className="">
          3
        </button>
        <button style={work1} name="-" onClick={clicker} type="button" className="">
          -
        </button>
        <br />
        <button style={work} name="00" onClick={clicker} type="button" className="">
          00
        </button>
        <button style={work} name="0" onClick={clicker} type="button" className="">
          0 
        </button>
        <button style={work} name="." onClick={clicker}  type="button" className="">
          .
        </button>
        <button style={work1} name="=" onClick={Evaluate} type="button" className="">
          =
        </button>
      </div>
        </center>
      </div>
    </>
  );
}
