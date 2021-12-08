import { Controller, Get, HostParam } from "@nestjs/common";

@Controller({ host: ':admin.example.com' })
export class AdminController {
  @Get()
  getInfo(@HostParam('admin') account: string): string {
    return account;
  }
}