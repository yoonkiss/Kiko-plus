---
layout: post
title: Largest Rectangle
tags: ['segment tree', 'divide and comquer']
---
## Problem

[https://www.acmicpc.net/problem/6549](https://www.acmicpc.net/problem/6549)

## Summary

> 히스토그램에서 모든 막대의 너비는 1이고, 높이는 hi일 때 <br>
> 모든 막대 x에 대해서, x를 높이로 하면서 만들 수 있는 가장 큰 직사각형을 찾기<br>
> (1 ≤ n ≤ 100,000) h1, ..., hn (0 ≤ hi ≤ 1000000000)


## Idea

<img src='https://www.acmicpc.net/upload/images/histogram.png'><br>

* 전 구간 중 가장 높이가 작은 것으로 만들 수 있는 총 넓이를 구한다
* 가장 작은 구간을 기준으로 좌/우 반복한다

``` java
static long largest(int s, int e) {
    int x = e -s +1;
    int idx = query(s, e);
    long size = x * arr[idx];
    
    if (s <= idx-1) {
        long t = largest(s, idx-1);
        if (size < t) {
            size = t;
        }
    }
    if (idx+1 <= e) {
        long t = largest(idx+1, e);
        if (size < t) {
            size = t;
        }
    }
    return size;
}
```
