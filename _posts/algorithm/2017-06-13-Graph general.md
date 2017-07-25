---
layout: post
title: Graph
---

### 사이클 확인

dfs로 preorder 탐색 후 복귀 시 node별 finished를 마킹한다.
finished 마킹된 노드가 아닌 노드를 방문하려고 한다면 사이클이 존재한다
코드를 보면 이해가 빠르다


{% highlight java %}
void dfs(int here) {

    visited[here] = true;

    for (auto there : vt[here]) {

        if (!visited[there]) {}
            dfs(there); 
        } // 탐색이 끝나지 않았는데 방문을 하려고 한다면 사이클이다.
        else if (!finish[there])

            cycle = 1;

    }

    finish[here] = true;

    st.push(here);

}
{% endhighlight %}


https://www.acmicpc.net/problem/5820

### 이분 그래프
edge 끝 두 vertex가 서로 색깔이 달라야 한다
주의점은 그래프가 끊겨있을 수 (비연결)있어 모든 정점을 체크해야함

https://www.acmicpc.net/problem/1707

