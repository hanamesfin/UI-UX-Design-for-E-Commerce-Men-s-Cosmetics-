
// small JS to enhance scrolling behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
        const target = document.querySelector(this.getAttribute('href'));
        if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
});
// form submit handler (no backend)
document.querySelectorAll('.contact-form').forEach(form=>{
    form.addEventListener('submit', function(e){
        e.preventDefault();
        alert('Thanks! Message sent (demo).');
        form.reset();
    });
});
