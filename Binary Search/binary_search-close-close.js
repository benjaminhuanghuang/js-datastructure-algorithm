function BinarySearch2 (arr, target) {
    let from = 0
    let to = arr.length - 1
    while (from <= to) {
        let mid = Math.floor((from + to)/2)
        if (arr[mid] > target) {
            to = mid - 1
        } else if (arr[mid] < target) {
            from = mid + 1
        } else {
            return mid
        }
    }

    return -1
}
