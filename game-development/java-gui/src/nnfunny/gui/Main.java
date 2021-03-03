package nnfunny.gui;

import javax.swing.*;
import javax.swing.border.Border;
import java.awt.*;

public class Main {
  //  final string ROOT_PATH
  public static void main(String[] args) {
    final String RESOURCES_PATH = "src/resources/";
    ImageIcon image = new ImageIcon(RESOURCES_PATH + "icon.png");
    Border border = BorderFactory.createLineBorder(Color.GREEN, 3);
    JLabel label = new JLabel();
    label.setText("Bro, Hi");
    label.setIcon(image);
    label.setHorizontalTextPosition(JLabel.CENTER);
    label.setVerticalTextPosition(JLabel.TOP);
    label.setForeground(new Color(0x12542));
    label.setFont(new Font("MV Bol", Font.PLAIN, 20));
    label.setIconTextGap(10);
    label.setBackground(Color.BLACK);
    label.setOpaque(true);
    label.setBorder(border);
    label.setVerticalAlignment(JLabel.CENTER);
    label.setHorizontalAlignment(JLabel.CENTER);
//    label.setBounds(0, 0, 250, 250);

    JFrame frame = new JFrame();
    frame.add(label);
    frame.setTitle("GUI JAVA");
    frame.setSize(420, 430);
    frame.setVisible(true);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
//    frame.setLayout(null);
//    frame.pack();
  }
}
