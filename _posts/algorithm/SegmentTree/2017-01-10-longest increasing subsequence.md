---
layout: post
title: 가장 큰 증가 부분 수열
tags: [lis, segment tree, dp]
---
### [가장 큰 증가 부분 수열](https://www.acmicpc.net/problem/11053)

> 수열 A가 주어졌을 때, 가장 긴 증가하는 부분 수열을 구하는 프로그램을 작성하시오.
>
> 예를 들어, 수열 A = {10, 20, 10, 30, 20, 50} 인 경우에 가장 긴 증가하는 부분 수열은 A = {`10`, `20`, 10, `30`, 20, `50`} 이고, 길이는 4이다.

 ## n^2 dp LIS

i 번째 수보다 작은 수 중에서 개수가 가장 긴 개수를 찾는다

i == 30일 때 이전보다 작은 수 10, 20, 10 중 개수 가 가장 긴 경우는 2이므로 +1 해서 3이 된다.

증가 수열에 포함 되는 수 들을 찾으려면, 개수 업데이트가 일어날 시, 최대 갯수가 있었던 인덱스를 저장한다.

``` java
for (int i = 1; i < N; i++) {
    d[i] = 1;
    for (int j = 0; j <= i; j++) {
        // 자신의 현재 값보다 작으면서 갯수가 최대인 값 찾아 갱신
        if (arr[i] > arr[j] && d[i] < d[j] + 1) {
            d[i] = d[j] + 1;
            pos[i] = j;
        }
    }
    if (max < d[i]) {
        max = d[i];
        idx = i;
    }
}
```
pos[1] = 0 <br>
pos[2] = 0 <br>
pos[3] = 1<br>
pos[4] = 0<br>
pos[5] = 3<br>

5 -> 3 -> 1 -> 0

stack 이나 재귀를 통해 수열을 trace 할 수 있다.


## nlogn LIS with binary search

LIS 의 마지막값 < arr[i]: 무조건 추가

LIS 의 마지막 값 > arr[i]: LIS 를 이진탐색으로 arr[i] 보다 작은 수중 에 가장 큰수와 교체한다

A = {4 5 8 6} 

1th lis에 4 추가
2th lis에 5 추가
3th lis에 8 추가
4th 6보다 작은 수 중에서 가장 큰 값과 교체, 즉 5을 6으로 교체

``` java
lis.add(arr[0]);
        
for (int i = 1; i < N; i++) {
    int last = lis.get(lis.size()-1);
    if (last < arr[i]) {
        lis.add(arr[i]);
    } else  {
        int idx = Collections.binarySearch(lis, arr[i]);
        if (idx < 0) 
            idx = -idx -1;
        lis.set(idx,  arr[i]);
    }
}
```

## nlogn LIS with segment tree
[가장 큰 증가 부분 수열](https://www.acmicpc.net/problem/11053)

> 수열 A 의 크기가 N (1 <= N <= 10^6) 일 경우 lis는?

 
