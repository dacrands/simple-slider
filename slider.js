const parent = document.querySelector('.carousel');
const imgs = document.querySelectorAll('.carousel img');

class Slider {
  constructor(imgsNodeList, parent, showTime) {    
    this.imgs = imgsNodeList;
    this.showTime = showTime;
    this.parent = parent;
    this.index = 0;
    this.endIndex = imgsNodeList.length - 1;
    this.timer;
  }

  start() {
    this.timer = setInterval(() => {
      this.switchImg();
    }, this.showTime);
  }

  stop() {
    this.clearShowImgClass();
    clearInterval(this.timer);
  }

  createBtns() {
    const btnsParent = document.createElement('div');
    btnsParent.classList.add('buttons');
    this.parent.appendChild(btnsParent);
    for (let i = 0; i < this.imgs.length; i++) {
      let newBtn = document.createElement('button');
      newBtn.value = newBtn.innerText = i;       
      newBtn.addEventListener('click', e => {
        this.stop();
        let currImg = this.imgs[e.target.value];
        currImg.classList.add('show');
      });
      btnsParent.appendChild(newBtn);
    }    
  }

  clearShowImgClass() {
    for (let img of this.imgs) {      
      img.classList.remove('show');           
    }
  }

  switchImg() {
    this.clearShowImgClass();
    let currImg = this.imgs[this.index];    
    currImg.classList.add('show');
    this.index++;
    if (this.index > this.endIndex) {
      this.index = 0;
    }
  }
}

const slider = new Slider(imgs, parent, 4000);
slider.createBtns();
slider.start();
