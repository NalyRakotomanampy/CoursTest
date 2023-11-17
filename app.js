const test = document.getElementById('test');
test.addEventListener('click',function(){
    test.style.animation = 'animate 2s infinte ease-in-out backwards';
    test.addEventListener('click',function(){
        test.style.animation = 'animate 2s 0 ease-in-out backwards';
    })
})
