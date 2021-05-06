package engine;

import static org.lwjgl.glfw.GLFW.*;

public class Window {

    public boolean isKeyPressed(int keyCode) {
        return glfwGetKey(windowHandle, keyCode) == GLFW_PRESS;
    }
}
