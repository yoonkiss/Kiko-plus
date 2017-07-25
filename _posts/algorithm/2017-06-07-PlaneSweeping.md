---
layout: post
title: Plane Sweeping
---
### 북서풍
맨 오른쪽 아래 섬 기준으로 x가 작으면서 y 가 큰것들의 개수 합을 구해가는 문제

1. x를 기준으로 오름차순 정렬
2. x가 같다면 y는 내림차순 정렬 (중복없다면 정렬할필요 없다)
3. 하나하나 꺼내보면서 (Sweeping) 현재 y좌표가 이전 등장했던 섬들의 y 좌표보다 큰것 개수만 세면된다
4. 방문 시마다 y 좌표를 segment tree에 마킹하게되면 log n 으로 섬 개수를 알 수 있다

문제는 y 좌표가 음/양수로 표현되며 최대 크기가 10^9 이기 때문에 좌표는 압축해줄 필요있다.
압축이란, y의 실제값은 중요하지 않기에 상대적인 값이면된다.

{% highlight java %}
int index= 1;
for( int i = 0; i < pointList.size() ; i ++ ){
    Point point = pointList.get(i);
    if( i > 0 && point.y != pointList.get(i-1).y ) {
        index ++;
    }
    point.idxY = index;
}

{% endhighlight %}


### 여러 직사각형 전체 면적 구하기 
https://www.acmicpc.net/problem/3392

- 각각의 직사각형의 시작 면(왼쪽면)과 끝면(오른쪽 면)을 list에 담는다
시작면 x1,y1,y2,1
끝면 x2,y1,y2,-1

- x축으로 오름차순 정렬

- loop 0 < n
> x를 하나 꺼내  면적을 구한다.
(x - 이전 x) * 높이 ( tree root = tree[1] ) 트리는 y축범위의 개수를 표현
> 꺼낸 면 y2-y1 의 길이 segment tree에 카운팅 (다음 면적을 구할 때 이용) 
(tree node 범위는  y의 최대 값가지며 root는 범위의 합이다)

node에 카운팅이 되어 있는데 중복으로 업데이트가 일어날 수 있다.
lazy update 가 필요하다

# pow using devide and conquer

{% highlight java %}
 Collections.sort(v);

    int ans = 0;
    int sx = v.get(0).x;

    for (int i = 0; i < v.size(); i++) {
        ans += (v.get(i).x - sx) * tree[1].sum;
        
        update(v.get(i).yl, v.get(i).yr - 1, 1, 0, MAXY, v.get(i).flag);
        sx = v.get(i).x;
    }

    System.out.println(ans);

}

static void update(int left, int right, int node, int nodeLeft, int nodeRight, int value) {
    if (left > nodeRight || right < nodeLeft)
        return;

    if (left <= nodeLeft && nodeRight <= right)
        tree[node].cnt += value;
    else {
        int mid = (nodeLeft + nodeRight) / 2;
        update(left, right, node * 2, nodeLeft, mid, value);
        update(left, right, node * 2 + 1, mid + 1, nodeRight, value);
    }

    if (tree[node].cnt == 0) {
        tree[node].sum = tree[node * 2].sum + tree[node * 2 + 1].sum;
    }
    else {
        tree[node].sum = nodeRight - nodeLeft + 1;
    }
}

{% endhighlight %}

