---
layout: post
title: Palindrome
tags: [dp]
---

### [팰린드롬?](https://www.acmicpc.net/problem/10942)
s와 e 구간의 수열이 palindrome 인지 판단하면 된다

``` cpp
while (s < e) { 
    if (array[s++] != array[e--]) { 
        return false; 
    } 
}
```

복잡도는 N/2 * M 정도 나오겠다. 10^3 * 10^6 이기 때문에 ac받기 어려울 것 같다.

M이 크기 때문에 전처리가 필요 할 것 같다. 
* cache[s][e]: s ~ e 수열 palindrome 인지 아닌지 판단
* arr[s] 와 arr[e] 가 같고 cache[s+1][e-1] 이 palindrome이면 ? 

``` cpp
int f(int s, int e) {
    if (s > e) return 1;
    if (checked[s][e]) return cache[s][e];
    checked[s][e] = 1;
    return cache[s][e] = f(s + 1, e - 1) & (arr[s] == arr[e]);
}
```
* O(n^2 + m)
* for loop
{% highlight cpp %}
for (int i = 1; i <= N; i++) 
    cache[i][i] = 1; //길이가 1인 palindrome

// i는 거리 s에서 e까지 길이 
for (int i = 2; i <= n - 1; i++) {
    for (int j = 1; j <= n - i; j++) { 
        if (arr[j] == arr[j + i] && cache[j + 1][j + i - 1]) { 
            cache[j][j + i] = true;
        }
    } 
}
{% endhighlight %}
