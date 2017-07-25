---
layout: post
title: Longest incresing subsequence
category: [Algorithm]
---

1. n^2 dp LIS

수열 3 2 1 4 5 2 3 5 3 6 4
개수 1 1 1 2 3 2 3 4 3 5 4

key: i 번째 수보다 작은 수 중에서 개수가 가장 긴 개수를 찾는다

4일 때 이전보다 작은 수 3 2 1 인 것 것중 개수 가 가장 긴 경우는 모두 1이므로 +1 해서 2가 된다.

path를 저장하려면 개수 업데이트 시 자신보다 작은 이전의 값 중 최대개수가 있었던 인덱스를 저장한다

http://blog.naver.com/PostView.nhn?blogId=infoefficien&logNo=220013754482

2.  nlogn LIS

LIS 의 마지막값 < arr[i]
: 무조건 추가

LIS 의 마지막 값 > arr[i]
LIS 를 이진탐색으로 arr[i] 보다 큰 수 중에서 가장 작은 수와 교체한다

3일 경우, 처음으로 LIS 3
2일 경우, 2보다 큰 수중 가장 작은 수는 3이므로 2와 교체

lis[]: 10 40 70일 때 50이 들어오면 70과 교체
 10 20 40 25