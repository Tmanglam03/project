// const hour = document.getElementById('hr');
// const minute = document.getElementById('min');
// const second = document.getElementById('sec');

// setInterval(()=>{
//     let date = new Date();
//     let hr = date.getHours*30;
//     let min = date.getMinutes*6;
//     let sec = date.getSeconds*6;

//     hour.style.transform =`rotateZ(${(hr)+(min/12)}deg)`;
//     minute.style.transform =`rotateZ(${min}deg)`;
//     second.style.transform =`rotateZ(${sec}deg)`;

// })

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hr.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
}, 1000);


nam = document.getElementById('click');

