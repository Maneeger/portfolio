// RingGlow.js (or RingGlow.tsx)
import React from 'react';

/**
 * A React component that renders a glowing circular ring.
 * The ring can have a custom size, glow color, glow intensity,
 * border thickness, and an optional pulsing animation.
 *
 * @param {object} props - The component props.
 * @param {number} [props.size=200] - The width and height of the ring in pixels.
 * @param {string} [props.glowColor='cyan'] - The color of the glow effect.
 * @param {number} [props.glowIntensity=30] - The blur radius of the outer glow in pixels.
 * @param {number} [props.borderThickness=10] - The thickness of the visible ring border in pixels.
 * @param {boolean} [props.pulsing=false] - If true, the ring will have a subtle pulsing animation.
 * @param {number} [props.pulseSpeed=2] - The duration of one pulse cycle in seconds (if pulsing is true).
 * @param {React.ReactNode} [props.children] - Content to be displayed inside the ring.
 */
const RingGlow = ({
  size = 200,
  glowColor = 'cyan',
  glowIntensity = 30,
  borderThickness = 10,
  pulsing = false,
  pulseSpeed = 2,
  children,
}) => {
  // Calculate the inner radius for the transparent center.
  // The effective "border" is created by the combination of
  // an inner shadow and an outer shadow.
  // The outer radius of the visible ring is size / 2.
  // The inner radius of the visible ring is (size / 2) - borderThickness.

  // Dynamic style for the main div to control size and the core shadow.
  // The boxShadow creates the hollow effect and the glow:
  // - inset 0 0 0 ${borderThickness}px ${glowColor} acts as the inner visible border.
  // - 0 0 ${glowIntensity}px ${glowColor} creates the primary outer glow.
  // - 0 0 ${glowIntensity / 2}px ${glowColor} adds a tighter glow for more intensity.
  const ringStyles = {
    width: `${size}px`,
    height: `${size}px`,
    boxShadow: `
      inset 0 0 0 ${borderThickness}px ${glowColor}, /* Inner "border" part of the glow */
      0 0 ${glowIntensity}px ${glowColor},           /* Main outer glow */
      0 0 ${glowIntensity / 2}px ${glowColor}         /* Closer outer glow for depth */
    `,
    transition: 'box-shadow 0.3s ease-in-out', // Smooth transition for any hover effects if added
  };

  return (
    <div
      className={`
        relative
        rounded-full         /* Makes it a perfect circle */
        flex items-center justify-center /* Centers content horizontally and vertically */
        overflow-hidden      /* Ensures shadow/content stays within bounds */
        ${pulsing ? 'animate-pulse-glow' : ''} /* Apply pulsing animation class */
      `}
      style={ringStyles}
    >
      {/* Content slot */}
      <div className="relative z-10"> {/* Ensure children are above any pseudo-elements or shadows */}
        {children}
      </div>

      {/* Define the pulsing animation using style jsx */}
      {pulsing && (
        <style jsx>{`
          @keyframes pulse-glow {
            0%, 100% {
              box-shadow:
                inset 0 0 0 ${borderThickness}px ${glowColor},
                0 0 ${glowIntensity}px ${glowColor},
                0 0 ${glowIntensity / 2}px ${glowColor};
            }
            50% {
              box-shadow:
                inset 0 0 0 ${borderThickness + 2}px ${glowColor}, /* Slight increase in border thickness */
                0 0 ${glowIntensity * 1.5}px ${glowColor},         /* More intense glow */
                0 0 ${glowIntensity}px ${glowColor};
            }
          }
          .animate-pulse-glow {
            animation: pulse-glow ${pulseSpeed}s infinite alternate;
          }
        `}</style>
      )}
    </div>
  );
};
export default RingGlow