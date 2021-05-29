public class Main {
  public static void main(String[] args) {
    int numOfGuesses = 0;
    GameHelper helper = new GameHelper();
    SimpleDotCom theDotCom = new SimpleDotCom();
    int randomNum = (int)(Math.random() * 5);
    int [] locations = { randomNum, randomNum + 1, randomNum + 2 };
    theDotCom.setLocationCells(locations);
    boolean isAlive = true;

    while (isAlive == true) {
      String guess = helper.getUserInput("Enter a number: ");
      String result = theDotCom.checkYourself(guess);

      numOfGuesses++;

      if (result.equals("kill")) {
        isAlive = false;
        System.out.println("You took " + numOfGuesses + " guesses");
      }
    }

    //SimpleDotCom dot = new SimpleDotCom();

    //int[] locations = { 2, 3, 4 };
    //dot.setLocationCells(locations);


    //String userGuess = "2";
    //String result = dot.checkYourself(userGuess);

    //String testResult = "failed";

    //if (result.equals("hit")) {
      //testResult = "passed";
    //}

    //System.out.println(testResult);
  }
}
