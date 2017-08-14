---
layout: post
title: Maximum subarray problem
tags: [full search, ta]
---
### [부분집합의 합](https://www.acmicpc.net/problem/1182)

> 공집합이 아닌 부분집합 중 합이 S가 되는 부분 집합의 개수
> 1≤ N ≤20, |S| ≤ 1,000,000

각 원소에 대해 고르는 경우와 고르지 않는 경우가 존재

O(2^N)

``` java
private static void f(int idx, int sum) {
    if (idx == N) {
        if (sum == S) {
            ans++;
        }
        return;
    }
    f(idx + 1, sum + arr[idx]);
    f(idx + 1, sum);
}
```

