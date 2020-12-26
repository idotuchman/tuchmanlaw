window.addEventListener('mousemove', function(e){
  let x
  // let y;

  let patent = document.getElementById("patent");
  let patentBg = document.getElementById("patent-bg");

  // let patentVertCenter = window.innerHeight/2 - patent.clientHeight/2;
  // console.log(patent.clientHeight, patentVertCenter);

  x = (e.x - (window.innerWidth/2)) / window.innerWidth;
  // y =( e.y - (window.innerHeight/2)) / window.innerHeight;

  patent.style.right = x*30+'px';
  // patent.style.top = patentVertCenter/2 - y*30 +'px';
  patentBg.style.left = x*30+'px';
  // patentBg.style.top = (window.innerHeight/8) + y*30 +'px';
});




// document.getElementById('about').addEventListener(
//     'scroll',
//     function()
//     {
//       console.log('hello there');
//         var scrollTop = document.getElementById('about').scrollTop;
//         var scrollHeight = document.getElementById('about').scrollHeight; // added
//         var offsetHeight = document.getElementById('about').offsetHeight;
//         // var clientHeight = document.getElementById('box').clientHeight;
//         var contentHeight = scrollHeight - offsetHeight; // added
//         if (contentHeight <= scrollTop) // modified
//         {
//             // Now this is called when scroll end!
//             console.log('hello there');
//         }
//     },
//     false
// )