---
layout: post
title: Segment Tree
tags: [segment tree]
---
- 자신보다 큰 수가 몇개냐!
- 자신보다 작은 수가 몇개냐!
- 자신이 몇번째냐
- 노드별 누적, 노드별 누적 차/합 => 공식을 유도해본다 그러면 구간 합/차 및 자신보다 큰/작은 수 개수 등으로 표현될 수 도 있다

### node 수를 1부터 n까지의 몇번째 index로 표현
- 자신보다 큰 수가 몇개냐!

## 순열
A[i] = i보다 큰 수들의 개수일 때 원래 수열을 작성

A[1] = 5: 1보다 큰수가 왼쪽으로 5개 있다, 즉 1은 6번째 index이다.

나보다 앞에있는 수들 중 내가 몇번째인가?
[1] = 5;
[2] = 0;
[3] = 1;
[4] = 2;
[5] = 1;
[6] = 2;
[7] = 0;
[8] = 0;

i 가 들어가는 index X는
X - 구간 (0 ~ X-1) 에 이미 채워진 칸의 개수 가 인덱스 = A[i]

1로 초기화, query후 0으로 초기화
(개수를 만족하는 인덱스를 찾는다, 0으로 마킹되면 하나씩 밀리게되)
1 = 5 + 1 (1 ~ 5) 1로 마킹된 수가 6개인 = [6], 6
2 = 0 + 1 (1 ~ 1) 1로 마킹된 수가 1개인 = [1]
3 = 1 + 1 (1 ~ 2) 1로 마킹된 수가 2개인 = [3] (1이 0으로 초기화되어)
...




## 터보소트, 삽입정렬

arr: 5 1 4 3 2 (초기 상태)

1 5 4 3 2 (1을 왼쪽으로 1칸)
1 4 5 3 2 (4를 왼쪽으로 1칸)
1 3 4 5 2 (3을 왼쪽으로 2칸)
1 2 3 4 5 (2를 왼쪽으로 3칸)
총 옮긴 칸 수의 합?

특징을 뽑아보자
1. 왼쪽 수가 크면 작은 수가 나올때까지 옮긴다

4를 생각해보면, 옮기는 횟수는 "4보다 큰 수가 몇개인가" 를 알아내는게 key

트리로 표현해보자
tree node: node는 1~N 개의 serial한  index, 값은 node 의 개수
query는 현재 node보다 큰 모든 범위의 구간 합. query(node+1, end)

결론
node 의 index로 표현 (중간값/k번째수 등 유사)해 index보다 큰수의 구간 합을 구한다

### 영화수집
https://www.acmicpc.net/problem/3653
- 자신보다 작은 수가 몇개냐!! 자신이 제일 작은 수보다 더 작아지는 경우...

### 사탕상자
### 중간값
### k번째수
### 나무심기
https://www.acmicpc.net/problem/1280

### 조세푸스


### 기타 응용
- 촌수
- 히스토그램에서 가장 큰 직사각형
- 스위치







Representation of Segment tree

- Leaf nodes are the elements of the input array
- Each parent node of the leaf nodes represents some merging values

For each node at index i, left child is at index i * 2, right child is i * 2 + 1 if the root index is 1.
And, the parent is at i / 2.


Let's consider the array arr[0...n-1].

I will store the each node with full binary tree. So ,
if n is 5, the tree size (child nodes + parents) should be bigger than 9 (5 + 4).

5 <= 2^x, x = 3
leaf 를 담을 수 있는 크기는 8개면 충분하다. tree의 총 크기는 8 * 2 - 1 이면 된다.
(log(n) / log(2)) * 2 - 1.

arr {1, 3, 5, 7, 9}일 때 합을 표현하는 경우 트리 생성:

{% highlight java %}
// node 가 담당하는 구간이 [start, end] 이다.
int construct_sum(int[] arr, int[] tree, int node, int start, int end) {
    // leaf node
    if (start == end) {
        return tree[node] = arr[start];
    }
    // If there are more than one elements, then recur for left and
    // right subtrees and store the sum of values in this node
    
    int mid = (start + end) / 2;

    tree[node] = construct_sum(arr, tree, node * 2, start, mid) +
            construct_sum(arr, tree, node * 2 + 1, mid + 1, end));
    return tree[node];
}

// [0, 25, 9, 16, 4, 5, 7, 9, 1, 3, 0, 0, 0, 0, 0]
{% endhighlight %}

특정 leaf가 변경이 된다면 root도 변경이 된다. root로 부터 하위 leaf까지 변경된 diff 를 업데이트 하면된다.
{% highlight java %}
//  node value starts from root assigned 1

static void update(int[] tree, int node, int start, int end, int index, int diff) {
    if (index < start || index > end)
        return;
    tree[node] = tree[node] + diff;
    if (start != end) {
        update(tree, node * 2, start, (start + end) / 2, index, diff);
        update(tree, node * 2 + 1, (start + end) / 2 + 1, end, index, diff);
    }
}
{% endhighlight java %}

구간 합을 찾는 경우는 다음과 같다.

{% highlight java %}
// start, end 는 node 가 표현하는 구간, left, right는 구해야 하는 구간
// [left, right] 와 [start, end] 완전 겹치지 않는 경우
// [left, right] 가 [start, end] 완전 포함하는경우 경우 tree[node] 를 리턴
// 이외는 다시 탐색

static int query(int[] tree, int node, int start, int end, int left, int right) {
    if (left > end || right < start) {
        return 0;
    }
    if (left <= start && end <= right) {
        return tree[node];
    }
    return query(tree, node * 2, start, (start + end) / 2, left, right) + 
            query(tree, node * 2 + 1, (start + end) / 2 + 1, end, left, right);
}
{% endhighlight java %}

leaf의 node번호를 알고 있는 경우는 update 를 leaf to root 로 할 수 도 있다.
{% highlight java %}
static void construct_sum(int node, int value, int[] tree) {
        // in case of binary tree
        // node = node + base;
        
        while (node >= 1) {
            tree[node] += value;
            
            node = (node >> 1);
        }
    }
// [0, 25, 16, 9, 4, 12, 9, 0, 1, 3, 5, 7, 9, 0, 0, 0]
{% endhighlight %}


관련문제
https://www.acmicpc.net/workbook/view/267
