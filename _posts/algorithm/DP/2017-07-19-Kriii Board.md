---
layout: post
title: 크리보드
category: [Dynamic Programming]
tags: [dp]
---
### [크리보드](https://www.acmicpc.net/problem/11058)
 > 크리보드는 kriii가 만든 신기한 키보드이다. 크리보드에는 버튼이 4개만 있으며, 하는 역할은 다음과 같다.<br>
 > 화면에 A를 출력한다.<br>
 > Ctrl-A: 화면을 전체 선택한다<br>
 > Ctrl-C: 전체 선택한 내용을 버퍼에 복사한다<br>
 > Ctrl-V: 버퍼가 비어있지 않은 경우에는 화면에 출력된 문자열의 바로 뒤에 버퍼의 내용을 붙여넣는다.<br>
 > 크리보드의 버튼을 총 N번 눌러서 화면에 출력된 A개수를 최대로하는 프로그램을 작성하시오.<br>

N = 3인 경우에 A, A, A를 눌러 A 3개를 출력할 수 있다.

N = 7인 경우에는 A, A, A, Ctrl-A, Ctrl-C, Ctrl-V, Ctrl-V를 눌러 9개를 출력할 수 있다.

N = 11인 경우에는 A, A, A, Ctrl-A, Ctrl-C, Ctrl-V, Ctrl-V, Ctrl-A, Ctrl-C, Ctrl-V, Ctrl-V 를 눌러 27개를 출력할 수 있다.


d[n] 은 n번 눌렀을 때의 최대 출력 개수로 정의<br>

n = 3 까지 인 경우는 d[n] = d[n-1] + 1<br>
n 4인 경우는 두가지 중 최대 값: <br>
AAAA<br>
A(ACV)<br>

n 5인 경우는 3가지 중 최대 값: <br>
AAAAA = d[n-1] + 1 = 5<br>
AA(ACV) = d[n-3] * 2 = 4<br>
A(ACV)V = d[n-4] * 3 = 3

n 7인 경우는 5가지 중 최대 값: <br>
AAAAAAA = d[n-1] + 1 = 5<br>
AAAA(ACV) = d[n-3] * 2 = 8<br>
AAA(ACVV) = d[n-4] * 3 = 9<br>
AA(ACVVV) = d[n-5] * 4 = 8<br>
A(ACVVVV) = d[n-6] * 5 = 5<br>

***int를 넘는 것에 주의*** 해야 한다.
