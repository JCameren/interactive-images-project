//Grabbing all components I need from DOM
const imgs = document.getElementsByTagName("img")
const btns = document.querySelectorAll(".btn")

const allBtn = document.querySelector(".all-btn")
const flBtn = document.querySelector(".fl-btn")
const tropicalBtn = document.querySelector(".tropical-btn")
const caribbeanBtn = document.querySelector(".caribbean-btn")



//Add filter click event to the dog button by matching comparing id if statement
flBtn.addEventListener("click", () => {
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].id != flBtn.id) {
      imgs[i].style.display = 'none'
    } else {
      imgs[i].style.display = 'block'
    }
  }
})


//Added click event to caribbean filter button
caribbeanBtn.addEventListener("click", () => {
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].id != caribbeanBtn.id) {
      imgs[i].style.display = 'none'
    } else {
      imgs[i].style.display = 'block'
    }
  }
})



//Now this one
tropicalBtn.addEventListener("click", () => {
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].id != tropicalBtn.id) {
      imgs[i].style.display = 'none'
    } else {
      imgs[i].style.display = 'block'
    }
  }
})

//And this one too
allBtn.addEventListener("click", () => {
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].style.display == 'none') {
      imgs[i].style.display = 'block'
    } else {
      imgs[i].style.display = 'block'
    }
  }
})


//active state for the tabs
btns.forEach(btn => {
  btn.addEventListener("click", () => {
    removeStateAll();
    btn.classList.add("active")
  })
})






function removeStateAll() {
  btns.forEach(btn => {
    btn.classList.remove("active")
  })
}
