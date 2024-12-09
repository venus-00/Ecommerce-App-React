import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


export default () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1"><img src={"../public/banner1.png"} className="h-full w-full" /></div>
                <div className="keen-slider__slide number-slide2"><img src={"../public/banner2.png"} className="h-full w-full" /></div>
                <div className="keen-slider__slide number-slide3"><img src={"../public/banner1.png"} className="h-full w-full" /></div>
                <div className="keen-slider__slide number-slide3"><img src={"../public/banner2.png"} className="h-full w-full" /></div>
            </div>
        </>
    )
}
