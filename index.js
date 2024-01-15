let body=document.querySelectorAll(`body`)[0]
let aboutSection=document.getElementById(`about`);
let aboutContent=document.querySelectorAll(`div`)[0]
let aboutImg=aboutContent.querySelectorAll(`img`)[0]
let aboutTextDiv=aboutContent.querySelectorAll(`div`)[1]
let aboutTxt1=aboutContent.querySelectorAll(`h1`)[0]
let aboutTxt2=aboutContent.querySelectorAll(`h3`)[0]
let aboutTxt3=aboutTextDiv.querySelectorAll(`div`)[0]
let aboutTxt4=aboutContent.querySelectorAll(`div`)[3]
let exTxt2=aboutSection.querySelectorAll(`span`)[0]
let nav=document.querySelectorAll(`nav`)[0]
let navLinks=nav.querySelectorAll(`ul`)[0]
let homeLink=nav.querySelectorAll(`li`)[0]
let homeLink2=nav.querySelectorAll(`li`)[1]
let aboutLink=nav.querySelectorAll(`li`)[2]
let teamLink=nav.querySelectorAll(`li`)[3]
let contactLink=nav.querySelectorAll(`li`)[4]
let hamburger=document.querySelectorAll(`i`)[0]
let mobilemenu=document.getElementById(`mobile-menu`)
let menulink1a=mobilemenu.querySelectorAll(`li`)[0]
let menulink1=mobilemenu.querySelectorAll(`li`)[1]
let menulink2=mobilemenu.querySelectorAll(`li`)[2]
let menulink3=mobilemenu.querySelectorAll(`li`)[3]
let menulink4=mobilemenu.querySelectorAll(`li`)[4]
let teamSection=document.getElementById(`team-section`)
let Ttext1=teamSection.querySelectorAll(`h1`)[0]
let Ttext2=teamSection.querySelectorAll(`p`)[0]
let teamCard1=document.getElementById(`Team-card-1`)
let teamCard2=document.getElementById(`Team-card-2`)
let teamCard3=document.getElementById(`Team-card-3`)
let teamcontent=teamSection.querySelectorAll(`div`)[0]
let contactSection=document.getElementById(`contact`);
try{window.addEventListener(`resize`,()=>{mobilemenu.classList.add(`hidden`,window.innerWidth>786);mobilemenu.classList.remove(`flex`,window.innerWidth>786);mobilemenu.classList.remove(`menuanimation1`,window.innerWidth>786)})}catch(e){console.log(e)};
try{
menulink1a.addEventListener(`click`,()=>{
    mobilemenu.classList.add(`hidden`)
    mobilemenu.classList.remove(`flex`)
    mobilemenu.classList.remove(`menuanimation1`)
})
}catch(e){
    console.log(e)
}
try{
    menulink1.addEventListener(`click`,()=>{
     mobilemenu.classList.add(`hidden`)
     mobilemenu.classList.remove(`flex`)
     mobilemenu.classList.remove(`menuanimation1`)
     aboutSection.classList.remove(`popUp1`);
     aboutImg.classList.add(`hidden`)
     aboutContent.classList.add(`hidden`)
     aboutContent.classList.remove(`flex`)
     aboutSection.classList.add(`px-4`)
     exTxt2.classList.remove(`hidden`);
     aboutSection.classList.add(`reversePopUp1`)
     homeLink.classList.remove(`hidden`)
     homeLink2.classList.add(`hidden`)
     navLinks.classList.remove(`pb-14`)
     teamSection.classList.remove(`popUp1`)
     teamSection.classList.add(`reversePopUp2`)
     Ttext1.classList.remove(`popUp3`)
     Ttext2.classList.remove(`popUp3`)
     teamCard1.classList.remove(`popUp5`)  
     aboutSection.classList.add(`px-4`)

     teamCard2.classList.remove(`popUp5`)  
     teamCard3.classList.remove(`popUp5`)  
     aboutContent.classList.remove(`zoom1`)
     aboutContent.classList.remove(`zoom2`)
     aboutSection.classList.add(`cursor-pointer`)
     for(let x of aboutSection.classList){if(x==`popUp1`){aboutSection.classList.add(`reversePopUp1`);aboutSection.classList.remove(`popUp1`)}}
     for(let x of contactSection.classList){if(x==`popUp6`){contactSection.classList.add(`reversePopUp6`);contactSection.classList.remove(`popUp6`)}} 
    })

}catch(e){console.log(e)}
     // ----------------------------------------mobilemenu-about-btn--------------------------------------------------------------
