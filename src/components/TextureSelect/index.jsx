import { useState, useEffect } from 'react'
import { useStore } from '../../hooks/useStore'
import * as images from '../../assets/images'
import { useKeyboard } from '../../hooks/useKeyboard'

export const TextureSelector = () => {
  const [visible, setVisible] = useState(true)
  const [texture, setTexture] = useStore(state => [state.texture, state.setTexture])

  const { dirt, grass, glass, wood, log } = useKeyboard()

  useEffect(() => {
    const options = { dirt, grass, glass, wood, log }
    const selectedTexture = Object.entries(options).find(([texture, isEnable]) => isEnable)
    if (selectedTexture) {
      const [textureName] = selectedTexture
      setTexture(textureName)
    }
  }, [dirt, grass, glass, wood, log])

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false)
    }, 1000)
    setVisible(true)

    return () => {
      clearTimeout(visibilityTimeout)
    }
  }, [texture])

  return (
    <div className={`texture-selector ${visible ? '' : 'hidden'}`}>
      {
      Object.entries(images).map(([textureName, img]) => {
        return (
          <img src={img} className={texture === textureName.replace('Img', '') ? 'selected' : ''} alt={textureName} key='textureName' />
        )
      })
    }
    </div>
  )
}
