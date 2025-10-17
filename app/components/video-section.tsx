"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/cn";
import Animate from "./shared/animate";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const newMutedState = !isMuted;
    video.muted = newMutedState;
    // When unmuting, set volume to full
    if (!newMutedState) {
      video.volume = 1;
    }
    setIsMuted(newMutedState);
  };

  const showControlsTemporarily = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 1000);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;
    // Set volume to full when video loads
    video.volume = 1;
  }, [isMuted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncPlayingState = () => setIsPlaying(!video.paused);

    video.addEventListener("play", syncPlayingState);
    video.addEventListener("pause", syncPlayingState);
    video.addEventListener("loadeddata", syncPlayingState);

    if (video.readyState >= 2) {
      syncPlayingState();
    }

    return () => {
      video.removeEventListener("play", syncPlayingState);
      video.removeEventListener("pause", syncPlayingState);
      video.removeEventListener("loadeddata", syncPlayingState);
    };
  }, []);

  return (
    <div className="relative w-full pt-[108px] pb-[100px]">
      {/* Background Effects */}
      <Image
        src="/images/video-section/glow-overlay.png"
        className="pointer-events-none absolute inset-0 z-30 hidden w-full object-cover lg:flex"
        width={500}
        height={500}
        alt="glow-overlay"
      />

      <div className="my-auto lg:hidden">
        <div className="bg-cyan absolute top-2/3 left-0 my-auto flex h-2/3 w-10 -translate-y-1/2 rounded-r-full blur-[75px]" />
        <div className="bg-cyan absolute top-2/3 right-0 my-auto flex h-2/3 w-10 -translate-y-1/2 rounded-l-full blur-[75px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 top-20 flex items-center justify-center">
        <Image
          src="/images/video-section/grid-overlay.svg"
          width={1400}
          height={800}
          alt="grid-overlay"
        />
      </div>

      {/* Main Content */}
      <div className="relative space-y-12 overflow-x-clip lg:space-y-16">
        {/* Header */}
        <header className="text-center">
          <Animate type="fadeUp">
            <h1 className="text-gradient text-[40px] leading-[1.2] font-semibold lg:text-[64px]">
              Experience The <br /> Next Era Of Retail
            </h1>
          </Animate>
          <Animate type="fadeUp">
            <p className="text-paragraph mt-4 text-[18px] lg:mt-8 lg:text-[26px]">
              See autonomous commerce in action.
            </p>
          </Animate>
        </header>

        {/* Video Container */}
        <Animate type="fadeIn">
          <div className="relative mx-auto max-w-[1120px] px-4 sm:px-8 xl:px-0">
            {/* Decorative Particles */}
            <div className="pointer-events-none absolute -top-6 -right-2 z-20 sm:right-0 xl:-right-6">
              <Image
                src="/icons/particle.svg"
                width={80}
                height={80}
                alt="decorative-particle"
              />
            </div>

            <div className="pointer-events-none absolute -bottom-6 -left-2 z-20 sm:left-0 xl:-left-6">
              <Image
                src="/icons/particle.svg"
                width={80}
                height={80}
                alt="decorative-particle"
              />
            </div>

            {/* Video Player Container */}
            <div className="relative aspect-[1120/630] w-full shadow-xl">
              {/* Frame */}
              <div className="absolute inset-0 z-10">
                <Image
                  src="/images/video-section/video-player.svg"
                  className="h-full w-full object-cover"
                  width={1120}
                  height={675}
                  alt="video-player-frame"
                />
              </div>

              {/* Video Content - Clean percentage-based padding */}
              <div className="absolute inset-0 z-10 px-[1.6%] pt-[1.5%] pb-[1.5%] sm:pt-[1.3%] sm:pb-[1.2%]">
                <div className="relative h-full w-full">
                  <video
                    ref={videoRef}
                    className="h-full w-full rounded-xl object-cover sm:rounded-2xl lg:rounded-3xl"
                    width={1160}
                    height={640}
                    poster="/images/video-section/video-placeholder.png"
                    loop={true}
                    muted={isMuted}
                    playsInline={true}
                    preload="metadata"
                    onMouseEnter={showControlsTemporarily}
                    onMouseMove={showControlsTemporarily}
                  >
                    <source
                      src="https://res.cloudinary.com/ddlmexgah/video/upload/v1760706184/Hubs_Without_Launch_Date_v2_xyvuun.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  {!isPlaying && (
                    <div className="absolute inset-0 z-20 rounded-lg bg-black/50 sm:rounded-2xl lg:rounded-[20px]" />
                  )}
                </div>
              </div>

              {/* Video Controls */}
              <div
                className={cn(
                  "absolute inset-0 z-30 transition-opacity duration-300",
                  {
                    "opacity-100": showControls || !isPlaying,
                    "opacity-0": !showControls && isPlaying,
                  },
                )}
                onMouseEnter={showControlsTemporarily}
                onMouseMove={showControlsTemporarily}
              >
                {/* Play/Pause Button */}
                <Animate className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={togglePlayPause}
                    className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-white/10 to-white/20 shadow-xl backdrop-blur-lg transition-transform hover:scale-105 active:scale-95 lg:h-20 lg:w-20"
                  >
                    <div className="border-cyan from-cyan/80 to-cyan/40 flex h-8 w-8 items-center justify-center rounded-full border bg-gradient-to-b backdrop-blur-xl lg:h-16 lg:w-16">
                      {isPlaying ? (
                        <Pause className="h-4 w-4 text-white lg:h-8 lg:w-8" />
                      ) : (
                        <Image
                          src="/icons/play.svg"
                          className="h-4 w-4 lg:h-8 lg:w-8"
                          width={32}
                          height={32}
                          alt="play-video"
                        />
                      )}
                    </div>
                    <div className="bg-cyan absolute h-8 w-8 blur-2xl lg:h-12 lg:w-12" />
                  </button>
                </Animate>

                {/* Volume Controls */}
                <div className="absolute right-3 bottom-3 p-2 sm:right-5 sm:bottom-5">
                  <button
                    onClick={toggleMute}
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 sm:h-8 sm:w-8"
                  >
                    {isMuted ? (
                      <VolumeX className="h-3 w-3 text-white sm:h-4 sm:w-4" />
                    ) : (
                      <Volume2 className="h-3 w-3 text-white sm:h-4 sm:w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Animate>
      </div>
    </div>
  );
}
