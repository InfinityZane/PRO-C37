class Quiz{
    constructor(){

    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
    
      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          //form = new Form()
          //form.display();
        }
    }

    play()
    {
      question.hide();

      background("yellow");
      textSize(40);
      text("Result of Quiz",120,70);
      Contestant.getContestantInfo();

      if(allContestants!==null)
      {
        textSize(20);
        text("Contestants who answered correctly are HIGHTILED in green colour",120,220);

        var display_position = 260;
        for(var plr in allContestants)
        {
          var correctAns="2";
          if(correctAns===allContestants[plr].answer)
          fill("green");
          else
          fill("red");
  
        display_position+=30;
        textSize(25);
        text(allContestants[plr].name+": "+allContestants[plr].answer,120,display_position)
      }
    }
   }
}