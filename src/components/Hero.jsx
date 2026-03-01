import { useState, useEffect } from 'react'
import iconImg from '../assets/image.png'

function Hero() {
  const [formData, setFormData] = useState({ full_name: '', university_name: '', university_email: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [popup, setPopup] = useState(null)
  const [count, setCount] = useState(null)
  useEffect(() => {
    fetch('http://localhost:5000/api/waitlist/count')
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(() => { })
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async () => {
    const { full_name, university_name, university_email } = formData
    if (!full_name || !university_name || !university_email) {
      setError('Please fill all fields.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('http://localhost:5000/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong.')
      } else {
        setPopup({ name: full_name })
        setFormData({ full_name: '', university_name: '', university_email: '' })
        setCount(prev => prev !== null ? prev + 1 : null)
      }
    } catch {
      setError('Server not reachable. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="w-full max-w-7xl px-4 text-white mx-auto relative pt-[30px] md:pt-[100px] pb-[80px] md:pb-[120px]">
      {popup && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="bg-white text-black rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
            <div className="text-4xl mb-3">🎉</div>
            <h2 className="text-2xl font-extrabold mb-2">You're on the Waitlist!</h2>
            <p className="text-gray-600 mb-6">Hey <strong>{popup.name}</strong>, welcome to Swypd! We'll let you know as soon as we launch.</p>
            <button
              onClick={() => setPopup(null)}
              className="w-full h-[48px] bg-black text-white rounded-xl font-bold hover:opacity-80 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-4xl mx-auto text-center px-2">
        <h1 className="font-funnel font-extrabold leading-[110%] md:leading-[100%] tracking-tight text-center whitespace-nowrap" style={{ fontSize: 'clamp(34px, 6vw, 72px)' }}>
          Social Media, Rebuilt
        </h1>

        <div className="w-fit max-w-full bg-black rounded-[12px] md:rounded-[16px] px-4 md:px-6 py-2 md:py-3 mt-4 mx-auto flex items-center justify-center">
          <h1 className="font-extrabold leading-[1] tracking-tight text-center whitespace-nowrap" style={{ fontFamily: 'Funnel Display', fontSize: 'clamp(24px, 6vw, 72px)' }}>
            for Students.
          </h1>
        </div>

<div className="flex flex-row items-center justify-center gap-4 md:gap-8 mt-6 md:mt-10 px-2 flex-wrap">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="bg-white rounded-full flex-shrink-0 flex items-center justify-center" style={{ width: 'clamp(28px, 3vw, 30px)', height: 'clamp(28px, 3vw, 30px)' }}>
              <img src={iconImg} className="object-contain" style={{ width: 'clamp(16px, 2vw, 18px)', height: 'clamp(16px, 2vw, 18px)' }} alt="icon" />
            </div>
            <div className="flex flex-col items-start leading-tight">
              <span 
                style={{
                  fontFamily: 'Funnel Display',
                  fontSize: '18px',
                  fontWeight: 800,
                  lineHeight: 'normal',
                  color: '#EBF2FC',
                  width: '66px'
                }}
                className=" leading-none"
              >100% Secure</span>
              <span 
                style={{
                  fontFamily: 'Funnel Display',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  color: '#EBF2FC',
                }}
                className="uppercase leading-none mt-2"
              ></span>
            </div>
          </div>
        <div className="w-0.5 bg-white/60 h-8 md:h-[40px] ml-2 md:ml-0"></div>
          <p 
            style={{
              fontFamily: 'Funnel Display',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '100%',
              color: '#EBF2FC',
              width: '193px',
              textAlign: 'left',
              letterSpacing: '0'
            }}
            className="text-center md:text-left"
          >
            Where students connect, collaborate, and pop off.
          </p>
        </div>

        <div className="mt-8 md:mt-12 flex items-center justify-center">
          <div className="w-full max-w-xl z-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Full Name"
                style={{ height: 'clamp(48px, 6vw, 56px)' }}
                className="w-full px-4 md:px-6 rounded-xl 
             bg-[#0D2491]/60 border border-white/20 
             text-[#EBF2FC] placeholder:text-white placeholder:opacity-100
             text-[14px] font-normal leading-[100%] tracking-[0]
             focus:outline-none transition-all"
              />
              <input
                type="text"
                name="university_name"
                value={formData.university_name}
                onChange={handleChange}
                placeholder="University Name"
                style={{ height: 'clamp(48px, 6vw, 56px)' }}
                className="w-full px-4 md:px-6 py-3 rounded-xl bg-[#0D2491]/60 border border-white/20 focus:outline-none placeholder:text-white placeholder:opacity-100 text-white transition-all"
              />
            </div>

            <input
              type="email"
              name="university_email"
              value={formData.university_email}
              onChange={handleChange}
              placeholder="University Email (.edu)"
              style={{ height: 'clamp(48px, 6vw, 56px)' }}
              className="w-full px-4 md:px-6 py-3 rounded-xl bg-[#0D2491]/60 border border-white/20 focus:outline-none placeholder:text-white placeholder:opacity-100 text-white mt-3 md:mt-4 transition-all"
            />

            {error && <p className="text-red-300 text-sm mt-2 text-left">{error}</p>}

            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{ height: 'clamp(52px, 7vw, 60px)', fontSize: 'clamp(15px, 2vw, 18px)' }}
              className="w-full bg-white text-black rounded-xl font-bold hover:scale-[1.01] transition-all mt-4 md:mt-6 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Joining...' : <> Join Waitlist <span style={{ fontSize: 'clamp(16px, 2.2vw, 20px)' }}>→</span> </>}
            </button>

            <div className="mt-6 md:mt-10 flex items-center justify-center">
              <div className="bg-black/40 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-3 border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">Live</span>
                </div>
                <div className="w-px h-3 bg-white/20"></div>
                <p className="text-xs font-medium text-white/80">
                  <strong className="text-white">{count !== null ? count.toLocaleString() : '...'}</strong> on Waitlist
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero