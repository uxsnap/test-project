import { IsInt, IsString, IsUUID } from "class-validator";

export class CreateCatDto {
  @IsUUID(4, { message: 'tut blya ne to chto kinul suka' })
  id: string;

  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}