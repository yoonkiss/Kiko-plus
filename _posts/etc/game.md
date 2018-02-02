

용어
* FPS(First Person Shooter) 게임 
1인칭 슈팅 게임
오버워치, 서든 등

* RPG (Role Play Game) 게임
리니지 등 레벨업

* 온라인/패키지 게임
피파 vs 위닝11

* MMO RPG
Massively Multiplayer Online으로 다중멀티플레이온라인이란 뜻으로여러 사람이 함께 플레이한다는 것


* host vs dedicated game server
게임 구매 후 그 안에 들어 있는 게임 서버로 패키지 게임을 말함
데디케이티드 게임 서버는 게임 사용자가 직접 자기 컴퓨터에 띄울 수 없고, 대신 그 게임을 만든 회사에서 직접 서버를 띄운다


* MAU(Monthly Activity User)
MAU는 그 풀이대로 월별 활동 이용자를 뜻하며, 한달에 몇명이나 이 서비스를 이용하는가..아무래도 네트워크로 연계되는 사용자의 키를 기준으로 집계가 되겠습니다. 회원수랑은 좀 다르겠죠?

우선 MAU(Monthly Activity User)를 보겠습니다.
MAU는 그 풀이대로 월별 활동 이용자를 뜻하며, 한달에 몇명이나 이 서비스를 이용하는가..아무래도 네트워크로 연계되는 사용자의 키를 기준으로 집계가 되겠습니다. 회원수랑은 좀 다르겠죠?

그리고 DAU(Daily Activity User)가 있습니다.
DAU는 일별 활동 이용자를 나타내는 것으로서 하루에 몇명이나 이 서비스를 이용하는가.. 그리고 이건 동접이랑은 좀 다릅니다. 

동접은 MCU(Maximum Current User)로서 순간 동시 접속자로서 실시간으로 바뀌는 성향이 있습니다. 동접이 높으면 그만큼 MAU랑 DAU가 높다는 뜻이겠죠?

그리고 평균 동시 접속자 수도 있을 텐데요.. 그건 ACU(Average Current User)라고 해서 평균 동시 접속 유저수라고 볼 수 있습니다.

MAU, DAU에 대해서 통계가 나와있는 유용한 사이트가 있습니다.
AppData라고.. 페이스북 App관련 통계를 제공해 줍니다.

* Remote Method Invocation(RMI) 

* Hole Punching
NAT Traversal 기법 중 하나인 UDP Hole Punching

구멍을 뚫다, p2p 에서 통신가능하도록 구멍 (ip/port) 를 뚤어준다. NAT 로 인한 제약 등

* 메모리 풀
http://www.gamedevforever.com/31?category=387043

멀티 스레드 환경에서는 메모리 풀도 속도가 저하 lock에 대한 cost
thread별로 따로 메모리 풀을 두고 관리
다른 thread에서 접근 해야 하는 메모리는 전역 메모리 풀을 두어 관리
귀찮잖아요? 글에서 우리들을 위하여 TCmalloc(Thread Caching malloc)

* 핸드오프(Handoff) 또는 핸드오버(Handover) 
통화 중 기지국 간 이동을 원할하게 그대로 유지하는 기능

* 송신량 자동 조절 기능 (Throttling)

## 2장 간단예제

* cube 생성 > 사이즈 늘리기
* light  > 방향
* sphere > rigidbody (물리법칙)
* cube > component > physics > rigidbody > is kinematic check
* prj > create > physic material > bounciness 설정
* sphere > sphere collider > material > 위 재질을 추가 physic material drop
* cube 도 마찮가지로 위 재질을 추가 physic material drop
* 키 입력 스크립트작성 > cube에 추가
* Scene save named "ball and cube" -> inserted to project view


## 3 build for mobile

조작성/디스플레이/처리능력 차이존재 vs PC

가로화면 대응: 빌드 설정 Player Setting > resolution and presentation > default orientation > landscape
기울기 입력대응: 판을 기울인다-> 가속센서 이용
