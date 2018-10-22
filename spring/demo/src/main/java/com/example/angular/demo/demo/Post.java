package com.example.angular.demo.demo;

public class Post {

    private final long id;
    private final String userName;
    private String content;

    public Post(long id, String userName, String content) {
        this.id = id;
        this.userName = userName;
        this.content = content;
    }

    public Post() {
        this.id = -1;
        this.userName = "";
    };

    public long getId() {
        return this.id;
    }

    public String getUserName() {
        return this.userName;
   }

   public String getContent() {
       return this.content;
   }

   public void setContent(String newContent) {
       this.content = newContent;
   }
}