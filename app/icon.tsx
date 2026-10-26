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
          background: '#213555',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          
        }}
      >
        <span style={{ color: '#E5D283', fontSize: 14, fontWeight: 700, letterSpacing: '-0.04em' }}>
          YG
        </span>
      </div>
    ),
    { ...size }
  )
}
