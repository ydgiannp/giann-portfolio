import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#0b0b0b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
        }}
      >
        <span style={{ color: '#e0651a', fontSize: 14, fontWeight: 700, letterSpacing: '-0.04em' }}>
          YG
        </span>
      </div>
    ),
    { ...size }
  )
}
