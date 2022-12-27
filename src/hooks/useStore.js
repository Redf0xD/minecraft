import create from 'zustand'

export const useStore = create(set => ({
  texture: 'dirt',
  cubes: [{
    id: window.crypto.randomUUID(),
    pos: [1, 1, 1],
    texture: 'dirt'
  }],
  addCube: (x, y, z) => {
    set(state => ({
      cubes: [...state.cubes, {
        id: window.crypto.randomUUID(),
        texture: state.texture,
        pos: [x, y, z]
      }]
    }))
  },
  removeCube: (id) => {
    set(state => ({
      cubes: state.cubes.filter(cube => cube.id !== id)
    }))
  },
  setTexture: (texture) => {
    set(() => ({
      texture
    }))
  },
  saveWorld: () => {}
}))
