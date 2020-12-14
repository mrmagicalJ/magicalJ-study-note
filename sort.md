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
  return arr
}
```

## quickSort

```javascript
function quickSort(arr, sort) {
  const { length } = arr
  // 终止条件
  if (length < 2) {
    return arr
  }
  // 递归条件
  const base = arr.pop()
  const left = []
  const right = []
  for(let item of arr) {
    if (sort(item, base) > 0) {
      right.push(item)
    } else {
      left.push(item)
    }
  }

  return [...quickSort(left, sort), base, ...quickSort(right, sort)]
}
```

## mergeSort

```javascript
function mergeSort(arr, sort) {
  const { length } = arr
  // 终止条件
  if (length < 2) return arr

  function merge(left, right) {
    const res = []
    const { length: leftLength } = left
    const { length: rightLength } = right
    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex < leftLength && rightIndex < rightLength) {
      if (sort(left[leftIndex], right[rightIndex]) < 0) {
        res.push(left[leftIndex++])
      } else {
        res.push(right[rightIndex++])
      }
    }
    for (; leftIndex < leftLength; leftIndex++) {
      res.push(left[leftIndex])
    }
    for (; rightIndex < rightLength; rightIndex++) {
      res.push(right[rightIndex])
    }
    return res
  }

  // 递归条件
  const index = Math.floor(length / 2)
  const left = [...arr]
  const right = left.splice(index)

  return merge(mergeSort(left, sort), mergeSort(right, sort))
}
```
