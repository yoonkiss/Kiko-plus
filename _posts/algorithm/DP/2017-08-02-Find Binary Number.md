---
layout: post
title: 이진수 찾기
category: [Dynamic Programming]
tags: [dp, combination, 이항계수, 조합]
---
### [이진수 찾기] (https://www.acmicpc.net/problem/2248)

> N(1≤N≤31)자리의 이진수가 있다. 이러한 이진수들 중에서, L(1≤L≤N)개 이하의 비트들만 1인 것들을 크기 순으로 나열했을 때, I번째로 나오는 이진수를 구해보자
> 이진수는 0으로 시작할 수도 있다.

N개 자리수 중 1비트가 L개 이하인 수 중 I번째 인 것은? [모스 부호 사전](https://algospot.com/judge/problem/read/MORSE) 문제와 유사

N:4, L=2, I=4 라면 다음과 같은 경우의 수가 나올 수 있다

* L 이 1인 경우
0001<br>
0010<br>
0100<br>
1000<br>
* L 이 2인 경우
0011<br>
0101<br>
0110<br>
1001<br>
1010<br>
1100<br>

``` java
for (int i = 0; i <= N; i++) {
    for (int j = 0; j <= Math.min(i,  L); j++) {
        if (i == 0 || j == 0 || i == j) {
            d[i][j] = 1;
        } else {
            d[i][j] = d[i - 1][j] + d[i - 1][j - 1];
        }
    }
}

while (N != 0)  {
    long sum = 0;
    for (int i = 0; i <= L; i++) {
        // 선택한 수가 0일 때, 가질 수 있는 1의 경우 수
        sum += d[N - 1][i];
    }
    if (sum >= I) {
        System.out.print("0");
        N--;
    } else {
        System.out.print("1");
        I = I - sum;
        L--;
        N--;
    }
}
```

