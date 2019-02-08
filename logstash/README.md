# Logstash

elastic search 에서 elasticsearch 로 데이터를 보내는 경우 데이터를 가공하기 위한 template 정보를 생성하게 된다.
하지만, elastic search 에서 생성한 template 정보와 logstash 에서 생성한 템플릿 정보가 다를경우 logstash 를 실행시키는 과정에서 template 이 중복으로 생성되지 못해 실행이 되지 않게 된다.

이 경우 다음과 같이 `template_overwrite` 옵션을 주면 해당 문제가 해결된다.

```conf
output {
    stdout {
        codec => rubydebug
    }
    elasticsearch{
        hosts => ["localhost:9200"]
        template_overwrite => true
    }
}
```
