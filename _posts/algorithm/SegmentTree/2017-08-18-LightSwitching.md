---
layout: post
title: Light Switching
tags: ['segment tree', 'lazy propogation']
---
## Problem

[https://www.acmicpc.net/problem/1395](https://www.acmicpc.net/problem/1395)

## Summary

> N개의 스위치, A번부터 B번 사이의 스위치 상태를 반전시키는 것이고 다른 하나는 C번부터 D번 사이의 스위치 중 켜져 있는 상태의 스위치의 개수를 세기<br>
> 스위치의 개수 N(2 ≤ N ≤ 100,000)과 처리할 일의 개수 M(1 ≤ M ≤ 100,000)

## Idea

node를 스위치의 on/off 상태로 정의한다면, node 카운트는 총 on의 스위치 개수이다<br>
최대 10^6번 (10^6 * 17 = 천칠백만) 의 update가 일어날 수 있어 lazy update가 필요하다<br>

``` java
static void update(int node, int s, int e, int l, int r) {
    if (lazy[node] == 1) {
        tree[node] = (e - s + 1) - tree[node];
        if (s != e) {
            lazy[node * 2] = (lazy[node * 2] == 0) ? 1 : 0;
            lazy[node * 2 + 1] = (lazy[node * 2 + 1] == 0) ? 1 : 0;
        }
        lazy[node] = 0;
    }
    if (l > e || r < s) {
        return;
    }
    if (l <= s && e <= r) {
        tree[node] = (e - s + 1) - tree[node];
        // 현재의 lazy는 위에서 처리되어 아래로 전달만 해준다
        //lazy[node] = (lazy[node] == 0) ? 1 : 0;

        if (s != e) {
            lazy[node * 2] = (lazy[node * 2] == 0) ? 1 : 0;
            lazy[node * 2 + 1] = (lazy[node * 2 + 1] == 0) ? 1 : 0;
        }
        return;
    }

    if ( s != e) {
        int mid = (s + e) / 2;
        update(node * 2, s, mid, l, r);
        update(node * 2 + 1, mid + 1, e, l, r);
        tree[node] = tree[node*2] + tree[node*2 + 1];
    }
}
```

## Related
* [https://www.acmicpc.net/problem/2669](https://www.acmicpc.net/problem/2669)
* [https://www.acmicpc.net/problem/2185](https://www.acmicpc.net/problem/2185)
* [Painting patter](https://www.acmicpc.net/problem/7728)
* [도서실카펫](https://www.acmicpc.net/problem/2601)
