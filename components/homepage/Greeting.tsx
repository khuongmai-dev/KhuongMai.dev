'use client'
import React from 'react'
import Typed from 'typed.js'
// import Emoji from '@/components/twemoji'
import Link from 'next/link'

const Greetings = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef<Typed | null>(null)

  React.useEffect(() => {
    const options = {
      strings: [
        'I was born in Ha Noi, Vietnam.',
        'I love web development.',
        'I work mostly with JS/TS technologies.',
        "I'm a big fan of React.",
        "I'm a sport guy. I like playing soccer ⚽️",
        'I love watching soccer.',
        'I love playing video games 🎮. PES is my favorite one',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    }

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current?.destroy()
    }
  }, [])

  return (
    <div className="lg:mb-10 lg:mt-10">
      <h1 className="to-white-400 my-10 bg-cyan-500 bg-gradient-to-r bg-clip-text text-7xl font-extrabold text-transparent dark:to-blue-500">
        Hi Friends,
      </h1>
      <div className="dark:prose-dark prose lg:prose-lg">
        <p>
          Welcome! I’m <b>Khuong Mai</b> - a passionate Web Developer in Canada.
        </p>
        <div className="type-wrap">
          <span style={{ whiteSpace: 'pre' }} ref={el} />
          <br />
        </div>

        <p>
          I started learning to code in 2018 and my first application I have built was a simple
          application to control graphic effects on TV news studio.
        </p>

        <p>I have a passion for JS/TS, web dev, and eCommerce.</p>
      </div>
    </div>
  )
}

export default Greetings
