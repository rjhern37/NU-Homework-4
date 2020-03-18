var totalTime = 5 * 60 * 1000 - 50000
var penaltyTime = 30 * 1000
var tickTime = 1000

function formatTime(ms) { 
  
	var minutes = Math.floor(ms / 60000)
  var seconds = ms % 60000
  seconds /= 1000
  if(seconds < 10) {
  	seconds = '0' + seconds
  }
  
  var timerEl = document.getElementById('timer')
  timerEl.textContent = `${ minutes }:${ seconds }`

}

function tick() {
	totalTime -= tickTime
	formatTime(totalTime)
  
}

var myInterval = setInterval(tick, tickTime)

var wrongEl = document.getElementById('wrong')

wrongEl.addEventListener('click', function() {
	totalTime -= penaltyTime
  formatTime(totalTime)
})