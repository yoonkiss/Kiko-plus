---
layout: post
title: 숫자 게임
tags: [dp, algospot, ta]
---
## Problem
[https://www.algospot.com/judge/problem/read/NUMBERGAME](https://www.algospot.com/judge/problem/read/NUMBERGAME)

## Idea

`f(state): 게임판 상태에 따른 두사람의 최대 점수 차` <br>

A 최대값 = A 선택 - B 최대값<br>

``` c
f(1, n) = max (
    f(1,1) - f(2, n), // 가장왼쪽 선택
    f(n,n) - f(1, n-1), // 가장 오른쪽 선택
    0 - f(3, n), // 왼쪽 2개 제거 if (n-1 >= 1)
    0 - f(1, n-2) // 오른쪽 2개 제거 if (n-1 >= 1)
)
```