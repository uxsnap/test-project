import { HttpCode, HttpException, HttpStatus } from "@nestjs/common";
import supertest from "supertest";

export class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}