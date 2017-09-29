function bubbleSort1(nums)
{
    for (let i = 0; i < nums.length - 1; i++)
    {
        for (let j = 0; j < nums.length - i - 1; j++)
        {
            if (data[j] > data[j + 1])
                Swap(data, j, j + 1);
        }
    }
}

function bubbleSort1(nums)
{
    for (let i = data.Count - 1; i > 0; i--)
    {
        for (let j = 0; j < i; j++)
        {
            if (data[j] > data[j + 1])
                swap(data, j, j + 1);
        }
    }
}

function swap(nums, i, j)
{
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}