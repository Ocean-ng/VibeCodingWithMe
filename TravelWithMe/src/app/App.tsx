import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

interface SectionProps {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  image: string;
  align?: 'right' | 'center';
  isFirst?: boolean;
  containerRef: React.RefObject<HTMLElement | null>;
}

function ParallaxSection({ title, subtitle, content, image, align = 'right', isFirst = false, containerRef }: SectionProps) {
  const ref = useRef(null);
  
  // Very subtle parallax effect to maintain the uncropped wide-angle view
  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  // Determine alignment classes
  const alignmentClasses = align === 'center'
    ? 'justify-center items-center p-6 md:p-12'
    : 'justify-end items-end p-6 md:p-12 lg:p-16 lg:pr-24 lg:pb-24';

  const gradientClasses = align === 'center'
    ? 'bg-black/20' 
    : 'bg-gradient-to-tl from-black/60 via-transparent to-transparent opacity-70';

  return (
    <section ref={ref} className="relative h-full min-h-full w-full overflow-hidden flex flex-col snap-start bg-[#050505]">
      {/* Background Image Layer */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[108%] -top-[4%] z-0">
        <ImageWithFallback 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
        {/* Subtle gradient to aid text legibility without obscuring the panorama */}
        <div className={`absolute inset-0 pointer-events-none ${gradientClasses}`}></div>
      </motion.div>

      {/* Content Layer */}
      <div className={`relative z-10 w-full h-full flex flex-col pointer-events-none ${alignmentClasses}`}>
        
        {isFirst && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 pointer-events-none"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase mb-3 font-light drop-shadow-md">
              Scroll to envision
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4 drop-shadow-md" />
            </motion.div>
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          className={`w-full pointer-events-auto backdrop-blur-xl bg-black/30 border border-white/10 shadow-2xl rounded-2xl p-6 md:p-8 
            ${align === 'center' ? 'max-w-md lg:max-w-lg text-center' : 'max-w-xs md:max-w-sm lg:max-w-[420px]'}`}
        >
          <h2 className={`text-[20px] md:text-[24px] text-white font-extralight tracking-wide ${subtitle ? 'mb-1' : 'mb-4 border-b border-white/10 pb-3'}`}>
            {title}
          </h2>
          
          {subtitle && (
            <p className="text-[10px] md:text-[11px] text-white/60 uppercase tracking-widest mb-4 border-b border-white/10 pb-4 font-medium">
              {subtitle}
            </p>
          )}

          <p className="text-[14px] md:text-[15px] text-white/80 leading-relaxed font-light tracking-wide text-justify">
            {content}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  const containerRef = useRef<HTMLElement>(null);

  const sections = [
    {
      id: 1,
      title: "Nguyễn Thị Thúy Nga",
      subtitle: "Information Security Student | Wanderer at Heart",
      image: "https://images.unsplash.com/photo-1727123322225-2f73d86113da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXN0eSUyMG1vdW50YWlucyUyMGV1cm9wZXxlbnwxfHx8fDE3Nzc0Nzg3NDl8MA&ixlib=rb-4.1.0&q=100&w=3840",
      content: "Hi, I'm Nga. By day, I am a sophomore immersed in the intense world of Information Security - running pentests, analyzing vulnerabilities, and configuring Blue Team defenses. But beyond the glow of the terminal screen, my soul finds its ultimate peace in the breathtaking vastness of nature. Whenever I look at these serene landscapes, a profound sense of chill washes over me. It’s a surreal déjà vu - a quiet whisper telling me that a part of my soul has already been there, just waiting for the rest of me to return.",
      align: "right" as const
    },
    {
      id: 2,
      title: "Lauterbrunnen (Switzerland)",
      image: "https://images.unsplash.com/photo-1681374275497-38adcf536e4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYXV0ZXJicnVubmVuJTIwU3dpdHplcmxhbmR8ZW58MXx8fHwxNzc3NDc3ODM0fDA&ixlib=rb-4.1.0&q=100&w=3840",
      content: "A valley of 72 cascading waterfalls, where towering Alpine cliffs cradle absolute silence. Here, the pursuit of financial freedom translates into days spent simply breathing in the crisp, unhurried air. Every hour of dedicated study brings you closer to mornings veiled in this profound tranquility.",
      align: "right" as const
    },
    {
      id: 3,
      title: "Giethoorn (Netherlands)",
      image: "https://images.unsplash.com/photo-1628358393500-7b8563cc4d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaWV0aG9vcm4lMjBOZXRoZXJsYW5kc3xlbnwxfHx8fDE3Nzc0Nzc4Mzd8MA&ixlib=rb-4.1.0&q=100&w=3840",
      content: "Roads yield to gentle canals in this serene village. The soft lapping of water against wooden boats serves as a reminder that wealth is not just capital, but the ultimate agency over your time. Your relentless focus today secures a future moving at the gentle pace of a Giethoorn stream.",
      align: "right" as const
    },
    {
      id: 4,
      title: "Lapland (Finland)",
      image: "https://images.unsplash.com/photo-1551272745-fc594be54b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYXBsYW5kJTIwRmlubGFuZCUyMEF1cm9yYSUyMEJvcmVhbGlzfGVufDF8fHx8MTc3NzQ3Nzg0MHww&ixlib=rb-4.1.0&q=100&w=3840",
      content: "Under the brilliant, dancing lights of the Aurora Borealis, the frozen wilderness is deeply humbling. The sacrifices made in quiet libraries and late-night study sessions manifest into the privilege of witnessing the world's most spectacular phenomena, completely unburdened by worldly worries.",
      align: "right" as const
    },
    {
      id: 5,
      title: "Hallstatt (Austria)",
      image: "https://images.unsplash.com/photo-1583679070487-d666f0d62eb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIYWxsc3RhdHQlMjBBdXN0cmlhJTIwYWxwaW5lJTIwbGFrZSUyMHdpZGUlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc3NDc4Mjg5fDA&ixlib=rb-4.1.0&q=100&w=3840",
      content: "Perched delicately on the edge of an alpine lake, Hallstatt mirrors its ancient, majestic surroundings. True financial independence allows you to seamlessly integrate into such timeless beauty. Let the vision of these reflective, serene waters steady your resolve when the path feels arduous.",
      align: "right" as const
    },
    {
      id: 6,
      title: "Provence (France)",
      image: "https://images.unsplash.com/photo-1609170784824-c1b0cc991a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQcm92ZW5jZSUyMEZyYW5jZSUyMGxhdmVuZGVyJTIwZmllbGRzJTIwd2lkZXxlbnwxfHx8fDE3Nzc0NzgyODl8MA&ixlib=rb-4.1.0&q=100&w=3840",
      content: "Endless rows of blooming lavender stretching toward the horizon. Here, luxury is the scent of the summer breeze and the freedom to wander aimlessly. Your dedication is the seed from which this vibrant, fragrant future will inevitably blossom.",
      align: "right" as const
    },
    {
      id: 7,
      title: "Lofoten Islands (Norway)",
      image: "https://images.unsplash.com/photo-1656490247857-cfad59341c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMb2ZvdGVuJTIwSXNsYW5kcyUyME5vcndheXxlbnwxfHx8fDE3Nzc0NzgyOTV8MA&ixlib=rb-4.1.0&q=100&w=3840",
      content: "Red cabins stand proudly against sheer granite peaks that plunge into the frigid, majestic fjords. Lofoten is wild, dramatic, and intensely peaceful. The rugged determination you cultivate now prepares you to stand firmly and calmly anywhere in the world.",
      align: "right" as const
    },
    {
      id: 8,
      title: "Santorini (Greece)",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYW50b3JpbmklMjBHcmVlY2V8ZW58MXx8fHwxNzc3NDc4Mjk1fDA&ixlib=rb-4.1.0&q=100&w=3840",
      content: "White-washed cubic homes cascading down cliffs into the impossibly blue Aegean Sea. The warmth of the Mediterranean sun is the reward for relentless perseverance. Each page turned and concept mastered builds the foundation for these sun-drenched, carefree afternoons.",
      align: "right" as const
    },
    {
      id: 9,
      title: "Isle of Skye (Scotland)",
      image: "https://images.unsplash.com/photo-1642278828367-81d7406919e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJc2xlJTIwb2YlMjBTa3llJTIwU2NvdGxhbmR8ZW58MXx8fHwxNzc3NDc4Mjk1fDA&ixlib=rb-4.1.0&q=100&w=3840",
      content: "Misty, ancient green hills and the crystal-clear waters of the Fairy Pools. There is a deep, grounding magic in these rugged landscapes. Financial freedom grants you the liberty to seek out these remote corners of the earth, far removed from the noise of the everyday.",
      align: "right" as const
    },
    {
      id: 10,
      title: "Plitvice Lakes (Croatia)",
      image: "https://images.unsplash.com/photo-1759526052584-9b8ab2c272d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQbGl0dmljZSUyMExha2VzJTIwQ3JvYXRpYSUyMHdhdGVyZmFsbHMlMjB0dXJxdW9pc2V8ZW58MXx8fHwxNzc3NDc4MjkxfDA&ixlib=rb-4.1.0&q=100&w=3840",
      content: "A symphony of turquoise cascading waterfalls cutting through lush, emerald forests. Plitvice is a testament to the patient, persistent force of nature. Just as water carves stone, your consistent, daily habits carve out a breathtaking, abundant future.",
      align: "right" as const
    },
    {
      id: 11,
      title: "The Late Nights Will Pay Off",
      image: "https://images.unsplash.com/photo-1764473141092-b2911e89e454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY2FsbSUyMHN1bnNldCUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Nzc0Nzg3NTB8MA&ixlib=rb-4.1.0&q=100&w=3840",
      content: "Every complex lab, every line of code, and every stressful exam is a stepping stone. I am actively manifesting a future where this relentless hard work translates into absolute financial freedom. I will earn the wealth required to give my family the beautiful, comfortable life they deserve, and to grant myself the ultimate privilege: a passport full of stamps. I will wander the globe, breathe the air of the places I’ve dreamed of, and finally step into the landscapes my soul already knows. Keep grinding. The world is yours.",
      align: "center" as const
    }
  ];

  return (
    <div className="fixed inset-0 bg-black text-white overflow-hidden flex flex-col font-sans selection:bg-white/20">
      {/* Scrollable Container */}
      <main 
        ref={containerRef} 
        className="flex-1 w-full h-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory relative scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {sections.map((section, index) => (
          <ParallaxSection
            key={section.id}
            id={section.id}
            isFirst={index === 0}
            image={section.image}
            title={section.title}
            subtitle={section.subtitle}
            content={section.content}
            align={section.align}
            containerRef={containerRef}
          />
        ))}
      </main>
    </div>
  );
}
