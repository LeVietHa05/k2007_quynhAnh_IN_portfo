let activeLiHtml = [
    `
          <img src="/images/things/quote-left.png" alt="">
          home
          <img src="/images/things/quote-right.png" alt="">
        `,
    `
          <img src="/images/things/quote-left.png" alt="">
          trace the threads
          <img src="/images/things/quote-right.png" alt="">
        `,
    `
          <img src="/images/things/quote-left.png" alt="">
          Gallery
          <img src="/images/things/quote-right.png" alt="">
        `,
    `
          <img src="/images/things/quote-left.png" alt="">
          <img src="/images/things/Mail.png" alt="">
          <img src="/images/things/quote-right.png" alt="">
        `
]
let normalLiHtml = [
    `<a href="/" class="p8 px16 ">home</a>`,
    `<a href="/trace" class="p8 px16 ">trace the threads</a>`,
    `<a href="/dulce" class="p8 px16 ">Gallery</a>`,
    `<a href="/insideout" class="p8 px16 "><img src="images/things/Mail.png" alt=""></a>`
]

//active nav
let lis = document.querySelectorAll('nav li');
activeNav();
function activeNav() {
    lis.forEach((li, index) => {
        if (li.classList.contains('active')) {
            li.innerHTML = activeLiHtml[index]
        } else {
            li.innerHTML = normalLiHtml[index]
        }
    })
}


//add active class when click
lis.forEach(li => {
    li.addEventListener('click', () => {
        lis.forEach(li => {
            li.classList.remove('active')
        })
        li.classList.add('active')
        activeNav()
    })
})