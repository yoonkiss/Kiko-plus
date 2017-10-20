---
layout: post
title: North-Western Winds
tags: ['segment tree', compress, 2d]
---
## Problem

[https://www.acmicpc.net/problem/5419](https://www.acmicpc.net/problem/5419)

## Summary

> 북서풍을 타고 항해할 수 있는 섬의 쌍의 수 구하기<br>
> 섬의 수 n (1 ≤ n ≤ 75000) 섬의 좌표 xi, yi (-10^9 ≤ xi, yi ≤ 10^9)

## Idea
* x 오름차순, y 내림차순 정렬
* y 구간을 tree로 표현해 좌표를 누적 구간합으로 표현, y값이 작은 섬들 개수를 세면 된다
* y 구간이 크므로 좌표를 압축할 필요가 있다

## Related
* [달리기](https://www.acmicpc.net/problem/2517)
