'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'Piyush sharma',
      designation: 'Guitar Instructor',
      image:
        '/piyush.png',
    },
    {
      id: 2,
      name: 'Hardika',
      designation: 'Vocal Coach',
      image:
        '/avtar9.png',
    },
    {
      id: 3,
      name: 'Ravi',
      designation: 'Piano Teacher',
      image:
        '/avtar2.png',
    },
    {
      id: 4,
      name: 'Siddhant',
      designation: 'Drumming Expert',
      image:
        '/avtar12.png',
    },
  ];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors