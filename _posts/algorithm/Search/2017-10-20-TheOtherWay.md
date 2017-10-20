---
layout: post
title: The Other Way
tags: [dijkstra, dp]
---
## Problem
[https://www.acmicpc.net/problem/14554](https://www.acmicpc.net/problem/14554)

## Idea

DAG(Directed Acyclic Graph)로 시작점 부터 끝점까지 가는 최단 거리를 구한다. 이때 dp로 경우의 수를 업데이트한다.<br>

최단 거리가 갱신이 되면 경우의 수가 0으로 초기화<br>
최단 거리가 같은 경우 경우의 수 업데이트<br>
<br>
d[n]: `시작점 S로부터 정점 n 에까지의  최단 경로 수`<br>
dist[n]: `시작점 S로부터 정점 n 에까지의  최단 경로 값`<br>
d[n] = d[prev] + d[n] if (dist[n] == dist[prev] + w(prev->n) )
d[n] = 0 if (dist[n] > dist[prev] + w(prev->n))

### Dijkstra 최단거리
  
S - a - b - c - S 인 no directed cycles graph 에서  최단거리가 S -> c 라고하면<br>
  2   4   3   12 <br>
정점만을 큐에 넣는 BFS 에서는 최단거리를 찾기 어렵다. 큐에는 발견된 정점 순서대로 방문하기 때문에 a와 c를 방문한 이후에 b를 가게된다. 더 늦게 발견한 정점이라도 더 먼저 방문할 수 있어야 한다.<br>

BFS에서는 큐에 정점을 넣었지만 다익스트라 알고리즘에서는 우선순위 큐에 정점의 번호와 함께 지금까지 찾아낸 해당 정점까지의 최단 거리를 쌍으로 넣는다.<br>
<br>
시작점에서 (a,2) 와 (c,12) 가 우선순위 큐에 들어간다. <br>
c는 큐에 있고 a 와 b가 순서대로 방문하게 된다.<br>
b가 방문될 때 b에서 c로 가는 길이 9가 되 12 보다 짧아지게된다.<br>
이미 큐에 들어있는 (c,12)는 어떻게 해야하나? (c,12)를 찾아 (c,9)로 바꿔야 하나?<br>
`(c,9)를 추가하고 (c,12) 가 꺼내질 때는 그냥 무시`한다<br>

복잡도: 각 정점마다 인접한 간선을 모두 검사(1)  + 우선순위 큐 넣고 빼는 비용(2)<br>

1: 전체 간선개수 O(E)<br>
2: dist 가 갱신될 때마다 큐삽입이 일어나고, 최대 모든 edge가 큐에 삽입가능하므로 O(E)가 되며 추가 삭제는 O(log(E))가 걸려 큐 관련된 총 비용은 O(ElogE) 가 된다.<br>

총 비용: O(E + ElogE)<br>

``` java
for (int i = 0; i < E; i++) {
    StringTokenizer st = new StringTokenizer(br.readLine(), " ");
    int from = Integer.parseInt(st.nextToken());
    int to = Integer.parseInt(st.nextToken());
    int weight = Integer.parseInt(st.nextToken());
    list.get(from).add(new Edge(to, weight));
    list.get(to).add(new Edge(from, weight));
}
PriorityQueue<Edge> que = new PriorityQueue<>();
dist[start] = 0;
que.add(new Edge(start, 0));

while (!que.isEmpty()) {
    int cur_index = que.peek().index;
    int cur_w = que.peek().weight;

    que.poll();

    // 만 약 지금 꺼낸 것보다 더 짧은 경로를 알고 있다연 지금 꺼낸 것을 무시한다.
    if (dist[cur_index] < cur_w) {
        continue;
    }
    for (Edge edg: list.get(cur_index)) {
        int next_index = edg.index;
        int next_weight = edg.weight;
    
        if (next_index == cur_index) {
            continue;
        }
        if ( dist[cur_index] + next_weight < dist[next_index]) {
            dist[next_index] = dist[cur_index] + next_weight;
            que.add(new Edge(next_index, dist[next_index]));
        }
    }
}
```


