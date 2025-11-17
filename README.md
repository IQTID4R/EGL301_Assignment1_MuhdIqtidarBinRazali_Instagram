# Assignment_1 Instagram

This Node.js application is a simple imitation of the instagram application using a custom module **(Iqtidar_instagram.js)**.

## References
Instagram application (https://www.instagram.com/)

## Description
 It allows user to :
 - Add post 
 - Add comments to a post
 - Delete a comment in the post
 - View all comments on a post
 - Delete a Post
 - Update caption of a post
 - View all post by the user


**This module does not require any database**

## Set Up
 1. Install Node.js
 2. Copy the file Iqtidar_Instagram.js into a new project folder
 3. Create a test file (e.g app.js) to test the functions found in Iqtidar_Instagram.js .
 4. Ensure you add  ` const instagramDB = require("./Iqtidar_Instagram.js"); ` inside the test file.

## How to call functions, parameters required

### 1.AddPost(AccountName,Picture,Caption,Hashtags)

Purpose : Add a post to the Account
- Can add multiple pictures using commas in the Picture Params String e.g "sky,dog"
- Can add multiple hashtags using commas in the hashtags Params String e.g "#YES,#TREND"
- AccountName is case senstiive

        Parameter(AccountName:String , Picture:String , Caption:String , Hashtags:String)

### 2.AddComment(AccountName,Post,User,Comment)

Purpose : Adding a comment to a post whether its your own post or other user's posts

- AccountnName is validated , checks if such account name exist in the database
- Post will be validated  , checks if the post by the selected account exist 

        Parameter(AccountName:String , Post:String , User:String , Comment:String)


### 3.deleteComment(AccountName, post , user ,comment)

Purpose : The account can delete comments that it does not want on the post

- AccountnName is validated , checks if such account name exist in the database
- Post is validated  , checks if the post by the selected account exist 
- Will check if such comment exist .

        Parameter(AccountName:String , Post:String , User:String , Comment:String) 
        
### 4.viewAllCommentsByPost(accountName, post)

Purpose : To view all the comment of the selected post

- AccountnName is validated , checks if such account name exist in the database
- Post is validated  , checks if the post by the selected account exist 
- Comments is validated , checks if there is any comments. If no comments , return e.g there is no comments for john's post_1 

        Parameter(AccountName:String , Post:String , User:String , Comment:String)

### 5.deletePostByUser(AccountName,post)

Purpose : To delete a post of the selected Account

- AccountnName is validated , checks if such account name exist in the database
- Post is validated  , checks if the post by the selected account exist 

        Parameter(AccountName:String , Post:String)

### 6.updateCaptionPost(AccountName,Post,NewCaption)

Purpose : To update caption of a selected Account post

- AccountnName is validated , checks if such account name exist in the database
- Post is validated  , checks if the post by the selected account exist 

        Parameter(AccountName:String , Post:String, NewCaption:String)

### 7.ViewAllPostByUser(AccountName)

Purpose : View all Post posted by the Account

- AccountnName is validated , checks if such account name exist in the database
- For each post it will show , the post name , picture , caption , total comments , tags

        Parameter(AccountName:String)

