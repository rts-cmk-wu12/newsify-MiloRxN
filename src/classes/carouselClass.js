class Carousel {
    constructor(containerSelector, sliderSelector, dotsSelector, nextSelector, redirectUrl) {
        this.container = document.querySelector(containerSelector);
        this.slider = document.querySelector(sliderSelector);
        this.dots = document.querySelector(dotsSelector);
        this.next = document.querySelector(nextSelector);
        this.currentIndex = 0;
        this.sliderWindowWidth = this.slider.offsetWidth;
        this.redirectUrl = redirectUrl;

        this.init();
    }
    
    createDots() {
        Array.from(this.slider.children).forEach(() => {
            this.dots.innerHTML += `<div class="carousel__dots__dot"></div>`;
        });
    }

    updateDots() {
        Array.from(this.dots.children).forEach((dot, index) => {
            dot.classList.toggle('currentDot', this.currentIndex === index);
        });
    }
    
    moveToNextSlide() {
        this.next.disabled = true;
        
        if (this.currentIndex < this.slider.children.length - 1) {
            this.currentIndex += 1;
        } else if (this.redirectUrl) {
            window.location.href = this.redirectUrl;
            return;
        }
        
        const offset = this.currentIndex * this.sliderWindowWidth;
        this.slider.animate([{ transform: `translateX(-${offset}px)` }], { duration: 300, fill: 'both' })
        .onfinish = () => {
            this.next.disabled = false;
        };
        
        this.updateDots();
    }
    
        init() {
            this.createDots();
            this.updateDots();
            this.next.addEventListener('click', () => this.moveToNextSlide());
        }
}

export default Carousel;