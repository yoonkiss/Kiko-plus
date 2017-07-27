---
layout: post
title: Two pointer
tags: [two pointer]
---

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

