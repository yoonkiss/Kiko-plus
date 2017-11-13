---
layout: post
title: Fruit Feast
tags: [dfs]
---

## Problem

[https://www.acmicpc.net/problem/11964](https://www.acmicpc.net/problem/11964)

## Idea

dfs탐색이되 중복을 막는다.

``` java
static void f(int sum, int flag) {
    if (sum > T) {
        return;
    }
    if (sum > ans) {
        ans = sum;
    }
    if (memo[flag][sum] > 0) {
        return;
    }
    memo[flag][sum]++;

    f(sum + A, flag);
    f(sum + B, flag);
    if (flag == 0) {
        f(sum / 2, 1);
    }
}
```

