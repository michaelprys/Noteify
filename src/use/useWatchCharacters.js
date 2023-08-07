import { watch } from "vue";

export function useWatchCharacters(valueToWatch) {
  watch(valueToWatch, (newValue) => {
    if (newValue.length >= 100) {
      alert("You have reached 100");
    }
  });
}
