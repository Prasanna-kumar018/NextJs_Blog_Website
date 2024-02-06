import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const UserComponent = () => {
  return (
    <div className="flex my-10 gap-10">
      <div className="min-w-12 flex">
        <Avatar className="w-12 h-12 self-center outline-1 outline-double">
          <AvatarImage className="" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <div>
          <p className="text-muted-foreground font-bold">Author</p>
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
          nostrum?
        </div>
      </div>
      <div>
        <div>
          <p className="text-muted-foreground font-bold">Published</p>
        </div>
        <div>1010010100</div>
      </div>
    </div>
  );
};

export default UserComponent;
