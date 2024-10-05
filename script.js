let starbg=document.getElementById('starbg')
let bg2=document.getElementById('bg2')
let bg1=document.getElementById('bg1')
let planet1=document.getElementById('planet1')
let planet2=document.getElementById('planet2')
let planet3=document.getElementById('planet3')
let spaceman=document.getElementById('spaceman')
let text=document.getElementById('text')
let text2=document.getElementById('text2')
let newdiv=document.getElementById('newdiv')
let ufo=document.getElementById('ufo')
let sec=document.getElementById('sec')
let voyagetext = document.getElementById('voyagetext');
let voyagetext1=document.getElementById('voyagetext1')
let voyagetext2=document.getElementById('voyagetext2')
let voyagetext3=document.getElementById('voyagetext3')
let voyagetext4=document.getElementById('voyagetext4')
let voyagetext5=document.getElementById('voyagetext5')
let voyagetext6=document.getElementById('voyagetext6')
let voyagetext7=document.getElementById('voyagetext7')
let voyagetext8=document.getElementById('voyagetext8')
let voyagetext9=document.getElementById('voyagetext9')
let voyagetext10=document.getElementById('voyagetext10')
let shower1 = document.getElementById('shower1');
let shower2 = document.getElementById('shower2');
let shower3 = document.getElementById('shower3');
let shower4 = document.getElementById('shower4');
let shower5 = document.getElementById('shower5');
let shower6 = document.getElementById('shower6');
let shower7 = document.getElementById('shower7');
let shower8 = document.getElementById('shower8');
let enddiv=document.getElementById('end')


let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            window.addEventListener('scroll', handleScrollForText2);
        } else {
            window.removeEventListener('scroll', handleScrollForText2);
        }
    });
});

observer.observe(text2);

function handleScrollForText2() {
    let value = window.scrollY;
    text2.style.marginTop = value * -1 + 'px';
    if(text2.style.bottom=='610px'){
    text2.style.letterSpacing = value *0.08+'px'
    text2.style.fontSize=value*0.1+'px'
    }
}
window.addEventListener('scroll',()=>{
    let value=window.scrollY;
    text.style.fontSize=150+'px'
    text.style.marginTop = value *2.5+'px'
    planet1.style.top=value*-1.5+'px'
    planet1.style.left=value*1.5+'px'
    planet2.style.top=value*1+'px'
    planet2.style.left=value*-3+'px'
    planet3.style.top=value*-2+'px'
    planet3.style.left=value*-2+'px'
    bg2.style.top=value*-0.5+'px'
    starbg.style.top=value*-2+'px'
    spaceman.style.left=value*2+'px'
    text.style.letterSpacing=value*1+'px'
    newdiv.style.width=value*1+'px'
    newdiv.style.width=value*1+'px'
    newdiv.style.position='fixed'
    ufo.style.width=value*0.3+'px'
    ufo.style.marginLeft=value*2+'px'
    newdiv.style.top='20vh'
    text2.style.position='fixed'
    text2.style.bottom='610px'
    voyagetext.style.marginTop=value*-1+'px';
    voyagetext1.style.marginTop=value*-0.90+'px';
    voyagetext2.style.marginTop=value*-0.80+'px';
    voyagetext3.style.marginTop=value*-0.70+'px';
    voyagetext4.style.marginTop=value*-0.60+'px';
    voyagetext5.style.marginTop=value*-0.50+'px';
    voyagetext6.style.marginTop=value*-0.40+'px';
    voyagetext7.style.marginTop=value*-0.30+'px';
    voyagetext8.style.marginTop=value*-0.20+'px';
    voyagetext9.style.marginTop=value*-0.10+'px';
    voyagetext10.style.marginTop=value*-0.01+'px';
    shower1.style.left=value*0.2+'px'
    shower1.style.top=value*0.5+'px'
    shower3.style.left=value*0.5+'px'
    shower3.style.top=value*-0.5+'px'
    shower7.style.left=value*-0.5+'px'
    shower6.style.left=value*0.4+'px'
    shower6.style.top=value*0.4+'px'
    shower5.style.left=value*-0.4+'px'
    shower5.style.top=value*0.4+'px'
    shower8.style.top=value*-0.3+'px'
    shower8.style.left=value*-0.3+'px'
    shower2.style.top=value*-1+'px'
    shower2.style.left=value*0.3+'px'
    enddiv.style.marginTop=value*-0.3+'px'


    let opacityValue = 1 - (value / 1400); 

    if(opacityValue < 0) {
        opacityValue = 0;
    } else if(opacityValue > 1) {
        opacityValue = 1;
    }
    text2.style.opacity = opacityValue;

    const Mleft='150'
    sec.style.marginLeft=Mleft-0.15*value+'%'
    const cards = document.querySelectorAll('.card'); 
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().left; 

        if (cardPosition >= 500 && cardPosition <= 900) {
            card.classList.add('highlight');
        } else {
            card.classList.remove('highlight'); 
        }
    });

})

