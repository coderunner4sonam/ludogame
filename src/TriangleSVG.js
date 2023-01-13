import React, { useState,useEffect } from "react";
import moveSound from './assets/move.wav'
// import Dice from './Dice';

const gotiPoints = [
  [
    ["35.5%", "10%"], ["44.5%", "10%"], ["40%", "14%"], ["40%", "19%"]
  ],
  [
    ["62.5%", "20%"], ["67.5%", "26%"], ["62%", "25%"], ["57%", "27%"]
  ],
  [
    ["67.5%", "46%"], ["62%", "52.5%"], ["61.5%", "47%"], ["56%", "45%"]
  ],
  [
    ["35.5%", "64%"], ["43.5%", "64%"], ["39.5%", "60%"], ["39.7%", "55%"]
  ],
  [
    ["11.5%", "46%"], ["16.5%", "53%"], ["17.5%", "47%"], ["23%", "45%"]
  ],
  [
    ["17%", "20%"], ["12.5%", "26.5%"], ["18%", "25%"], ["23%", "27%"]
  ]
]

const points = [
  // 1st row
  "250,250 272,233 252,205 232,222",
  "232,222 252,205 232,177 210,195",
  "210,195 232,177 214,152 192,169",
  "192,169 214,152 195,125 173,140",
  "173,140 195,125 175,95 152,112",
  "152,112 175,95 153,64 130,80",

  // 2nd row
  "153,64 175,50 195,80 175,95",
  "175,95 195,80 216,110 195,125",
  "195,125 216,110 234,137 214,152",
  "214,152 234,137 252,162 232,177",
  "232,177 252,162 273,190 252,205",
  "252,205 273,190 295,218 272,233",

  //3rd row
  "175,50 195,35 218,65 195,80",
  "195,80 218,65 245,90 216,110",
  "216,110 245,90 258,120 234,137",
  "234,137 258,120 278,144 252,162",
  "252,162 278,144 298,173 273,190",
  "273,190 298,173 318,200 295,218",

  //4th row
  "320,200 345,217 363,190 338,173",
  "338,173 363,190 380,165 355,148",
  "355,148 380,165 397,140 370,120",
  "370,120 397,140 418,110 390,90",
  "390,90 418,110 438,82 415,65",
  "415,65 438,82 458,52 435,35",

  //5th row
  "458,52 477,64 457,95 438,82",
  "438,82 457,95 438,124 418,110",
  "418,110 438,124 417,155 397,140",
  "397,140 417,155 400,180 380,165",
  "380,165 400,180 383,205 363,190",
  "363,190 383,205 366,232 345,217",

  //6th row
  "477,64 499,81 480,110 457,95",
  "457,95 480,110 461,139 438,124",
  "438,124 461,139 442,170 417,155",
  "417,155 442,170 425,197 400,180",
  "400,180 425,197 407,222 383,205",
  "383,205 407,222 392,251 366,232",

  //7th row
  "392,251 432,251 432,277.67 392,277.67",
  "432,251 472,251 472,277.67 432,277.67",
  "472,251 512,251 512,277.67 472,277.67",
  "512,251 552,251 552,277.67 512,277.67",
  "552,251 592,251 592,277.67 552,277.67",
  "592,251 630,251 630,277.67 592,277.67",

  //8th row
  "592,277.67 630,277.67 630,304.34 592,304.34",
  "552,277.67 592,277.67 592,304.34 552,304.34",
  "512,277.67 552,277.67 552,304.34 512,304.34",
  "472,277.67 512,277.67 512,304.34 472,304.34",
  "432,277.67 472,277.67 472,304.34 432,304.34",
  "392,277.67 432,277.67 432,304.34 392,304.34",

  //9th row
  "592,304.34 630,304.34 630,330.01 592,330.01",
  "552,304.34 592,304.34 592,330.01 552,330.01",
  "512,304.34 552,304.34 552,330.01 512,330.01",
  "472,304.34 512,304.34 512,330.01 472,330.01",
  "432,304.34 472,304.34 472,330.01 432,330.01",
  "392,304.34 432,304.34 432,330.01 392,330.01",

  //10th row
  "392,330 368,345 387,375 410,360",
  "410,360 387,375 406,405 429,390",
  "429,390 406,405 425,435 448,420",
  "448,420 425,435 445,465 470,448",
  "470,448 445,465 462,490 482,473",
  "482,473 462,490 480,517 500,498",

  //11th row
  "480,517 460,538 438,507 462,490",
  "462,490 438,507 420,480 445,465",
  "445,465 420,480 402,450 425,435",
  "425,435 402,450 383,420 406,405",
  "406,405 383,420 365,390 387,375",
  "387,375 365,390 347,362 368,345",

  //12th row
  "460,538 435,559 413,525 438,507",
  "438,507 413,525 392,497 420,480",
  "420,480 392,497 373,470 402,450",
  "402,450 373,470 352,440 383,420",
  "383,420 352,440 330,413 365,390",
  "365,390 330,413 320,380 347,362",

  //13th row
  "320,380 297,365 280,389 310,410",
  "310,410 280,389 260,418 290,440",
  "290,440 260,418 240,448 270,470",
  "270,470 240,448 220,478 250,500",
  "250,500 220,478 200,508 230,530",
  "230,530 200,507 175,540 195,560",

  //14th row
  "175,540 155,523 177,490 200,507",
  "200,507 177,490 197,463 220,478",
  "220,478 197,463 217,433 240,448",
  "240,448 217,433 237,403 260,418",
  "260,418 237,403 257,376 280,389",
  "280,389 257,376 277,348 297,365",

  //15th row
  "155,523 130,500 150,470 177,490",
  "177,490 150,470 170,440 197,463",
  "197,463 170,440 190,410 217,433",
  "217,433 190,410 210,380 237,403",
  "237,403 210,380 230,355 257,376",
  "257,376 230,355 250,330 277,348",

  //16th row
  "250,330 210,330 210,304.67 250,304.67",
  "210,330 170,330 170,304.67 210,304.67",
  "170,330 130,330 130,304.67 170,304.67",
  "130,330 90,330 90,304.67 130,304.67",
  "90,330 50,330 50,304.67 90,304.67",
  "50,330 10,330 10,304.67 50,304.67",

  //17th row
  "10,304.67 50,304.67 50,278.67 10,278.67",
  "50,304.67 90,304.67 90,278.67 50,278.67",
  "90,304.67 130,304.67 130,278.67 90,278.67",
  "130,304.67 170,304.67 170,278.67 130,278.67",
  "170,304.67 210,304.67 210,278.67 170,278.67",
  "250,304.67 210,304.67 210,278.67 250,278.67",

  //18th row
  "10,278.67 50,278.67 50,250 10,250",
  "50,278.67 90,278.67 90,250 50,250",
  "90,278.67 130,278.67 130,250 90,250",
  "130,278.67 170,278.67 170,250 130,250",
  "170,278.67 210,278.67 210,250 170,250",
  "250,278.67 210,278.67 210,250 250,250",
  
];

