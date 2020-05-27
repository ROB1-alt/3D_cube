const cube = document.querySelector('.cube')
const cubePivot = cube.querySelector('.pivot')

window.addEventListener('mousemove', (event) =>
{
    const rotateY = event.clientX * 0.3
    const rotateX = event.clientY * 0.3
    console.log(rotateX)
    cubePivot.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`

})