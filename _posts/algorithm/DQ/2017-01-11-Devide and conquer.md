---
layout: post
title: Closest pair of points with devide and conquer
category: [Algorithm]
---

### Closest pair of points
https://www.acmicpc.net/problem/2261

모든 쌍을 본다?

* devide

y축과 평행하게 직선을 그어 평면을 둘로 나눠본다. 총 세가지 경우로 나뉠 수 있다
두점이 모두 왼쪽
두점이 모두 오른쪽
양쪽에 한점씩

x의 좌표로 분할 하는게 아닌 정렬해서 인덱스 0~n-1 를 분할한다.


find start, mid / find mid+1, end 로 분리
보통은 s == e 일 경우 기저로 하지만 여기선 점과 점사이의 거리이므로 점이 2개, 혹은 3개일때까지 분할한다.

3개일 경우를 기저로 삼는 이유는 이후 분할 될 시 1개만 남기 때문.
3개가 남는 경우에는 세점 모두 각각 거리를 구해 최소값을 리턴한다.



* conquer
분할로 얻은 거리를 서로 비교해 작은값 d를 업데이트 해간다. 여기서 key는 최소거리가 분할 mid 영역에 존재하는 경우다

즉, mid에서 부터 s 까지의 점 중 d보다 작은 점 (x1) 것이 있는지 확인필요. 있다면 반대로 mid+1 부터 e까지 중에 d보다
 작은 점 (x2)이 있는지 확인. 있다면 x2-x2 거리와 d를 비교해 최소값을 유지시켜준다
<img src="http://d1hyf4ir1gqw6c.cloudfront.net//wp-content/uploads/strip_closesr1.png">

example code:
{% highlight java %}

for (int i = mid; i >= s; i--) {
    int dx = Math.abs(arr[i].x - arr[mid].x);
    if (ret <= dx * dx) {
        break;
    }
    for (int j = mid + 1; j <= e; j++) {
        int dx2 = Math.abs(arr[j].x - arr[i].x);
        if (ret <= dx2 * dx2) {
            break;
        }
        ret = Math.min(ret,  dist(arr[i], arr[j]));
    }
    
}

// 다른 방법으로 일단 d보다 작은 점들을 array에 넣고 y로 정렬한다. 각각의 점들이 d 보다 작다면 최소값 비교해 갱신.
/*
ArrayList<Pos> strip = new ArrayList<Pos>();
for (int i = s; i <= e; i++) {
    int w = Math.abs(arr[i].x - arr[mid].x);
    if (ret > w * w) {
        strip.add(arr[i]);
        
    }
}
strip.sort(compY);
for (int i = 0; i < strip.size(); i++) {
    for (int j = i +1; j < strip.size(); j++) {
        int dY = (strip.get(j).y - strip.get(i).y ) * (strip.get(j).y - strip.get(i).y);
        if ( dY>= ret) {
            break;
        }
        ret = Math.min(ret,  dist(strip.get(j), strip.get(i)));
    }
}*/
{% endhighlight %}


Appendix
http://www.geeksforgeeks.org/closest-pair-of-points/


다른풀이: https://www.acmicpc.net/blog/view/25
https://www.topcoder.com/community/data-science/data-science-tutorials/line-sweep-algorithms/
