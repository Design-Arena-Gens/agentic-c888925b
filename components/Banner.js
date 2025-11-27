import React from 'react';

function Doodles({ accentColor }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1200 400"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0 }}
    >
      {/* Top-left arcs */}
      <g opacity="0.18" stroke={accentColor} fill="none" strokeWidth="6" strokeLinecap="round">
        <path d="M60,80 C140,10 240,10 320,80" />
        <path d="M60,120 C160,40 220,40 320,120" />
      </g>

      {/* Bottom-right squiggle */}
      <g opacity="0.18" stroke={accentColor} fill="none" strokeWidth="6" strokeLinecap="round">
        <path d="M920,320 q40,-40 80,0 t80,0" />
      </g>

      {/* Soft center crosshair dots */}
      <g fill={accentColor} opacity="0.08">
        <circle cx="600" cy="200" r="3" />
        <circle cx="570" cy="200" r="2" />
        <circle cx="630" cy="200" r="2" />
      </g>
    </svg>
  );
}

export default function Banner({
  title,
  subtitle,
  bgColor,
  accentColor,
  shape = 'line',
  width = 1200,
  height = 400
}) {
  const borderRadius = 18;

  return (
    <div
      role="img"
      aria-label="Banni?re minimaliste"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: bgColor,
        border: '1px solid #e5e7eb',
        borderRadius,
        overflow: 'hidden',
        boxShadow: '0 2px 6px rgba(15, 23, 42, 0.06)'
      }}
    >
      {/* Accent line or block */}
      {shape === 'line' ? (
        <div
          style={{
            position: 'absolute',
            left: 28,
            top: 28,
            width: Math.max(140, Math.min(240, width * 0.18)),
            height: 6,
            borderRadius: 999,
            background: accentColor,
            opacity: 0.9
          }}
        />
      ) : (
        <div
          style={{
            position: 'absolute',
            left: 24,
            top: 24,
            width: 56,
            height: 56,
            borderRadius: 12,
            background: accentColor,
            opacity: 0.9
          }}
        />
      )}

      {/* Doodles (very light) */}
      <Doodles accentColor={accentColor} />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          height: '100%',
          padding: '72px 72px'
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: Math.max(28, Math.min(72, width * 0.06)),
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#0f172a',
            fontWeight: 700
          }}
        >
          {title}
        </h1>
        <p
          style={{
            marginTop: 12,
            fontSize: Math.max(14, Math.min(28, width * 0.025)),
            color: '#475569',
            maxWidth: Math.min(780, width * 0.7)
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}

