'use client'
import { useRef, useLayoutEffect} from "react"
import gsap from "gsap"

export default function Hero() {
    const particlesRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.context(() => {
            //Crear particulas
            const particlesContainer = particlesRef.current;
            if(particlesContainer){
                for(let i = 0; i < 50; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'absolute w-1 h-1 bg-neutral-50 rounded-full';
                    particle.style.left = `${Math.random() * 100}%`;
                    particle.style.top = `${Math.random() * 100}%`;
                    particle.style.filter = 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.6))';
                    particlesContainer.appendChild(particle);

                    gsap.to(particle, {
                        x: 'random(-100, 100)',
                        y: 'random(-100, 100)',
                        opacity: 'random(0.1, 0.2)',
                        duration: 'random(2, 4)',
                        repeat: -1,
                        yoyo: true,
                        ease: 'none'
                    });
                }
            }
            if(containerRef.current){
                containerRef.current.addEventListener('mousemove', (e) => {
                    const { clientX, clientY } = e;
                    const { width, height } = containerRef.current!.getBoundingClientRect();
                    const x = (clientX / width - 0.5) * 50;
                    const y = (clientY / height - 0.5) *50;

                    gsap.to(particlesRef.current, {
                        x,
                        y,
                        duration: 1,
                        ease: 'power2.out'
                    })
                })
            }
        }, containerRef)
    }, [])
  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden">
        <div ref={particlesRef} className="absolute inset-0 w-full h-full overflow-hidden">

        </div>
    </section>
  )
}
