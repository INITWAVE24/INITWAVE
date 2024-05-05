// Content.js
import '../App.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

function Content() {
  const [isMounted, setIsMounted] = useState(false)
  const text = 'INTERACT IT'.split(' ')
  const randomText = 'Quality of IT services offered with new, talented individuals'

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="background1">
      <div className="text-div">
        <AnimatePresence initial={false}>
          {isMounted && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {text.map((el, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.75, delay: i / 10 }}
                >
                  {el}{' '}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {randomText}
        </motion.span>
      </div>
    </div>
  )
}

export default Content
