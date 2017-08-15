---
layout: post
title: Maximum subarray problem
tags: [dp, ta]
---
## Problem
[https://www.acmicpc.net/problem/10211](https://www.acmicpc.net/problem/10211)

## Summary

> 연속한 수열에서 최대 합을 찾는 문제
> 1 <= N <= 1000, -1000 <= arr[i] <= 1000

## Idea
`d[n] = max(d[n], d[n-1] + arr[n])`

복잡도: O(n) 

대략적으로 존재하는 부분 문제의 수 x 한 부분 문제를 풀 때 필요한 반복문의 수행 횟수

## Related
* [부분집합의 합](/2016-10-20/SumSubset/)
