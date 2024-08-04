import { PrismaClient } from '@prisma/client';

class PrismaClientSingleton {
  private static instance: PrismaClient;

  private constructor() {
    // Private constructor to prevent instantiation
  }

  public static getInstance(): PrismaClient {
    if (!PrismaClientSingleton.instance)
      PrismaClientSingleton.instance = new PrismaClient();

    return PrismaClientSingleton.instance;
  }
}

export default PrismaClientSingleton;
