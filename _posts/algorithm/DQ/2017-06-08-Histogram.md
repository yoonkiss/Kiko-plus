---
layout: post
title: Cut Vertex
---

### native
각 정점 삭제후, 컴코넌트 개수 확인 dfs(v) 번 수행
visited에 false인(방문하지 않은 vertex가 있는 지) 확인, 있다면 cut vertex가 존재


### 
https://www.acmicpc.net/blog/view/12

{% highlight java %}
long long largest(vector<int> &a, vector<int> &tree, int start, int end) {
    int n = a.size();
    int m = query(a, tree, 1, 0, n-1, start, end);
    long long area = (long long)(end-start+1)*(long long)a[m];
    if (start <= m-1) {
        long long temp = largest(a, tree, start, m-1);
        if (area < temp) {
            area = temp;
        }
    }
    if (m+1 <= end) {
        long long temp = largest(a, tree, m+1, end);
        if (area < temp) {
            area = temp;
        }
    }
    return area;
}
 
{% endhighlight %}

