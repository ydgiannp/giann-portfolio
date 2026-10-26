import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#0b0b0b',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse 55% 45% at 15% 70%, rgba(224,101,26,0.15) 0%, transparent 65%)',
          }}
        />
        <p style={{ color: '#e0651a', fontSize: 14, letterSpacing: '0.15em', marginBottom: 24, textTransform: 'uppercase' }}>
          Part-time CTO · Jakarta, Indonesia
        </p>
        <p style={{ color: '#f0f0f0', fontSize: 80, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, margin: 0 }}>
          Yulius Giann
        </p>
        <p style={{ color: 'rgba(240,240,240,0.4)', fontSize: 22, marginTop: 24, lineHeight: 1.5 }}>
          You run the business. I&apos;ll handle the tech.
        </p>
        <p style={{ position: 'absolute', right: 80, bottom: 72, color: '#e0651a', fontSize: 32, fontWeight: 700, letterSpacing: '-0.04em' }}>
          YG
        </p>
      </div>
    ),
    { ...size }
  )
}
