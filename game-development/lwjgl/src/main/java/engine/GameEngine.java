package engine;

public class GameEngine implements Runnable {

    @Override
    public void run() {

    }

    protected void gameLoop() {
        double secsPerFrame = 1.0d / 30.0d;
        double previous = getTime();
        double steps = 0.0;

        while (true) {
            double loopStarTime = getTime();
            double elapsed = loopStarTime - previous;
            previous = loopStarTime;
            steps += elapsed;

            handleInput();

            while (steps >= secsPerFrame) {
                updateGameState();
                steps -= secsPerFrame;
            }

            render();
            sync(loopStarTime);
        }
    }

    private void sync(double loopStartTime) {
        float loopSlot = 1f / 50;
        double endTime = loopStartTime + loopSlot;

        while (getTime() < endTime) {
            try {
                Thread.sleep(1);
            } catch (InterruptedException ignored) {}
        }
    }
}
