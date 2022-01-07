/*
Lintcode 437. 书籍复印

给定n本书，第i本书有[i]页。有k个人来抄这些书。

这些书排成一行，每个人都可以索取连续一段的书。例如，一个复印机可以连续地将书从第i册复制到第j册，但是他不能复制第1册、第2册和第4册（没有第3册）。

他们在同一时间开始抄书，每抄一页书都要花1分钟。为了让最慢的复印机能在最早的时间完成书的分配，最好的策略是什么？

请返回最慢复印机花费的最短时间。


# 1011. Capacity To Ship Packages Within D Days

*/
function copyBooks(pages, k) {
  let start = 0;
  end = 0;

  for (let i = 0; i < pages.length; ++i) {
    start = max(start, pages[i]);
    end += pages[i];
  }
  // binary Search
  while (start + 1 < end) {
    const mid = start + (end - start) / 2;

    if (canFinish(pages, mid, k)) {
      end = mid;
    } else {
      start = mid;
    }
  }

  return canFinish(pages, start, k) ? start : end;
}

function canFinish(pages, minutes, people) {
  let headcount = 0;
  let unit = minutes;
  let i = 0;

  while (i < pages.size()) {
    headcount++;

    while (i + 1 < pages.size() && unit - pages[i] >= pages[i + 1]) {
      unit -= pages[i];
      i++;
    }

    unit = minutes;
    i++;
  }

  return headcount <= people;
}
