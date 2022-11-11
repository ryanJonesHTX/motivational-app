

// button functionality
document.querySelector('#main').addEventListener('click', showQuote)
function showQuote(){
    document.querySelector('.name').classList.toggle('hide')
    document.querySelector('.quote').classList.toggle('hide')
    document.querySelector('#main').classList.toggle('hide')
}
