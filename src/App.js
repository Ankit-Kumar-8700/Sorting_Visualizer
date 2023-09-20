import { useEffect, useState } from 'react';
import './App.css';
import './sidebar.css';
import { Bubble, Heap, Insertion, Merge, Quick, Selection } from './scripts/sort';
import { disableButtons, generateArray, set_array_size, vis_speed } from './scripts/helper';

function App() {


  let [arrSize,setArrSize]=useState(80);
  let [speed,setSpeed]=useState(4);
  let [worstTime,setWorstTime]=useState("-");
  let [bestTime,setBestTime]=useState("-");
  let [avgTime,setAvgTime]=useState("-");
  let [worstSpace,setWorstSpace]=useState("-");
  let [sortName,setSortName]=useState("");


  const handleGenerateArray=()=>{
    generateArray(document.getElementById("array_container"));
  }

  const handleSpeedChange=(e)=>{
    setSpeed(e.target.value);
    vis_speed(e.target.value);
  }

  const handleSizeChange=(e)=>{
    setArrSize(e.target.value);
    set_array_size(e.target.value);
    generateArray(document.getElementById("array_container"));
  }

  useEffect(()=>{
    generateArray(document.getElementById("array_container"));
  },[]);

  const handleSort=(e)=>{

    disableButtons();

    let values=e.target.value.split(',');
    setBestTime("Ω("+values[0]+")");
    setAvgTime("θ("+values[1]+")");
    setWorstTime("O("+values[2]+")");
    setWorstSpace("O("+values[3]+")");
    setSortName(values[4]+" Sort");

    switch(values[4]){
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
        default:console.log("No sorting algorithm selected!");
                        break;
    }

  }

  return (
    <div className="App">


<div className="header"></div>
  <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
  <label for="openSidebarMenu" className="sidebarIconToggle">
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>
  <p className="nav-heading"><h1>Sorting visualizer</h1></p>
  <div id="sidebarMenu">
    <ul className="sidebarMenuInner">
      <li><div className="array-inputs">
                  <div>
                    <p>Size of the array:</p>
                    <input className='en_dis' id="a_size" type="range" min={20} max={150} step={1} onChange={handleSizeChange} value={arrSize} />
                    </div>
                    <div>
                    <p>Speed of the algorithm:</p>
                    <input className='en_dis' id="a_speed" type="range" min={1} max={5} step={1} onChange={handleSpeedChange} value={speed} />
                    </div>
                    <button className='en_dis' id="a_generate" onClick={handleGenerateArray} >Generate New Array!</button>
                </div></li>
      <li><div className="algos">
                    <button className='en_dis sortBtn' value="n,n^2,n^2,1,Bubble" onClick={handleSort}>Bubble</button>
                    <button className='en_dis sortBtn' value="n^2,n^2,n^2,1,Selection" onClick={handleSort} >Selection</button>
                    <button className='en_dis sortBtn' value="n,n^2,n^2,1,Insertion" onClick={handleSort} >Insertion</button>
                    <button className='en_dis sortBtn' value="n log(n),n log(n),n log(n),n,Merge" onClick={handleSort} >Merge</button>
                    <button className='en_dis sortBtn' value="n log(n),n log(n),n^2,n,Quick" onClick={handleSort} >Quick</button>
                    <button className='en_dis sortBtn' value="n log(n),n log(n),n log(n),1,Heap" onClick={handleSort} >Heap</button>
                </div></li>
    </ul>
  </div>

    <div className="sortNameHead">{sortName}</div>

    <section>
        <div id="Info_Cont1">
            <h3>TIME COMPLEXITY</h3>
            <div className="Complexity_Containers" id="Time_Complexity_Types_Container">
                <div className="Pair_Definitions">
                    <p className="Sub_Heading">Worst case:</p>
                    <p id="Time_Worst">{worstTime}</p>
                </div>
                <div className="Pair_Definitions">
                    <p className="Sub_Heading">Average case:</p>
                    <p id="Time_Average">{avgTime}</p>
                </div>
                <div className="Pair_Definitions">
                    <p className="Sub_Heading">Best case:</p>
                    <p id="Time_Best">{bestTime}</p>
                </div>
            </div>
        </div>

        <div id="array_container" />

        <div id="Info_Cont2">
            <h3>SPACE COMPLEXITY</h3>
            <div className="Complexity_Containers" id="Space_Complexity_Types_Container">
                <div className="Pair_Definitions">
                    <p className="Sub_Heading">Worst case:</p>
                    <p id="Space_Worst">{worstSpace}</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default App;
