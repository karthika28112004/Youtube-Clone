//For Loop for Multiple Video

let i=0;
let ytArr=[
    //["Img File Name ","Youtube Video Link" , "Video Title"]
    ["LDabs-XHeA4.jpg","LDabs-XHeA4","How To Make a Responsive Coffee Shop ..."],
    ["hO1IitYxz4c.jpg","hO1IitYxz4c","How To Create a Responsive Food ..."],
    ["QQYV_X3A4wI.jpg","QQYV_X3A4wI","How To Make a Full Responsive Traveling ..."],
    ["ujM23hruYGM.jpg","ujM23hruYGM","How To Make a Full Responsive Event ..."],
    ["mNlzrc5A0Ek.jpg","mNlzrc5A0Ek","How to Make a Responsive website ..."],
    ["0wfg2inC-0k.jpg","0wfg2inC-0k","How To Make a The Wedding WebSite Using ..."],
    ["dP2IuOhBPxg.jpg","dP2IuOhBPxg","How To Create Barber Website Using HTML ..."],
    ["LaEmeVZcKF8.jpg","LaEmeVZcKF8","How to Make A Portfolio Website Using HTML ..."],
    ["wbJz8A4erMk.jpg","wbJz8A4erMk","How to Make a Responsive Simple Food ..."]  

]

let len=ytArr.length;
let text="";

for(; i<len; i++){
    text += `
    <div class="video">
        <a href="https://www.youtube.com/watch?v=`+ ytArr[i][1]+`" target="_blank">

          <img src="img/yt/`+ ytArr[i][0] +`"class="thumbnail"alt="">
          <div class="content">
             <img src="img/profile-pic.jpg"class="channel-icon"alt="">
             <div class="info">
                <h4 class="title">`+ ytArr[1][2] +`</h4>
                <p class="channel-name">Coding is so easy</p>
            </div>
        </div>
       </a>
    </div>
    `
}


//ytArr[i][1] is call video Link in ytArr array
//ytArr[i][0] is call video thumbnail in ytArr array
//ytArr[i][1] is call video Title in ytArr array
document.getElementById("ytVideo").innerHTML = text;