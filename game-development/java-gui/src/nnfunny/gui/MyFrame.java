package nnfunny.gui;

import javax.swing.*;
import java.awt.*;

public class MyFrame extends JFrame {
  MyFrame() {
    this.setTitle("GUI JAVA");
    this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    this.setResizable(false);
    this.setSize(420, 430);
    this.setVisible(true);

    ImageIcon image = new ImageIcon("icon.png");
    this.setIconImage(image.getImage());
    this.getContentPane().setBackground(new Color(0x123445));
  }
}
