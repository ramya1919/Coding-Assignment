package com.gqt.collections.arraylist;
import java.util.*;
public class Panagram {
	    public static void main(String[] args) {
	    	Scanner sc=new Scanner(System.in);
	        String str = sc.next();

	        if (isPangram(str)) {
	            System.out.println("The input is a pangram.");
	        } else {
	            System.out.println("The input is not a pangram.");
	        }
	    }

	    public static boolean isPangram(String str) {
	        
	        String str1 = str.replaceAll(" ", "").toLowerCase();
	        
	        if (str1.length() < 26) {
	            return false; 
	        }

	        boolean[] bool = new boolean[26];

	        for (int i = 0; i < str1.length(); i++) {
	            char c = str1.charAt(i);
	            if (c >= 'a' && c <= 'z') {
	                int index = c - 'a';
	                bool[index] = true;
	            }
	        }

	        for (int i = 0; i < bool.length; i++) {
	            if (!bool[i]) {
	                return false;
	            }
	        }

	        return true;
	    }
}
