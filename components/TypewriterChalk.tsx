"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TypewriterChalk = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Combine words into one text
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => {
    return (
      <div className="inline-flex flex-nowrap whitespace-nowrap">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-flex flex-nowrap">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.1,
                    delay: idx * 0.5 + index * 0.05,
                  }}
                  className={cn(
                    `dark:text-white text-white`,
                    word.className
                  )}
                  key={`char-${index}`}
                >
                  {char}
                </motion.span>
              ))}
              <span>&nbsp;</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex items-center justify-center w-full", className)}>
      <motion.div
        className="overflow-hidden whitespace-nowrap"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 0.5,
        }}
      >
        <div
          className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold whitespace-nowrap inline-block"
          style={{
            fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
            fontStyle: "italic",
            letterSpacing: "0.05em",
          }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-12 md:h-16 lg:h-20 bg-transparent ml-2",
          cursorClassName
        )}
      >
        {/* Chalk SVG as cursor */}
        <svg
          width="50"
          height="100"
          viewBox="0 0 50 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: "rotate(-15deg)",
            filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5)) drop-shadow(0 0 10px rgba(255,255,255,0.3))",
          }}
        >
          {/* Chalk body */}
          <rect x="12" y="15" width="26" height="65" rx="2" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="1.5"/>
          <rect x="12" y="15" width="26" height="10" rx="2" fill="#F5F5F5"/>
          {/* Chalk tip */}
          <path d="M12 80 L25 90 L38 80" fill="#FFFFFF" stroke="#D0D0D0" strokeWidth="1.5"/>
          {/* Chalk texture lines */}
          <line x1="14" y1="30" x2="36" y2="30" stroke="#EFEFEF" strokeWidth="0.8"/>
          <line x1="14" y1="42" x2="36" y2="42" stroke="#EFEFEF" strokeWidth="0.8"/>
          <line x1="14" y1="54" x2="36" y2="54" stroke="#EFEFEF" strokeWidth="0.8"/>
          <line x1="14" y1="66" x2="36" y2="66" stroke="#EFEFEF" strokeWidth="0.8"/>
          {/* Chalk dust particles */}
          <circle cx="8" cy="85" r="2" fill="#FFFFFF" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1s" repeatCount="indefinite"/>
          </circle>
          <circle cx="42" cy="83" r="1.5" fill="#FFFFFF" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.2;0.5" dur="1.2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="18" cy="88" r="1.2" fill="#FFFFFF" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.3;0.6" dur="0.8s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </motion.span>
    </div>
  );
};