try{
    menulink2.addEventListener(`click`,()=>{
        menulink1.classList.remove(`hidden`)
        menulink1a.classList.add(`hidden`)
        mobilemenu.classList.add(`hidden`)
        mobilemenu.classList.remove(`flex`)
        aboutTextDiv.classList.remove(`slide4`)
        mobilemenu.classList.remove(`menuanimation1`)
        aboutSection.classList.remove(`reversePopUp1`)
        aboutSection.classList.add(`popUp1`);
        exTxt2.classList.add(`hidden`);
        aboutTextDiv.classList.remove(`slide4`)
        aboutSection.classList.add(`px-4`)

        aboutSection.classList.remove(`staticAnimation1`)
        aboutSection.classList.remove(`cursor-pointer`)
        Ttext1.classList.remove(`popUp3`)
        Ttext2.classList.remove(`popUp3`)
        teamSection.classList.remove(`bottom-full`)
        teamSection.classList.remove(`left-full`)
        teamSection.classList.remove(`zoom1`)
        teamCard1.classList.remove(`popUp5`)  
        teamCard2.classList.remove(`popUp5`)  
        teamCard3.classList.remove(`popUp5`)
        for(let x of teamSection.classList){if(x==`slide2`){teamSection.classList.remove(`slide2`);aboutImg.classList.remove(`slide3`);aboutTextDiv.classList.remove(`slide4`); aboutContent.classList.remove(`zoom1`); aboutContent.classList.add(`revzoom1`)}}
        for(let x of contactSection.classList){if(x==`popUp6`){contactSection.classList.add(`reversePopUp6`)}}
        setTimeout(()=>{
            aboutContent.classList.remove(`hidden`)
            aboutContent.classList.add(`flex`)
            aboutSection.classList.remove(`px-4`)
            aboutImg.classList.remove(`opacity-0`)
            aboutImg.classList.remove(`hidden`)
            aboutImg.classList.add(`popUp2`)
            aboutImg.classList.remove(`slide3`)
            aboutTxt1.classList.add(`popUp3`)
            homeLink.classList.add(`hidden`)
            homeLink2.classList.remove(`hidden`)
            navLinks.classList.add(`pb-14`)
            setTimeout(()=>{
                aboutTxt2.classList.add(`popUp3`)
                setTimeout(()=>{
                    aboutTxt3.classList.add(`popUp4`)
                    aboutTxt4.classList.add(`popUp3`)
                },600)
            },200);
        },800)
    })
}catch(e){console.log(e)}
// ----------------------------------------mobilemenu-team-btn--------------------------------------------------------------
try{
    menulink3.addEventListener(`click`,()=>{
        menulink1.classList.remove(`hidden`)
        menulink1a.classList.add(`hidden`)
        mobilemenu.classList.add(`hidden`)
        mobilemenu.classList.remove(`flex`)
        mobilemenu.classList.remove(`menuanimation1`)
        exTxt2.classList.add(`hidden`)
        aboutImg.classList.add(`hidden`)
        aboutSection.classList.remove(`reversePopUp1`)
        teamSection.classList.remove(`top-full`)
        teamSection.classList.remove(`left-full`)
        homeLink.classList.add(`hidden`)
        homeLink2.classList.remove(`hidden`)
        navLinks.classList.add(`pb-14`)
        aboutImg.classList.remove(`popUp2`)
        aboutImg.classList.remove(`left-0`)
        aboutImg.classList.remove(`opacity-0`)
        aboutImg.classList.add(`slide3`)
        aboutTextDiv.classList.add(`slide4`)
        aboutContent.classList.add(`zoom1`)
        aboutContent.classList.remove(`hidden`)
        aboutContent.classList.remove(`revzoom1`)
        teamSection.classList.add(`slide2`)
        aboutTxt1.classList.remove(`popUp3`)
        aboutTxt2.classList.remove(`popUp3`)
        aboutTxt3.classList.remove(`popUp4`)
        aboutTxt4.classList.remove(`popUp3`)
        setTimeout(()=>{
            Ttext1.classList.add(`popUp3`)
            Ttext2.classList.add(`popUp3`)
            setTimeout(()=>{
                teamCard1.classList.add(`popUp5`)     
                  setTimeout(()=>{
                      teamCard2.classList.add(`popUp5`)     
                      setTimeout(()=>{
                          teamCard3.classList.add(`popUp5`)     
                          aboutImg.classList.add(`hidden`)
                          aboutSection.classList.remove(`px-4`)
                        })
                    },150)
                },150)
            },250)
            for(let x of aboutSection.classList){if(x==`radiouspop`){aboutSection.classList.add(`popUp1`);teamSection.classList.add(`top-0`)}}
            for(let x of contactSection.classList){if(x==`popUp6`){contactSection.classList.add(`reversePopUp6`)}}
    })
}catch(e){console.log(e)}
// ----------------------------------------mobilemenu-contact-btn--------------------------------------------------------------
try{
    menulink4.addEventListener(`click`,()=>{
        menulink1.classList.remove(`hidden`)
        menulink1a.classList.add(`hidden`)
        mobilemenu.classList.add(`hidden`)
        mobilemenu.classList.remove(`flex`)
        mobilemenu.classList.remove(`menuanimation1`)
        aboutContent.classList.remove(`hidden`)
        teamSection.classList.add(`top-full`)
        teamSection.classList.add(`left-full`)
        teamSection.classList.remove(`slide2`)
        contactSection.classList.add(`popUp6`)
        aboutContent.classList.remove(`zoom1`)
        aboutContent.classList.remove(`revzoom1`)
        contactSection.classList.remove(`reversePopUp6`)
        homeLink.classList.add(`hidden`)
        homeLink2.classList.remove(`hidden`)
        navLinks.classList.add(`pb-14`)
        Ttext1.classList.remove(`popUp3`)
        Ttext2.classList.remove(`popUp3`)
        teamCard1.classList.remove(`popUp5`)
        teamCard2.classList.remove(`popUp5`)
        teamCard3.classList.remove(`popUp5`)
        aboutImg.classList.remove(`popUp2`)
        aboutTxt1.classList.remove(`popUp3`)
        aboutSection.classList.add(`px-4`)

        aboutTxt2.classList.remove(`popUp3`)
        aboutTxt3.classList.remove(`popUp4`)
        aboutTxt4.classList.remove(`popUp3`)
        for(let x of aboutSection.classList){if(x==`popUp1`){aboutSection.classList.add(`reversePopUp1`);aboutSection.classList.remove(`popUp1`)}}
        for(let x of teamSection.classList){if(x==`popUp1`){teamSection.classList.add(`reversePopUp2`);teamSection.classList.remove(`popUp1`)}}
    })
}catch(e){console.log(e)}
    // ----------------------------------------hammburger--------------------------------------------------------------
