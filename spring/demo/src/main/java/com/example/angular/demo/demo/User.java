package com.example.angular.demo.demo;

public class User {

    private final long id;
    private final String userName;
    private String password;

    public User(long id, String userName, String password) {
        this.id = id;
        this.userName = userName;
        this.password = password;
    }

    public User() {
        this.id = -1;
        this.userName = "";
    };

    public long getId() {
        return this.id;
    }

    public String getUserName() {
        return this.userName;
   }

   public String getPassWord() {
       return this.password;
   }

   public void setPassword(String newPassWord) {
       this.password = newPassWord;
   }
}