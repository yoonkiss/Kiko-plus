---
layout: post
title: 부분집합의 합
tags: [two pointer]
---
### [부분집합의 합] (https://www.acmicpc.net/problem/1182)

> N개의 정수로 이루어진 집합이 있을 때, 이 집합의 공집합이 아닌 부분집합 중에서 그 집합의 원소를 다 더한 값이 S가 되는 경우의 수 구하기

# 재귀
선택한경우, 선택하지 않은 경우를 나누어 재귀를 돌린다.

``` cpp
int n, num[21], des, cnt=0;
 
void cal(int idx, int sum) {
    sum += num[idx];
    if (idx >= n)
        return;
    if (sum == des)
        cnt++;
    cal(idx + 1, sum-num[idx]);
    cal(idx + 1, sum);
}
 
int main() {
    cin >> n >> des;
    for (int i = 0; i < n; i++) {
        cin >> num[i];
    }
    cal(0, 0);
    cout << cnt << '\n';
    return 0;
}
```
void rec(int flag, int sum, int cur)
{
    if(cur==n){
        if(flag && sum==s)++ans;
        return;
    }
    rec(1,sum+a[cur],cur+1);
    rec(flag,sum,cur+1);
}

1208 - 부분집합의 합 2