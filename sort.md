# sort

## bubbleSort

```javascript
function bubbleSort(arr, sort) {
  const { length } = arr
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (sort(arr[j], arr[j + 1]) > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  console.log(arr)
}
```
