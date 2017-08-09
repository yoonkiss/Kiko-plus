---
layout: post
title: 부분집합의 합
tags: [two pointer]
---
### [부분 합] (https://www.acmicpc.net/problem/1806)

> 10,000 이하의 자연수로 이루어진 길이 N짜리 수열이 주어진다. 이 수열에서 `연속된 수들의 부분합 중`에 그 합이 S 이상이 되는 것 중, 가장 짧은 것의 길이를 구한다



``` java
int s = 0,e = 0, ans = 0;
int sum = 0;

while (true) {
    if (e == N) {
        break;
    }
    if (sum >= M) {
        sum -= arr[s];
        s++;
    } else {
        sum += arr[e];
        e++;
    }
    if (sum == M) {
        ans++;
    }
}
```

## 기타
http://blog.naver.com/PostView.nhn?blogId=kks227&logNo=220795165570
