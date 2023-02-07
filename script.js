window.addEventListener('DOMContentLoaded', function () {
    let links = document.querySelectorAll('.links-item'),
        linksBox = document.querySelector('.links'),
        contentLeft =  document.querySelectorAll('.content-left')

    function hideContent(){
        contentLeft.forEach(item =>{
            item.classList.add('none')
            item.classList.remove('show', 'fade')
        })

        links.forEach(item => {
            item.classList.remove('content-left-active')
        })
    }
    hideContent()
    function showContent(i = 0){
        contentLeft[i].classList.add('show', 'fade')
        contentLeft[i].classList.remove('none')
        links[i].classList.add('content-left-active')
    }
    showContent()
    linksBox.addEventListener('click', (event)=>{
        if(event.target && event.target.classList.contains('links-item')){
            links.forEach((item, i) => {
                if(event.target == item){
                    hideContent()
                    showContent(i)
                }
            })
        }
    })
})
    