package com.gqt.collections.arraylist;
import java.util.ArrayList;
import java.util.Collections;
public class Suffle {
public static void main(String[] args) {
	ArrayList <Integer>a1=new ArrayList<Integer>();
	a1.add(1);
    a1.add(2);
    a1.add(3);
    a1.add(4);
    a1.add(5);
    a1.add(6);
    a1.add(7);
    Collections.shuffle(a1);
    Integer[] Arrayshuffled = a1.toArray(new Integer[0]);
    for (int i = 0; i < Arrayshuffled.length; i++) {
        int list = Arrayshuffled[i];
        System.out.print(list + " ");
    }
    
}
}
