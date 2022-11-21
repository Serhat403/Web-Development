package com.example.demo;

public class Comment {

     String name;
     String text;

    Comment(String name, String text) {
        this.name = name;
        this.text = text;
    }

    Comment(){
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

}
