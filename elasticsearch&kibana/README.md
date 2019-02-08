# Elastic search and kibana

## Problem Solved

**kibana.yml**
처음에 임의로 kibana.yml 파일을 작성하였더니 문제가 발생하였다.

docker 이미지에는 다음과 같은 기본 세팅이 들어간다.

```yaml
server.name: kibana
server.host: '0'
```

여기서 `server.host` 는 키바나 서버의 backend 서버를 설정해 주는 것으로 docker 가 지정한 내용을 변경할 경우 동작하지 않는다.

**out of memory**
aws 등 다른 가상 컨테이너에서 동작하는 경우 갑자기 에러 메세지도 없이 프로세스가 죽는 경우가 발생하였으며, 그 원인은 가상 메모리 사이즈가 부족한데서 기인하였다.

이 경우, host 피씨의 가상메모리 사이즈를 늘려주면 해결할 수 있다.

```sh
sudo sysctl -w vm.max_map_count=262144
```
