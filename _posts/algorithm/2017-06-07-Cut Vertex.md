---
layout: post
title: Cut Vertex
---

### native
각 정점 삭제후, 컴코넌트 개수 확인 dfs(v) 번 수행
visited에 false인(방문하지 않은 vertex가 있는 지) 확인, 있다면 cut vertex가 존재


### 

각 정점을 루트로 하는 서브트리에서 역방향 간선을 통해 닿는 정점들의 최소 발견순서 반환하면된다
발견순서를 저장하기 위해 discovered[] 두고, visted/found 는 필요없다.
무향이고 (교차간선 X), 발견순서로 모든 간선 구분가능

시작 정점의 서브트리에서 역방향으로 갈 수 있는 정점 (갈 수 있는 가장 높은번호) 중 시작 정점의 발견순서보다 작은 것(상위 조상)이 없다면 단절점이다.


{% highlight java %}
// start를 root로 하는 서브트리에 있는 단절점을 찾는다
// 반환값은 해당 서브트리의 역방향 간선으로 갈 수 있는 정점 중
// 가장 일찍 발견된 정점의 발견 시점
private static int dfs(int start, boolean root) {
    discovered[start] = ++depth;

    // 자식이 없다면 현재 점 반환
    int dfn = discovered[start];
    int dgree = 0;

    for (Integer next : path.get(start)) {
        if (discovered[next] == 0) {
            // root인 경우 단절점 판단을 자손 개수체크
            ++dgree;
            // 이 서브 트리에서 갈 수 있는 가장 높은 정점의 번호
            int low = dfs(next, false);
            // 번호가 자신 이하라면 단절점
            if (root == false && low >= discovered[start]) {
                solution[start] = true;
            }
            // root값으로 맞춰준다
            dfn = Math.min(dfn, low);
        } else {
            // 현재 횟수와 방문했던 위치와 비교.
            dfn = Math.min(dfn, discovered[next]);
        }
    }
    if (root) {
        if (dgree > 1) {
            solution[start] = true;
        }
    }
    return dfn;
}
{% endhighlight %}

