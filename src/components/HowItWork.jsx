import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { animateWithGsap } from '../utils/animation'

const HowItWork = () => {
    const videoRef = useRef();

    useGSAP(() => {
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: "#chip",
                start: '20% bottom'
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'

        })

        animateWithGsap('.g_fadeIn', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.inOut'
        })


    }, [])


    return (
        <section className="common-heading">
            <div className="screen-max-width">
                <div id="chip" className="flex-center w-full my-20">
                    <img src={chipImg} alt="chip" width={100} height={100} />
                </div>
            </div>

            <div className=" flex flex-col items-center">
                <h2 className="hiw-title">
                    A17 Pro chip.
                    <br /> A monster win for gaming.
                </h2>

                <p className="hiw-subtitle">
                    It's here biggest redesign in the
                    history of Apple PLUS.
                </p>
            </div>
            <div className="mt-10 md:mt-20 mb-1 common-padding items-center">
                <div className="relative h-full flex-center">
                    <div className="overflow-hidden relativ">
                        <img
                            src={frameImg}
                            alt="frame"
                            className="bg-transeparent relative z-10 absolute"
                        />
                    </div>

                    <div className="hiw-video">
                        <video className="absolute  pointer-event-none" playsInline preload="none" muted autoPlay  ref={videoRef}>
                            <source src={frameVideo} type='video/mp4' />
                        </video>
                    </div>
                </div>

                <p className="text-gray font-semibold text-center mt-3">Honkai: Star Rail</p>

                <div className="hiw-text-container common-padding">
                    <div className="flex flex-1 justify-center flex-col">
                        <p className="hiw-text g_fadeIn">
                            A17 Pro is an entirely new class of
                            iPhone chip that delivers our {' '}
                            <span className="text-white">
                                best graphic performance by far
                            </span>
                            using the same alloy that
                            spacecrafts use for mission to Mars.
                        </p>
                    </div>
                    <div className="flex flex-1 justify-center flex-col">
                        <p className="hiw-text g_fadeIn">
                            Mobile {' '}
                            <span className="text-white">
                                game will look and feel  so impersive
                            </span>
                            with incredibly  detailed
                            environment and characters.
                        </p>
                    </div>

                    <div className="flex-1 flex justify-center flex-col g_fadeIn">
                        <p className="hiw-tet">New</p>
                        <p className="hiw-tet">Pro-class GPU</p>
                        <p className="hiw-tet">New</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HowItWork;