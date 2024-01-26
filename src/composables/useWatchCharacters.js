import { watch } from "vue"

export function useWatchCharacters(valueToWatch){
  watch(valueToWatch, (noteLength) => {
    if (noteLength.length === 50) {
      alert('Only 450 Characters Allowed')
    }
  })
}