---
layout: post
title: Tree general
tags: [tree]
---
## Problem

[트리](https://www.acmicpc.net/problem/1068)

## Idea

총 leaf개수를 구하고 삭제되는 노드가 가지는 leaf개수를 빼준다<br>

이때 `sibling이 1개인 노드가 제거되는 경우`를 주의해야한다. 이때는 leaf가 1개 늘어나게 된다

## 
트리에서 (N-1 edge) 바이러스 (node)가 퍼지지 않도록 길을 끊는다면, 가능한 경우의 수는?

N step에 adj edge들중 지울 것 지운다.
남은 에지수 m에 대해 2^m을 구하는데 곱하기 할때 마다 % MOD
O(N)



트리: 사이클이 없는 무방향 그래프
임의의 두 노드사이 경로는 1가지 뿐, 그냥 경로를 찾으면 된다.

트리의 지름은 두가지 (종만북693페이지 참조)
1. 가장 긴 leaf node - leaf node
2. 가장 긴 root node - leaf node

트리의 지름의 양 끝 노드 중 하나의 노드만 알면 그 노드에서 가장 멀리 떨어진 노드를 찾으면된다 (경로는 1가지이기에)
양 끝노드 중 하나를 어떻게 아나?


> 아무 노드에서 가장 멀리 떨어진 노드가 끝 노드 중 한가지다
1. 아무 점이나 잡고(루트), 이 점에서 가장 거리가 먼 점 t를 잡는다.
2. t에서 가장 거리가 먼 점 u을 찾는다.
3. t - u가 트리의 지름. 끗

### 용어 정리
트리의 지름 - 트리에서 가장 긴 경로

트리의 중심: n개의 노드로 구성된 트리에서 어떤 노드 u를 제거했을때, 쪼개지는 성분들의 사이즈가 n/2 을 넘지 않으면 u를 트리의 중심이라고 부른다.

트리 또는 그래프에서 거리가 가장 먼 두 노드 사이의 거리를 "지름"이라 하고 이 지름의 중간에 해당하는 노드를 트리의 중심(center)으로 해서 트리를 재구성하면 높이(레벨)가 가장 작은 트리를 만들수 있다는 것입니다.

중요한 성질 중 하나가 트리의 반지름과 트리의 중심은 트리의 지름 위에 있다는 것(겹친다는 것)인데, 트리의 중심은 트리의 지름에서 거리상으로(정점의 개수로 판단하는 것이 아님) 가운데에 있는 노드이다. 

트리의 지름 구하는 법
가장 긴 경로가 되려면 leaf node - leaf node이거나 root node - leaf node (이진트리가 해당)이여야 한다. 보통 leaf node - leaf node로 보면 된다.

root node -leaf node 의 최대 길이 (트리 높이)
싸이클이 없으므로 root에서 갈 수 있는 node의 최대 값 갱신

int height(TreeNode* root) {
int h = 0;

for(int i = 0; i < root->children.size(); ++i)
    h = max(h, 1 + height(root->children[i]));

return h;
}
높이 구하는 걸 응용해 지름을 구할 수 있다.
서브 트리 높이이를 정렬: O(NlogN)
트리 순회와 다를 바 없어 O(N) 으로 간주

int childSize[MAX_V];
int child[MAX_V][MAX_V];
int leafLongest;
// root를 루트로 하는 서브 트리의 높이 계산
int height(int root) {
    // 각 자식을 루트로 하는 서브트리 높이 계산
    vector<int> childHeights;
    for(int i=0;i<childSize[root];i++)
        childHeights.push_back(height(child[root][i]));
    //  자식이 하나도 없다면 0을 반환
    if(childHeights.size()==0)
        return 0;
    sort(childHeights.begin(), childHeights.end());
    // root를 최상위 노드로 하는 경로를 고려
    if(childHeights.size()==2)
        leafLongest = max(leafLongest, childHeights[childHeights.size()-1] + childHeights[childHeights.size()-2] + 2);
    // 트리 높이는 서브 트리 높이의 최대치에 1을 더한다
    return childHeights[childHeights.size()-1] + 1;
}
// 두 노드 사이의 가장 긴 경로길이 계산
int getLongest(int root) {
    leafLongest = 0;
    // 트리 높이와 최대 잎-잎 경로 길이 중 큰것을 선택
    int h = height(root);
    return max(leafLongest, h);
}





트리의 중심 구하는 법

1. 임의의 노드 x를 고른다.
2. x를 루트로 하고, 각 서브트리의 사이즈를 구해주는 dfs를 실행한다.
3. 다음, x부터 시작해서 가장 큰 사이즈의 서브트리로 계속 옮겨가는데, 이때, 서브트리의 사이즈가 n/2을 넘는 동안만 옮겨다닌다.
4. 최종적으로 도착한 노드가 바로 트리의 중심이 된다.


