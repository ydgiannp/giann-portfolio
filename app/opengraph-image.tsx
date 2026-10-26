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
          background: '#213555',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        <p style={{ color: '#F3F5F8', fontSize: 28, fontWeight: 700, margin: 0 }}>
          Yulius Giann, Part-time CTO
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ color: '#B4C3D8', fontSize: 104, fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 0.95, margin: 0 }}>
            You run the business.
          </p>
          <p style={{ color: '#E5D283', fontSize: 104, fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 0.95, margin: 0 }}>
            I&apos;ll handle the tech.
          </p>
        </div>
      </div>
    ),
    { ...size }
  )
}
