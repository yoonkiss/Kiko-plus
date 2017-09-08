---
layout: post
title: 숫자 게임
tags: [dp, algospot, ta]
---
## Problem
[https://www.algospot.com/judge/problem/read/NUMBERGAME](https://www.algospot.com/judge/problem/read/NUMBERGAME)

## Idea
게임의 상태가 변경된다
A와 B 게임 순서가 존재
A와 B중 누가 이기는가
A와 B 게임 점수차가 최대인 경우

A 차례의 게임 상태에 따른 최대 점수차 = 이전의 B 차례의 게임 상태에 따른 최대 점수차 + 게임 상태 변경 delta

`f(state): 현재 게임판 상태에 따른 두사람의 최대 점수 차` 로 정의 한다면:<br>

A차례 일 경우 A 최대값 = A 선택 - B 최대값
직전의 B 차례의 일 경우 B 최대 값 = B 선택 - A의 최대 값 = `-f(state)`

``` c
f(1, n) = max (
    board(0,1) - f(2, n), // 가장왼쪽 선택
    board(n-1, n) - f(1, n-1), // 가장 오른쪽 선택
    0 - f(3, n), // 왼쪽 2개 제거 if (n-1 >= 1) // 버리는 카드니 점수에 영향없음
    0 - f(1, n-2) // 오른쪽 2개 제거 if (n-1 >= 1)
)
```