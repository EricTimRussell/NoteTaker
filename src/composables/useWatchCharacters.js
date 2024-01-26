import { watch, watchEffect } from "vue"


export function useWatchCharacters(valueToWatch){
  watchEffect(() => {
    if (valueToWatch.content.length === 450) {
      alert("Max Note Length of 450 Characters");
    }
  });
}