# [167. 两数之和 II - 输入有序数组](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)

```javascript
var twoSum = function(numbers, target) {
  const { length } = numbers
  let index1 = 0
  let index2 = 1

  for(; index1 < length; index1++) {
    for (index2 = index1 + 1; index2 < length; index2++) {
      if (numbers[index1] + numbers[index2] === target) {
        return [index1 + 1, index2 + 1]
      } else if (numbers[index1] + numbers[index2] > target) {
        break;
      }
    }
  }
};

var twoSum = function(numbers, target) {
  const { length } = numbers
  let index1 = 0
  let index2 = 1

  const dic = {}
  numbers.forEach((item, index) => {
    dic[item] = index + 1
  })

  for(; index1 < length; index1++) {
    index2 = dic[target - numbers[index1]]
    if (index2 && index2 > index1 + 1) return [index1+1, index2]
  }
};
```
