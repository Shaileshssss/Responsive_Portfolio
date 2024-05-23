const modal = document.querySelectorAll('.services__modal'),
modalButton = document.querySelectorAll('.services__button'),
modalClose = document.querySelectorAll('.services__modal-close')

let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-modal')
}

modalButton.forEach((modalButton,i) => {
    modalButton.addEventListener('click', () => {
        activeModal(i);
    })
})

modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click',() => {
        modal.forEach((modelRemove) => {
            modelRemove.classList.remove('active-modal')
        })
    })
})

// Swiper Testimonial
const swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop:true,
    spaceBetween: 32,
    grabCursor : true,

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
})

// // Show Scroll up
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 350viewport height, add the 
    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll");
}
window.addEventListener('scroll',scrollUp)

// Dark Light theme