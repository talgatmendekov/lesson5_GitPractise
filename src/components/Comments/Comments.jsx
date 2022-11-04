import React from "react";
import "./Comments.css";
import PostDate from "../PostDate/PostDate";
import UserInfo from "../UserInfo";
import Card from "../../ui/Card";

function Comments({ userData }) {
  return (
    <Card>
      <UserInfo
        title={userData.userTitle}
        logoTitle={userData.userTitle}
        userLogo={userData.avatarUrl}
      />
      <div className="commentText">{userData.userText}</div>
      <PostDate date={userData.date} />
    </Card>
  );
}

export default Comments;
