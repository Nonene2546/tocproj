let volume_icon_status = 1

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