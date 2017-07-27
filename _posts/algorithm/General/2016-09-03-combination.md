---
layout: post
title: Creating all possible k combinations of n items in Java
category: [Algorithm]
---

{% highlight java %}
private static void combination(ArrayList<Integer> list, int n, int k) {
    if (k == 0) {
        System.out.println(list);
        return;
    }
    int smallest = list.isEmpty() ? 0 : list.get(list.size() - 1) + 1;
    for (int i = smallest; i < n; i++) {
        list.add(i);
        comb(list, n, k - 1);
        list.remove(list.size() - 1);
    }
}
{% endhighlight %}

Similarly, there is a algorithm to generate all possible permutations of a list.

{% highlight java %}
private static void permutaion(ArrayList<Integer> list, int n) {
    if (list.size() == n) {
        System.out.println(list);
        return;
    }
    for (int i = 0; i < n; i++) {
        if (visited[i] == false) {
            visited[i] = true;
            list.add(i);
            permu(list, n);
            list.remove(list.size() - 1);
            visited[i] = false;
        }
    }
}
{% endhighlight %}

### 사전
https://www.acmicpc.net/problem/1256


### 연구소
https://www.acmicpc.net/problem/14502

