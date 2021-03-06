import {BodyParams, Controller, Get, PathParams, Post} from "@tsed/common";
import {Groups, Returns} from "@tsed/schema";
import {User} from "../models/User";

@Controller("/")
export class UsersCtrl {
  @Get("/:id")
  @Returns(200, User).Groups("update")
  async get(@PathParams("id") id: string) {
  }

  @Post("/")
  @Returns(201, User).Groups("update")
  async post(@BodyParams() @Groups("creation") user: User) {
    console.log(user);
    user.id = uuid();

    return user;
  }

  @Post("/change-password")
  @Returns(204)
  async changePassword(@BodyParams() @Groups("changePassword") user: User) {
    console.log(user)
  }
}