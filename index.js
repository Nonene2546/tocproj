let volume_icon_status = 1

document.addEventListener('DOMContentLoaded', function(){
  create_transition_block()
})

document.getElementById("volume-icon").addEventListener("click", function(){
  slider = document.getElementById("volume-slider")
  if(volume_icon_status){
    this.classList.remove("fa-volume-up")
    this.classList.remove("fa-volume-down")
    this.classList.add("fa-volume-off")
    slider.style.opacity = 0.3
  }
  else{
    this.classList.remove("fa-volume-off")
    if(slider.value >= 0.5){
      this.classList.add("fa-volume-up")
    }
    else{
      slider.value = Math.max(0.1, slider.value)
      this.classList.add("fa-volume-down")
    }
    slider.style.opacity = 0.7
  }
  volume_icon_status = !volume_icon_status
})

function create_transition_block(){
  const container = document.getElementById('transition-container')
  let height = 30
  let curWidth = window.innerWidth * 1.2
  let sumHeight = 0

  while(sumHeight < window.innerHeight){
    const randomHeight = height
    const randomWidth = curWidth
    curWidth += 50

    // Create the animated block
    const animatedBlock = document.createElement('div')
    animatedBlock.id = 'animatedBlock'
    animatedBlock.classList.add('transition-block')
    animatedBlock.style.height = randomHeight + 'px'
    animatedBlock.style.width = randomWidth + 'px'

    // Add the block to the container
    container.appendChild(animatedBlock);
    sumHeight += randomHeight
  }
}

document.getElementById("volume-slider").addEventListener("input", function(){
  icon = document.getElementById("volume-icon")
  if(this.value >= 0.5){
    icon.classList.remove("fa-volume-down")
    icon.classList.add("fa-volume-up")
  }
  else if(this.value > 0){
    icon.classList.remove("fa-volume-up")
    icon.classList.add("fa-volume-down")
  }
  else{
    icon.classList.remove("fa-volume-up")
    icon.classList.remove("fa-volume-down")
    icon.classList.add("fa-volume-off")
    this.style.opacity = 0.3
    volume_icon_status = 0
    return 0
  }
  this.style.opacity = 0.7
  volume_icon_status = 1
})

document.getElementById("play-button").addEventListener('click', function() {
  const container = document.getElementById('transition-container')

  container.style.animation = 'sliding-left-in 2s forwards'

  setTimeout(function(){
    container.style.animation = 'sliding-left-out 2s forwards'
  }, 3000)

})