try{
    hamburger.addEventListener(`click`,()=>{
    mobilemenu.classList.toggle(`hidden`)
    mobilemenu.classList.toggle(`flex`)
    mobilemenu.classList.toggle(`menuanimation1`)
})

}catch(e){console.log(e);}
    // ----------------------------------------home-btn-2--------------------------------------------------------------
try{
homeLink2.addEventListener(`click`,()=>{
    aboutSection.classList.remove(`popUp1`);
    aboutImg.classList.add(`hidden`)
    aboutContent.classList.add(`hidden`)
    aboutContent.classList.remove(`flex`)
    aboutSection.classList.add(`px-4`)
    exTxt2.classList.remove(`hidden`);
    aboutSection.classList.add(`reversePopUp1`)
    homeLink.classList.remove(`hidden`)
    homeLink2.classList.add(`hidden`)
    navLinks.classList.remove(`pb-14`)
    aboutContent.classList.remove(`zoom1`)
    aboutContent.classList.remove(`zoom2`)
    aboutSection.classList.add(`cursor-pointer`)
    teamSection.classList.add(`top-full`)
    teamSection.classList.add(`left-full`)
    teamSection.classList.remove(`slide2`)
    teamCard3.classList.remove(`popUp5`)  
    teamCard2.classList.remove(`popUp5`)  
    aboutSection.classList.add(`px-4`)

    teamCard1.classList.remove(`popUp5`)  
    Ttext2.classList.remove(`popUp3`)
    Ttext1.classList.remove(`popUp3`)
    teamSection.classList.remove(`popUp1`)
    for(let x of aboutSection.classList){if(x==`popUp1`){aboutSection.classList.add(`reversePopUp1`);aboutSection.classList.remove(`popUp1`)}}
    for(let x of contactSection.classList){if(x==`popUp6`){contactSection.classList.add(`reversePopUp6`)}}  
})
}catch(e){
    console.log(e)
}
// ----------------------------------------about-section--------------------------------------------------------------
try{aboutSection.addEventListener(`click`,()=>{
    aboutSection.classList.remove(`reversePopUp1`)
    aboutSection.classList.add(`popUp1`);
    exTxt2.classList.add(`hidden`);
    aboutSection.classList.remove(`staticAnimation1`)
    aboutSection.classList.remove(`cursor-pointer`)
    teamSection.classList.remove(`bottom-full`)
    teamSection.classList.remove(`left-full`)
    aboutSection.classList.add(`px-4`)

    teamSection.classList.remove(`zoom1`)
    setTimeout(()=>{
        aboutContent.classList.remove(`hidden`)
        aboutContent.classList.add(`flex`)
        aboutSection.classList.remove(`px-4`)
        aboutImg.classList.remove(`hidden`)
        aboutImg.classList.add(`popUp2`)
        aboutTxt1.classList.add(`popUp3`)
        homeLink.classList.add(`hidden`)
        homeLink2.classList.remove(`hidden`)
        navLinks.classList.add(`pb-14`)
        setTimeout(()=>{
            aboutTxt2.classList.add(`popUp3`)
            setTimeout(()=>{
                aboutTxt3.classList.add(`popUp4`)
                aboutTxt4.classList.add(`popUp3`)
            },600)
        },200);
    },800)
})
}catch(e){console.log(e)}
// ----------------------------------------about-link-btn-1-------------------------------------------------------------
try{aboutLink.addEventListener(`click`,()=>{
    aboutSection.classList.remove(`reversePopUp1`)
    aboutSection.classList.add(`popUp1`);
    exTxt2.classList.add(`hidden`);
    aboutTextDiv.classList.remove(`slide4`)
    aboutSection.classList.remove(`staticAnimation1`)
    aboutSection.classList.remove(`cursor-pointer`)
    Ttext1.classList.remove(`popUp3`)
    Ttext2.classList.remove(`popUp3`)
    teamSection.classList.remove(`bottom-full`)
    teamSection.classList.remove(`left-full`)
    teamSection.classList.remove(`zoom1`)
    aboutSection.classList.add(`px-4`)

    teamCard1.classList.remove(`popUp5`)  
    teamCard2.classList.remove(`popUp5`)  
    teamCard3.classList.remove(`popUp5`)
    for(let x of teamSection.classList){if(x==`slide2`){teamSection.classList.remove(`slide2`);aboutImg.classList.remove(`slide3`);aboutTextDiv.classList.remove(`slide4`); aboutContent.classList.remove(`zoom1`); aboutContent.classList.add(`revzoom1`)}}
    for(let x of contactSection.classList){if(x==`popUp6`){contactSection.classList.add(`reversePopUp6`)}}
    setTimeout(()=>{
        aboutContent.classList.remove(`hidden`)
        aboutContent.classList.add(`flex`)
        aboutSection.classList.remove(`px-4`)
        aboutImg.classList.remove(`opacity-0`)
        aboutImg.classList.remove(`hidden`)
        aboutImg.classList.add(`popUp2`)
        aboutImg.classList.remove(`slide3`)
        aboutTxt1.classList.add(`popUp3`)
        homeLink.classList.add(`hidden`)
        homeLink2.classList.remove(`hidden`)
        navLinks.classList.add(`pb-14`)
        setTimeout(()=>{
            aboutTxt2.classList.add(`popUp3`)
            setTimeout(()=>{

                aboutTxt3.classList.add(`popUp4`)
                aboutTxt4.classList.add(`popUp3`)
            },600)
        },200);
    },800)
})
}catch(e){console.log(e)}
// ----------------------------------------Team-link-btn-1-------------------------------------------------------------
teamLink.addEventListener(`click`,()=>{
    exTxt2.classList.add(`hidden`)
    aboutSection.classList.remove(`reversePopUp1`)
    teamSection.classList.remove(`top-full`)
    teamSection.classList.remove(`left-full`)
    teamSection.classList.add(`slide2`)
    homeLink.classList.add(`hidden`)
    homeLink2.classList.remove(`hidden`)
    navLinks.classList.add(`pb-14`)
    aboutImg.classList.remove(`popUp2`)
    aboutImg.classList.remove(`left-0`)
    aboutImg.classList.remove(`opacity-0`)
    aboutImg.classList.add(`slide3`)
    aboutTextDiv.classList.add(`slide4`)
    aboutContent.classList.add(`zoom1`)
    aboutContent.classList.remove(`revzoom1`)
    aboutTxt1.classList.remove(`popUp3`)
    aboutTxt2.classList.remove(`popUp3`)
    aboutTxt3.classList.remove(`popUp4`)
    aboutTxt4.classList.remove(`popUp3`)
    aboutContent.classList.remove(`hidden`)
    setTimeout(()=>{
        Ttext1.classList.add(`popUp3`)
        Ttext2.classList.add(`popUp3`)
        setTimeout(()=>{
            teamCard1.classList.add(`popUp5`)     
            setTimeout(()=>{
                teamCard2.classList.add(`popUp5`)     
                  setTimeout(()=>{
                      teamCard3.classList.add(`popUp5`)     
                      aboutImg.classList.add(`hidden`)
                      aboutSection.classList.remove(`px-4`)
                    })
                },150)
            },150)
        },250)
        for(let x of aboutSection.classList){if(x==`radiouspop`){aboutSection.classList.add(`popUp1`);teamSection.classList.add(`top-0`)}}
        for(let x of contactSection.classList){if(x==`popUp6`){contactSection.classList.add(`reversePopUp6`)}}
    })
    // ----------------------------------------contact-link-btn-1-------------------------------------------------------------
    contactLink.addEventListener(`click`,()=>{
    aboutContent.classList.remove(`hidden`)
    teamSection.classList.add(`top-full`)
    teamSection.classList.add(`left-full`)
    teamSection.classList.remove(`slide2`)
    contactSection.classList.add(`popUp6`)
    aboutContent.classList.remove(`zoom1`)
    aboutContent.classList.remove(`revzoom1`)
    contactSection.classList.remove(`reversePopUp6`)
    homeLink.classList.add(`hidden`)
    homeLink2.classList.remove(`hidden`)
    navLinks.classList.add(`pb-14`)
    aboutSection.classList.add(`px-4`)

    Ttext1.classList.remove(`popUp3`)
    Ttext2.classList.remove(`popUp3`)
    teamCard1.classList.remove(`popUp5`)
    teamCard2.classList.remove(`popUp5`)
    teamCard3.classList.remove(`popUp5`)
    aboutImg.classList.remove(`popUp2`)
    aboutTxt1.classList.remove(`popUp3`)
    aboutTxt2.classList.remove(`popUp3`)
    aboutTxt3.classList.remove(`popUp4`)
    aboutTxt4.classList.remove(`popUp3`)
    for(let x of aboutSection.classList){if(x==`popUp1`){aboutSection.classList.add(`reversePopUp1`);aboutSection.classList.remove(`popUp1`)}}
    for(let x of teamSection.classList){if(x==`popUp1`){teamSection.classList.add(`reversePopUp2`);teamSection.classList.remove(`popUp1`)}}
})