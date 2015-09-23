//--- ページ読み込み時に実行したい処理
$(document).ready( function(){

});

//--- 開始ボタンが押されたときの処理
$("#start").click(function() {
  card_init();         // カードの初期化
  available_overlay(); // オーバーレイ開始

  //--カードの初期化
  function card_init() {
    var num = ["","","","",""];
    var newly_flag;

    // カードの数字を決定
    for(i = 0; i < 5;i++) {
      do {
        num[i] = num_rand()
        newly_flag = new_num_check(num, i);
      } while(!newly_flag);
    }
    // カードの初期化
    for(i = 0;i < 5;i++){
      $("#card" + i).attr("src","./CardImage/" + num[i] + ".gif");
    }
  }

  //-- 0〜51の乱数を生成
  function num_rand() {
    var val = Math.round( Math.random()*51 );
    if (val  < 10) {
      str = "0" + val.toString();
    } else {
      str = val.toString();
    }
    return str;
  }

  //-- 被っていない数字か判断
  function new_num_check(num, i) {
    for(j=i-1;j>=0;j--){
      if(num[i] == num[j]) {
        return false;
      }
    }
    return true;
  }

  //-- オーバーレイ化
  function available_overlay() {
    $('.overlay').colorOverlay({
        bgColor : '#000000',
        opacity : 0.3
    });
  }
});

//--- 「交換」ボタンが押されたとき
$('#change').click(function() {

});
