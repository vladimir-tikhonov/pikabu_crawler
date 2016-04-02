#!/bin/sh

curl -XDELETE 'http://localhost:9200/pikabu' && echo

curl -XPUT 'http://localhost:9200/pikabu' -d '{
  "settings": {
    "analysis": {
      "analyzer": {
        "full_analyzer": {
          "type": "custom",
          "tokenizer": "standard",
          "filter": ["lowercase", "russian_morphology", "english_morphology", "my_stopwords"]
        }
      },
      "filter": {
        "my_stopwords": {
          "type": "stop",
          "stopwords": "а,без,более,бы,был,была,были,было,быть,в,вам,вас,весь,во,вот,все,всего,всех,вы,где,да,даже,для,до,его,ее,если,есть,еще,же,за,здесь,и,из,или,им,их,к,как,ко,когда,кто,ли,либо,мне,может,мы,на,надо,наш,не,него,нее,нет,ни,них,но,ну,о,об,однако,он,она,они,оно,от,очень,по,под,при,с,со,так,также,такой,там,те,тем,то,того,тоже,той,только,том,ты,у,уже,хотя,чего,чей,чем,что,чтобы,чье,чья,эта,эти,это,я,a,an,and,are,as,at,be,but,by,for,if,in,into,is,it,no,not,of,on,or,such,that,the,their,then,there,these,they,this,to,was,will,with"
        }
      }
    }
  }
}' && echo

curl -XPUT 'http://localhost:9200/pikabu/comment/_mapping' -d '{
  "comment": {
    "_all" : { "enabled": "false" },
    "properties" : {
      "rating": { "type": "long" },
      "author" : { "type": "string", "index": "not_analyzed" },
      "content" : { "type": "string", "analyzer": "full_analyzer" },
      "post_id" : { "type": "long" },
      "date" : { "type": "date" }
    }
  }
}' && echo
