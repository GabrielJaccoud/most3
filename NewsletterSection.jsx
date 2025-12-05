import { useState } from 'react'

export default function NewsletterSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      // Chamar a API do backend
      const response = await fetch('https://3000-im83jzrs6squ22a8dup8o-abfb5eaf.manusvm.computer/api/trpc/newsletter.subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'newsletter.subscribe',
          params: {
            input: {
              name,
              email,
            },
          },
        }),
      })

      const data = await response.json()

      if (data.result?.data?.success) {
        setMessageType('success')
        setMessage(data.result.data.message)
        setName('')
        setEmail('')
      } else {
        setMessageType('error')
        setMessage(data.result?.data?.message || 'Erro ao processar inscrição')
      }
    } catch (error) {
      console.error('Erro:', error)
      setMessageType('error')
      setMessage('Erro ao processar inscrição. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="newsletter" className="section newsletter-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">💌 Newsletter</h2>
          <p className="section-subtitle">Receba novidades do mundo de Temperópolis</p>
        </div>
        <div className="newsletter-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{width: '100%'}}
              disabled={isSubmitting}
            >
              <span>✨</span>
              {isSubmitting ? 'Processando...' : 'Quero receber!'}
            </button>
          </form>
          {message && (
            <div 
              style={{
                marginTop: '1rem',
                padding: '1rem',
                borderRadius: '0.5rem',
                backgroundColor: messageType === 'success' ? '#d4edda' : '#f8d7da',
                color: messageType === 'success' ? '#155724' : '#721c24',
                border: `1px solid ${messageType === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
              }}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
