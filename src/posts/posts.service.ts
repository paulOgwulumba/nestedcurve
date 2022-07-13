import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from 'src/schema/post.schema';
import { PostDTO } from 'src/dtos/posts.dto';
import { Model, Types } from 'mongoose';

@Injectable()
export class PostsService {
    constructor(
        @InjectModel(Post.name) private postModel: Model<PostDocument>,
    ) {}

    async createPost(post: PostDTO) {
        console.log(post);

        const createdPost = new this.postModel({
            ...post,
            likes: [],
            createdAt: new Date().toISOString(),
            comments: [],
            createdBy: 'daniel_chuks',
            subscribers: [],
            subscribersFromCreator: [],
            isComment: false,
            parent: 'daniel_chuks',
        });

        console.log(createdPost)

        return await createdPost.save();
    }

    async getPosts() {
        return await this.postModel.find({}).exec();
    }
}
