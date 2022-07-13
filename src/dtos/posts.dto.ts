import { IsNotEmpty, IsString, IsNumber, IsBoolean } from "class-validator";

export class PostDTO {
    @IsNotEmpty()
    @IsString()
    text: string;

    @IsNotEmpty()
    @IsString()
    image: string;

    @IsNotEmpty()
    @IsBoolean()
    isFree: boolean;

    @IsNotEmpty()
    @IsNumber()
    price: number;
}