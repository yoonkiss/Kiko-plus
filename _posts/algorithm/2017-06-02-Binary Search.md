---
layout: post
title: Binary Search
category: [Algorithm]
---

정렬된 리스트에 어떤 수가 있는지 없는지를 조사한다.

주로, 정답을 구하기는 어려운데 정답을 검증하기 쉬운 경우의 최적의 해를 찾는다. 최대값의 최소화, 최소값의 초대화 등의 경우가 많다.

### 경비행기
https://www.acmicpc.net/problem/2585

최소 연료통이 얼마인가? 
연료통 x 로 갈 수 있는 거리내 비행장을 찾아보고, 비행장이 나오면 급유하여 다시 갈 수 있는 거리내 비행장을 찾아본다. 
목적지가 나올 때까지 반복한다. 
k번 이하내로 목적지를 못가면 x는 해가 아니다.


{% highlight java %}
// mid 가 해(x)보다 크거나,작거나 같은경우
while (left <= right) {
    mid = (left + right) / 2;
    if (mid > 해) {
        right = mid - 1;
    else if (mid < 해) {
        left = mid + 1;
    } else {
        해를 찾음!
        break
    }
}
// mid 가 해이거나 아니거나
// mid 가 해의 후보군일경우 또다른 해를 찾는다
// left == right 일경우 loop 에서 빠져나올 수 없을 수 있음으로 주의!

while (left < right) {
    mid = (left + right) / 2;
    if (f(mid) == 1) {
        // 해를 찾음
        right = mid;
    } else {
        left = mid + 1;
    }
}
System.out.println(right);
// 구현에 따라 다를 수 있다
int ans = 0;
while (left <= right) {
    mid = (left + right) / 2;
    if (f(mid) == 1) {
        ans = mid;
        right = mid-1;
    } else {
        left = mid + 1;
    }
}
System.out.println(ans);

{% endhighlight %}

