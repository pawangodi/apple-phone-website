import gsap from "gsap/all"
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target , animationProps , scrollProps)=>{
    gsap.to(target , {
        ...animationProps,
        ScrollTrigger :{
            trigger : target,
            toggleActions : 'restart reverse restart reverse',
            start: 'top 85%',
            ...scrollProps
        }
    })
}


export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget,
    secondTarget, animationProps) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: 'power2.inOut'
    })

    timeline.to(
        firstTarget,
        {
            ...animationProps,
            ease: 'power2.inOut'
        },
        '<'
    )

    timeline.to(
        secondTarget,
        {
            ...animationProps,
            ease: 'power2.inOut'
        },
        '<'
    )
}