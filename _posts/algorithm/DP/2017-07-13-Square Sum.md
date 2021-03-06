---
layout: post
title: 제곱수의 합
category: [Dynamic Programming]
tags: [dp]
---
### [제곱수의 합](https://www.acmicpc.net/problem/1699)
 > 어떤 자연수 N은 그보다 작은 제곱수들의 합으로 나타낼 수 있다. 예를 들어 11=32+12+12(3개 항)이다. 이런 표현방법은 여러 가지가 될 수 있는데, 11의 경우 11=22+22+12+12+12(5개 항)도 가능하다. 이 경우, 수학자 숌크라테스는 “11은 3개 항의 제곱수 합으로 표현할 수 있다.”라고 말한다. 또한 11은 그보다 적은 항의 제곱수 합으로 표현할 수 없으므로, 11을 그 합으로써 표현할 수 있는 제곱수 항의 최소 개수는 3이다.<br>

 > 주어진 자연수 N을 이렇게 제곱수들의 합으로 표현할 때에 그 항의 최소개수를 구하는 프로그램을 작성하시오.

cache[n] 은 n의 최소 제곱수의 합 정의<br>
52는 어떻게 표현 할 수 있을까?

52같은 경우 큰 수부터 빼 나가면 49 + 1 + 1 + 1 로 4개의 항을 쓴다. 하지만 36 + 16으로 2항으로 가능해 가능한 제곱수를 다 빼 보고 그중 최소값을 택한다 (다 해보는 수밖에 없다?).<br>
[52 - 1]<br>
[52 - 4]<br>
[52 - 9]<br>
...<br>
[52 - 49]<br>
<br>
`cache[i] = min(cache[i], cache[i - j*j] + 1)`

복잡도: O(N * squrt(N))

{% highlight cpp %}
cache[1] = 1;
for (i = 2; i <= n; i++) {
    cache[i] = i;
    for (j = 2; j * j <= i; j++) {
        cache[i] = min(cache[i], cache[i - j*j] + 1)
    }
}
{% endhighlight %}
