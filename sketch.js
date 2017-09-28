var video, canvas, context, imageData, detector;
var camW, camH;

// function setup(){
// 	vid = createVideo('media/test.mp4');
// 	vid.loop();
// } 

// function draw() {
//   ellipse(50, 50, 80, 80);
// }

var capture;

function setup() {
  //createCanvas(390, 240);

  //capture.hide();
}

function onLoad(){
// p5
	camW = 320;
	camH = 240;
  	capture = createCapture(VIDEO);
  	capture.size(camW, camH);
 //  - - -

      video = document.getElementById("video");
      canvas = document.getElementById("canvas");
	  context = canvas.getContext("2d");
    
      canvas.width = parseInt(canvas.style.width);
      canvas.height = parseInt(canvas.style.height);
      
      // navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
      // if (navigator.getUserMedia){
        
      //   function successCallback(stream){
      //     if (window.webkitURL) {
      //       video.src = window.webkitURL.createObjectURL(stream);
      //     } else if (video.mozSrcObject !== undefined) {
      //       video.mozSrcObject = stream;
      //     } else {
      //       video.src = stream;
      //     }
      //   }
        
      //   function errorCallback(error){
      //   }
        
      //   navigator.getUserMedia({video: true}, successCallback, errorCallback);
        
         detector = new AR.Detector();

      //   requestAnimationFrame(tick);
      // }
    }
    
    function tick(){
      requestAnimationFrame(tick);
      
      //if (video.readyState === video.HAVE_ENOUGH_DATA){
        snapshot();

        var markers = detector.detect(imageData);
        //drawCorners(markers);
        //drawId(markers);
      //}
    }

    function snapshot(){
      context.drawImage(capture, 0, 0, camW, camH);
      imageData = context.getImageData(0, 0, camW, camH);
    }
          
    // function drawCorners(markers){
    //   var corners, corner, i, j;
    
    //   //context.lineWidth = 3;

    //   for (i = 0; i !== markers.length; ++ i){
    //     corners = markers[i].corners;
        
    //     context.strokeStyle = "red";
    //     context.beginPath();
        
    //     for (j = 0; j !== corners.length; ++ j){
    //       corner = corners[j];
    //       context.moveTo(corner.x, corner.y);
    //       corner = corners[(j + 1) % corners.length];
    //       context.lineTo(corner.x, corner.y);
    //     }

    //     context.stroke();
    //     context.closePath();
        
    //     context.strokeStyle = "green";
    //     context.strokeRect(corners[0].x - 2, corners[0].y - 2, 4, 4);
    //   }
    // }

    // function drawId(markers){
    //   var corners, corner, x, y, i, j;
      
    //   context.strokeStyle = "blue";
    //   context.lineWidth = 1;
      
    //   for (i = 0; i !== markers.length; ++ i){
    //     corners = markers[i].corners;
        
    //     x = Infinity;
    //     y = Infinity;
        
    //     for (j = 0; j !== corners.length; ++ j){
    //       corner = corners[j];
          
    //       x = Math.min(x, corner.x);
    //       y = Math.min(y, corner.y);
    //     }

    //     context.strokeText(markers[i].id, x, y)
    //   }
    // }

    window.onload = onLoad;