package nnfunny.gui;

import javax.swing.*;

public class MyFrame extends JFrame {
  final JButton button;
  final JLabel label;

  MyFrame() {
    ImageIcon icon = new ImageIcon("resources/images/icon.png");
    label = new JLabel();
    label.setIcon(icon);
    label.setBounds(150, 250, 250, 250);
    label.setVisible(false);

    button = new JButton();
    button.setBounds(200, 100, 200, 100);
    button.setText("I'm a button");
    button.addActionListener(e -> {
      System.out.println("Hello");
      label.setVisible(true);
    });
    button.setFocusable(false);

    this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    this.add(button);
    this.add(label);
    this.setLayout(null);
    this.setTitle("GUI JAVA");
    this.setSize(750, 750);
    this.setVisible(true);
  }
}
