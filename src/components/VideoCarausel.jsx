import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import React, { useEffect, useRef, useState } from 'react'
import { hightlightsSlides } from "../constants"
import { playImg, pauseImg, replayImg } from '../utils/index'

const VideoCarausel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false
  });

  const [loadedData, setLoadedData] = useState([]);

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video

  const handleLoadedMetaData = (i, e) => setLoadedData((pre) => [...pre, e])

  useGSAP(() => {
    gsap.to('#slider', {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: 'power2.inOut'
    })

    gsap.to('#video', {
      scrollTrigger: {
        trigger: '#video',
        toggleActions: 'restart play reverse play'
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true
        }))
      }
    })
  }, [isEnd, videoId])

  //for starting video and Play video after data is loaded
  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);


  //for span progress  animation
  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current

    if (span[videoId]) {
      //animate the span using progress of the video
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress != currentProgress) {
            currentProgress = progress;

            //animation  change width of span
            gsap.to(videoDivRef.current[videoId], {
              width: window.innerWidth < 760
                ? '10vw'
                : window.innerWidth < 1200
                  ? '10vw'
                  : '4vw'
            })

            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: 'white'
            })
          }

        },

        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: '12px'
            })
            gsap.to(span[videoId], {
              backgroundColor: '#afafaf'
            })
          }
        }

      })

      if (videoId === 0) {
        anim.restart();
      }

      const animUpdate = () => {
        anim.progress(videoRef.current[videoId]?.currentTime /
          hightlightsSlides[videoId].videoDuration)
      }

      if (isPlaying) {
        gsap.ticker.add(animUpdate)
      } else {
        gsap.ticker.remove(animUpdate)
      }
    }

  }, [videoId, startPlay])

  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((pre) => ({
          ...pre, isEnd: true,
          videoId: i + 1
        }))
        break;
      case 'video-last':
        setVideo((pre) => ({ ...pre, isLastVideo: true, }))
        break;
      case 'video-reset':
        setVideo((pre) => ({
          ...pre, isLastVideo: false, videoId: 0
        }))
        break;
      case 'play':
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }))
        break;
      case 'pause':
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }))
        break;
      default:
        return video;
    }
  }



  return (
    <>
      <div className=' flex items-center'>
        {hightlightsSlides.map((list, i) => (
          <div className=' sm:pr-20 pr-10' key={list.id} id="slider" >
            <div className=' mr-2 video-carousel_container'>
              <div className=' w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  className={` pointer-events-none`}
                  ref={(el) => (
                    videoRef.current[i] = el
                  )}

                  onEnded={() =>
                    i !== 3 ? handleProcess('video-end', i)
                      : handleProcess('video-last')

                  }

                  onPlay={
                    () => {
                      setVideo((prevVideo) => ({
                        ...prevVideo, isPlaying: true
                      }))

                    }
                  }
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div className='absolute top-12 left-[5%] z-10'>
                {list.textLists.map((text) => (
                  <p key={text} className='md:text-2xl text-xl font-medium'>{text}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='relative flex-center max-md:mt-5 mt-10'>
        <div className='flex-center py-5 px-7 bg-gray-300 background-blurr rounded-full'>
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              ref={(el) => (videoDivRef.current[i] = el)}
              className='bg-pinnk-200 mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer'
            >
              <span className='absolute h-full w-full rounded-full'
                ref={(el) => (videoSpanRef.current[i] = el)}></span>
            </span>

          ))
          }
        </div>
        <button className='control-btn'>
          <img
            src={isLastVideo ? replayImg :
              !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? 'repplay' :
              !isPlaying ? 'play' : 'pause'}
            onClick={isLastVideo
              ? () => handleProcess('video-reset')
              : !isPlaying
                ? () => handleProcess('play')
                : () => handleProcess('pause')
            }
          />
        </button>
      </div>
    </>
  )
}

export default VideoCarausel