const avoidMoveCopy = [6, 24, 42, 60, 78, 96];
const delMove = [12, 30, 48, 66, 84, 102];
let currentPlayerCount = [0,0,0,0,0,0];
const ocupied = new Array(108).fill(false);
let eatFlag = false;
let retainFlag = false;


const TriangleSVG = () => {
  const [color, setColor] = useState("purple");
  const [changeId, setChangeId] = useState({});
  const [avoidMove, setAvoidMove] = useState();
  const [dice, setDice] = useState(4);
  const [currentGoti, setCurrentGoti] = useState();
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [flag, setFlag] = useState(false);
  const [delGotiFlag, setDelGotiFlag] = useState(false);

  let k = null;
  let kk = null;

  function playSound(){
    new Audio(moveSound).play();
  }

  //checking index based on Color
  function checkIndexColor(colorStr){
    switch (colorStr) {
      case "red":
        return 0;
      case "green":
        return 1;
      case "orange":
        return 2;
      case "blue":
        return 3;
      case "yellow":
        return 4;
      default :
        return 5;
    }
  }

  function handleClick(){
    // k = setInterval(() => {
    //     setColor((pre) =>
    //     pre == "black" ? (pre = "purple") : (pre = "black")
    //     );
    // }, 100);
    if(currentPlayerCount[currentPlayer-1]==4) return;
    currentPlayerCount[currentPlayer-1]++;
    intialDiceThrow();

    //testing
    // let ok =false;
    // for(let i=0; i<currentPlayerCount.length; i++){
    //   if(currentPlayerCount[i]!=1) {
    //     ok =true;
    //     break;
    //   }
    // }
    //moveClick(currentPlayer*18-5);
  };

  function alreadyOcupied(curGotiindex){

  }

  function checkCurrentColor(){
    switch (currentPlayer) {
      case 1:
        return "red";
      case 2:
        return "green";
      case 3:
        return "orange";
      case 4:
        return "blue";
      case 5:
        return "yellow";
      default :
        return "purple"
    }
  }

  function numberWiseColor(numberColor) {
    switch (numberColor) {
      case 0:
        return "red";
      case 1:
        return "green";
      case 2:
        return "orange";
      case 3:
        return "blue";
      case 4:
        return "yellow";
      default:
        return "purple";
    }
  }

  function intialDiceThrow() {
    let idx = currentPlayer * 18 - 5;
    ocupied[idx] = true;
    setChangeId({ ...changeId, [idx]: checkCurrentColor() });
    setCurrentPlayer(currentPlayer == 6 ? 1 : currentPlayer + 1);
  }

  function moveClick(e){
    let id = parseInt(e.target.id);
    //let id = Number(i);
    if (!changeId.hasOwnProperty(id) || changeId[id] !== checkCurrentColor()) return;
    
    
    if(delMove.includes(id + dice)) {
      setDelGotiFlag(true);
    }
    // else {
    //   setDelGotiFlag(false);
    // }
    setCurrentGoti(id);
    setFlag(true);
    //checking eating moves
    if(changeId.hasOwnProperty(id+dice)){
      if(changeId[id+dice]!==checkCurrentColor()){
        eatFlag = true;
        currentPlayerCount[checkIndexColor(changeId[id + dice])]--;
      }else{
        retainFlag = true;
      }
    }else{
      eatFlag = false;
      retainFlag = false;
    }

    //removing last entry checkpoint to enter for the current player
    let temp = [...avoidMoveCopy];
    temp.splice(currentPlayer - 1, 1);
    setAvoidMove(temp);

    setCurrentPlayer(currentPlayer == 6 ? 1 : currentPlayer + 1);

  }

  useEffect(() => {
    if (flag) {
      let currentColor = changeId[currentGoti];
      // for check of last move inside the last row 
      let ok =false;
      let okk =false;
      if(changeId.hasOwnProperty(avoidMove.includes(currentGoti) ? currentGoti+6 : currentGoti===107 ? 0 : currentGoti+1)){
        ok =true;
        if(avoidMove.includes(currentGoti) && changeId.hasOwnProperty(currentGoti+6)) okk =true;
        if((eatFlag && dice==1) || retainFlag){
          ok =false;
        }
      }
      //for checking the cell is already ocupied or not
      //alreadyOcupied(currentGoti);
      kk = setInterval(() => {
        playSound();
        setChangeId(
          (pre) => (
            delete pre[currentGoti],
            {
              ...pre,
              [avoidMove.includes(ok && okk ? currentGoti : ok ? currentGoti+1: currentGoti)
                ?
                  currentGoti + (ok ? 7 : 6)
                : 
                  currentGoti===106 && ok ? 0 :currentGoti ===107 && ok ? 1 : currentGoti==107 ? 0 :
                    delGotiFlag && delMove.includes(currentGoti+1) 
                    ?
                    currentColor
                    :
                    currentGoti + (ok ? 2 : 1)
              ]
              : 
              delGotiFlag && delMove.includes(currentGoti+1) 
                ? pre[currentColor]+1
                : currentColor,
            }
          )
        );
        
        // incrementing for move
        setCurrentGoti((pre) =>
          avoidMove.includes(ok&&okk?pre:ok?pre+1:pre) ? pre + (ok?7:6) : pre === 107 ? pre = (ok?1:0) : pre + (ok?2:1)
        );
        
        setDice((pre) => ok ? pre-2 : pre-1);
      }, 300);

      if (dice === 0) {
        setFlag(false);
        setDice(pre => pre = Math.floor((Math.random()*6)));
        
        //testing purpuse
        //handleClick();
        // let arr = [];
        // for(let key in changeId){
        //   if(changeId[key]===checkCurrentColor()){
        //     arr.push(key);
        //   }
        // }
        // let key = Math.floor(Math.random()*arr.length);
        // moveClick(key);
      }

    } else {
      clearInterval(kk);
    }
    return () => clearInterval(kk);
  }, [dice, changeId, flag, currentPlayer, delGotiFlag]);
  
  console.log(changeId, avoidMove, delMove, currentGoti,currentPlayerCount);
  console.log("cp", currentPlayer);
  console.log("goti", delGotiFlag);
  console.log("dice", dice);
  console.log(gotiPoints[0][0][0], gotiPoints[0][0][1]);
  return (
    <div>
      <svg width="800" height="800">
        <style>
          {`
          .triangle {
            fill: none;
            stroke: black;
            stroke-width: 2;
          }
          
          .purple {
            fill: ${color};
          }
          .red {
            fill: red;
          }
          .green {
            fill: green;
          }
          .blue {
            fill: blue;
          }
          .yellow {
            fill: yellow;
          }
          .orange {
            fill: orange;
          }
          .white {
            fill: white;
          }
          .cell {
            cursor:pointer;
          }
        `}
        </style>

        {/* rows and columns for move */}
        {[...Array(1)].map((_, row) =>
          [...Array(108)].map((_, col) => (
            <polygon
              key={col}
              points={points[col]}
              className="cell"
              id={col}
              onClick={moveClick}
              style={{
                stroke: "#000",
                strokeWidth: 1,
                fill: changeId.hasOwnProperty(col) ? changeId[col] : col===((Math.floor((col+1)/18)+1)*18)-5  || (col > (Math.floor((col+1)/18)*18)+6 && col < (Math.floor((col+1)/18)*18)+12) ? "light"+numberWiseColor(Math.floor((col+1)/18)): "white",
              }}
            />
          ))
        )}

        {/* gotis for move */}

        {/* red */}
        <polygon className="triangle red" points="195,35 435,35 320,200" />
        <polygon className="triangle white" points="250,60 390,60, 320,200" />
        <polygon className="triangle" points="320,200 390,250 500,80 435,35" />
        <polygon
          className="triangle red"
          points="250,250 275,257 315,230 320,200"
        />

        {/* green */}
        <polygon className="triangle green" points="390,250 630,250 500,80" />
        <polygon className="triangle white" points="500,120 590,230, 390,250" />
        <polygon className="triangle" points="10,250 10,330 250,330 250,250" />
        <polygon
          className="triangle green"
          points="320,200 315,230 365,260 390,250"
        />

        {/* orange */}
        <polygon className="triangle orange" points="500,500 630,330 390,330" />
        <polygon className="triangle white" points="500,460 585,350, 390,330" />
        <polygon
          className="triangle"
          points="435,560 500,500 390,330 320,380"
        />
        <polygon
          className="triangle orange"
          points="390,250 365,260 365,315 390,330"
        />

        {/* blue */}
        <polygon className="triangle blue" points="195,560 435,560 320,380" />
        <polygon className="triangle white" points="245,535 385,535, 320,380" />
        <polygon
          className="triangle"
          points="130,500 195,560 320,380 250,330"
        />
        <polygon
          className="triangle blue"
          points="390,330 365,315 320,350 320,380"
        />

        {/* Yellow */}
        <polygon className="triangle yellow" points="10,330 130,500 250,330" />
        <polygon className="triangle white" points="50,350 130,460, 250,330" />
        <polygon
          className="triangle"
          points="390,250 390,330 630,330 630,250"
        />
        <polygon
          className="triangle yellow"
          points="320,380 320,350 275,320 250,330"
        />

        {/* purple */}
        <polygon
          className="triangle purple"
          points="10,250 250,250, 130,80"
          onClick={handleClick}
        />
        <polygon className="triangle white" points="60,230 250,250, 130,125" />
        <polygon className="triangle" points="250,250 320,200 195,35 130,80" />
        <polygon
          className="triangle purple"
          points="250,330 273,320 273,257 250,250"
        />
        {/* <circle className="purple" cx="17%" cy="20%" r="15" /> */}

        {/* individual gotis */}
        {[...Array(6)].map((_, row) =>
          [...Array(4)].map((_, col) => (
            <circle
              key={""+row+"-"+col}
              cx={gotiPoints[row][col][0]}
              cy={gotiPoints[row][col][1]}
              r = "15"
              style={{
                stroke: "#000",
                strokeWidth: 1,
                fill: numberWiseColor(row),
              }}
            />
          ))
        )}


      </svg>
      {/* <Dice /> */}
      <button onClick={handleClick}>start</button>
    </div>
  );
};

export default TriangleSVG;
