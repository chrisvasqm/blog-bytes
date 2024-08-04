import { PrismaClient } from '@prisma/client';
import PrismaClientSingleton from '../prisma/prisma-client-singleton';

class PostService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = PrismaClientSingleton.getInstance();
  }

  getAll() {
    return this.prisma.post.findMany({ orderBy: { createdAt: 'desc' } });
  }

  create(title: string, content: string) {
    return this.prisma.post.create({ data: { title, content } });
  }
}

export default PostService;