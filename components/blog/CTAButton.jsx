export default function CTAButton({ href, className, children }) {
    return (
      <a 
        href={href}
        className={`cta-button ${className}`}
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          background: '#1a365d',
          color: 'white',
          borderRadius: '6px',
          textDecoration: 'none',
          transition: 'transform 0.2s'
        }}
      >
        {children}
      </a>
    )
  }