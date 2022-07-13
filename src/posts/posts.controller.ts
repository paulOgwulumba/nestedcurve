import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostDTO } from 'src/dtos/posts.dto';
import { PostsService } from './posts.service';

@Controller('post')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Get('/all')
    async getAllPosts() {
        return this.postsService.getPosts();
    }

    @Post('')
    @UsePipes(ValidationPipe)
    async createPost(@Body() body: PostDTO) {
        return this.postsService.createPost(body);
    }
}
