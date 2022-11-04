import React, { useState } from "react";

function ToDoListExample() {
    const [addinput, setAddinput] = useState('');
    const [validate, setValidate] = useState(false);
    const[main,setMain]=useState(false)
    const[linebreak,setLinebreak]=useState(false);
    const[linebreakfirst,setLinebreakfirst]=useState(false);
    const[linebreaksecond,setLinebreaksecond]=useState(false);
    const[linebreakthird,setLinebreakthird]=useState(false);
    const[linebreakfourth,setLinebreakfourth]=useState(false);
    const[linebreakfifth,setLinebreakfifth]=useState(false);

    const newElement = () => {
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            setValidate(true)
        } else {
            document.getElementById("myUL").appendChild(li);
            setAddinput('')
        }
        var dive=document.createElement("DIV")
        dive.className='todo-action';
        var spansecond=document.createElement('SPAN')
        var span = document.createElement("SPAN")
        spansecond.className='btn p-1 fa fa-check'
        
        span.className = "btn text-danger p-1 fa fa-trash-o";
        dive.appendChild(spansecond);
        dive.appendChild(span);
        li.appendChild(dive);
        li.className=(`${main?'active':''}`)
    }

  const deletroww=()=>{
    var close = document.getElementsByClassName("todo-action");
    var i;
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
 }
}
  }

    return (
        <div className="row mb-3">
            <div className="col-12">
                <div className="card my-todo">
                    <div className="card-header border-bottom-0 todo-wrapper p-4" id='myDIV'>
                        <div className="input-group mb-2">
                            <input type="text" id='myInput' className="form-control" value={addinput} onChange={(e) => { setAddinput(e.target.value) }} placeholder="What you need to do, sir?" />
                            <button type="button" className="btn btn-primary btn-todo-add" onClick={() => { newElement() }}>Add</button>
                        </div>
                        {
                            validate && addinput === "" ? <span className="todo-error text-danger small ms-3">Input can't be empty!</span> : null
                        }

                    </div>
                    <div className="card-body p-4">
                        <ul className="list-unstyled mb-0 todo-list" id="myUL">
                            <li className={`${linebreak?'active':''}`}>
                                <span>Call For Marketing Agent</span>
                                <div className="todo-action">
                                    <i className="todocl btn done p-1 icofont-ui-check" onClick={()=>{setLinebreak(!linebreak)}}></i>
                                    <i className="btn text-danger p-1 icofont-ui-delete" onClick={()=>{
                                        var close = document.getElementsByClassName("todo-action");
                                            var i;
                                            for (i = 0; i < close.length; i++) {
                                            close[i].onclick = function() {
                                            var div = this.parentElement;
                                            div.style.display = "none";
                                         }
                                     }
                                    }}></i>
                                </div>
                            </li>
                            <li className={`${linebreakfirst?'':'active'}`}>
                                <span>Movie Tickit Book</span>
                                <div className="todo-action">
                                    <i className="todocl btn done p-1 icofont-ui-check" onClick={()=>{setLinebreakfirst(!linebreakfirst)}}></i>
                                    <i className="btn text-danger close p-1 icofont-ui-delete" onClick={()=>{
                                        var close = document.getElementsByClassName("todo-action");
                                            var i;
                                            for (i = 0; i < close.length; i++) {
                                            close[i].onclick = function() {
                                            var div = this.parentElement;
                                            div.style.display = "none";
                                         }
                                     }
                                    }}></i>
                                </div>
                            </li>
                            <li className={`${linebreaksecond?'active':''}`}>
                                <span>Car Service for Sunday</span>
                                <div className="todo-action">
                                    <i className="todocl btn done p-1 icofont-ui-check" onClick={()=>{setLinebreaksecond(!linebreaksecond)}}></i>
                                    <i className="btn text-danger close p-1 icofont-ui-delete" onClick={()=>{
                                        var close = document.getElementsByClassName("todo-action");
                                            var i;
                                            for (i = 0; i < close.length; i++) {
                                            close[i].onclick = function() {
                                            var div = this.parentElement;
                                            div.style.display = "none";
                                         }
                                     }
                                    }}></i>
                                </div>
                            </li>
                            <li className={`${linebreakthird?'active':''}`}>
                                <span>Internet Bill Pay</span>
                                <div className="todo-action">
                                    <i className="todocl btn done p-1 icofont-ui-check" onClick={()=>{setLinebreakthird(!linebreakthird)}}></i>
                                    <i className="btn text-danger close p-1 icofont-ui-delete" onClick={()=>{
                                        var close = document.getElementsByClassName("todo-action");
                                            var i;
                                            for (i = 0; i < close.length; i++) {
                                            close[i].onclick = function() {
                                            var div = this.parentElement;
                                            div.style.display = "none";
                                         }
                                     }
                                    }}></i>
                                </div>
                            </li>
                            <li className={`${linebreakfourth?'':'active'}`}>
                                <span>Client Mail Replay</span>
                                <div className="todo-action">
                                    <i className="todocl btn done p-1 icofont-ui-check" onClick={()=>{setLinebreakfourth(!linebreakfourth)}}></i>
                                    <i className="btn text-danger close p-1 icofont-ui-delete" onClick={()=>{
                                        var close = document.getElementsByClassName("todo-action");
                                            var i;
                                            for (i = 0; i < close.length; i++) {
                                            close[i].onclick = function() {
                                            var div = this.parentElement;
                                            div.style.display = "none";
                                         }
                                     }
                                    }}></i>
                                </div>
                            </li>
                            <li className={`${linebreakfifth?'':'active'}`}>
                                <span>Project Work Feedback</span>
                                <div className="todo-action">
                                    <i className="todocl btn done p-1 icofont-ui-check" onClick={()=>{setLinebreakfifth(!linebreakfifth)}}></i>
                                    <i className="btn text-danger close p-1 icofont-ui-delete" onClick={()=>{
                                        var close = document.getElementsByClassName("todo-action");
                                            var i;
                                            for (i = 0; i < close.length; i++) {
                                            close[i].onclick = function() {
                                            var div = this.parentElement;
                                            div.style.display = "none";
                                         }
                                     }
                                    }}></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoListExample;
