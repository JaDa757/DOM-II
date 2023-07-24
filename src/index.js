import './less/index.less'

// Your code goes here!

// Event 1 -load
window.onload = function (evt) {
    console.log(`event ${evt.type} fited! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'READY TO GO!!!'


    // Event 2 - copy
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text
            })
    })

    // Event 3 - click
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })


    //Event 4 - double click
    document.body.addEventListener('dblclick', evt => {
        evt.target.innerHTML = ''
    })


    //Event 5 - keydown
    window.addEventListener('keydown', evt => {
        if (evt.key == 6) {
            document.body.innerHTML = '<h1>YOU RAN ORDER 66</h1>'
        }
    })


    // Event 6 -mousemove
    document.body.addEventListener('mousemove', evt => {
        const { clientX, clientY } = evt
        // console.log(`mouse is at ${clientX}, ${clientY}`)
    })

    // Event 7 & 8 - mouseenter - mouse leave
    const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations) {
        destination.addEventListener('mouseenter', evt => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () => {
            setTimeout(() => {
                destination.style.fontWeight = 'initial'
            }, 500)
        })
    }


    // Event 9 - wheel
    const foot = document.querySelector('.footer')
    foot.addEventListener('wheel', (evt) => {
        foot.textContent = '*****************************************************************'
    })

    // Event 10 -paste
    const titles = document.querySelectorAll('div h2');
    window.addEventListener('paste', () => {
        navigator.clipboard.readText()
            .then(text => {
                titles.forEach(title => {
                    title.textContent += text;
                });
            });
    });
}
