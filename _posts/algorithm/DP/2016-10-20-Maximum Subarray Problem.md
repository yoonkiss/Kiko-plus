---
layout: post
title: Maximum subarray problem
category: [Algorithm]
---
O(N) 복잡도로 구현 (Kadane algorithm)

{% highlight java %}
int cur_max = -200;
int max = -200;

int s = 0;
int e = 0;
int max_s = 0;
int max_e = 0;

for (int i = 0; i < N; i++) {
    if (A[i] < cur_max + A[i]) {
        cur_max += A[i];
        e = i;
    } else {
        cur_max = A[i];
        s = i;
        e = i;
    }
    if (max < cur_max) {
        max = cur_max;
        max_s = s;
        max_e = e;
    }
}

{% endhighlight %}
