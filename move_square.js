<!DOCTYPE html>
<html>
<body>
<head>
	<style>
 
  #square {
    width: 100px;
    height: 100px;
    background-color: #333;
    position: absolute;
    left: 0px;
    top: 0px;
    transition-duration: 3s;
    transition: left 1s ease-in-out;
  }
   </style>
</head>

<div id="square"></div>

<script>

const square = document.querySelector('#square');

function moveRight() {
  square.style.left = square.offsetLeft + 100 + 'px';
}


function start(url) {
setTimeout(() => {
  moveRight();
    
  const fetchPromise = fetch(url);

  fetchPromise.then(response => {
    return response.json();
  }).then(resp => {
   	if(!!resp) {
    	square.style.backgroundColor = 'green';
    } else {
    	square.style.backgroundColor = 'blue';
    }
  })
  .catch(function(err){
  	 square.style.color = 'red';
  });

   }, 1000);
}

start('https://www.capslock.global/slowpoke');

</script>

</body>
</html>
