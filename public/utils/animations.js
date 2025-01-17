import gsap from "gsap";

export const animatePageIn = () => {
    const bannerOne = document.getElementById("banner-1");
    const bannerTwo = document.getElementById("banner-2");
    const bannerThree = document.getElementById("banner-3");

    if(bannerOne && bannerTwo && bannerThree) {
        const tl = gsap.timeline();

        tl.set([bannerOne, bannerTwo, bannerThree], {
            yPercent: 0,
        }).to([bannerOne, bannerTwo, bannerThree], {
            yPercent: 100,
            stagger: 0.2
        })
    }
}