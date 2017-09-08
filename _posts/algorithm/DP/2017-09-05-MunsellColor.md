---
layout: post
title:  색상환
tags: [dp, pia]
---
## Problem
[https://www.acmicpc.net/problem/2482](https://www.acmicpc.net/problem/2482)

## Idea

f(a, b) : “현재 a 번째 색상에 대한 검색할 차례이며, b 개의 색상을 인접하지 않도록 선택한 상태”<br>

true면 마지막 색을 선택가능<br>
f(1, 0, true): 0번 색상을 선택하지않고 1번색으로 이동, (마지막 색상 선택 가능)<br>
f(2, 1, false): 0번 색상을 선택하고 2번색으로 이동, (마지막 색상 선택 불가)<br>

f(1,0): f(2,0), f(3,1)<br>

f(2,1): f(3,1), f(4,2)<br>

위 정의는 f(3,1) 처럼 중복이 일어날 수 있어 중복 제거 필요


## Related
* https://www.acmicpc.net/workbook/view/173
