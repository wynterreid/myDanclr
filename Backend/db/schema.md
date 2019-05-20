##Schema
Users
Id - INT
Username -string 
Email - string
Password - string
Profile_Pic - string

Post/Blog
Id - INT
User_Id - Users_Id
Post_Type - string
Timestamp - DateTime
Post_Content - string (url)

Likes
Id - Int
Post_Id - Post_Id
LikedBy_Id - Users_Id

Followers
Id -Int
FollowedBy_Id - Users_Id
Following_Id - Users_Id
