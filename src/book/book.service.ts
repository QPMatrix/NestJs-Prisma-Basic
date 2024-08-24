import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Book } from '@prisma/client';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  // Get all books
  async getAllBooks(): Promise<Book[]> {
    return this.prisma.book.findMany();
  }

  // Get a specific book by ID
  async getBook(id: string): Promise<Book | null> {
    return this.prisma.book.findUnique({ where: { id } });
  }

  // Create a new book
  async createBook(data: Prisma.BookCreateInput): Promise<Book> {
    console.log(data);
    return this.prisma.book.create({ data });
  }

  // Update an existing book by ID
  async updateBook(id: string, data: Prisma.BookUpdateInput): Promise<Book> {
    return this.prisma.book.update({ where: { id }, data });
  }

  // Delete a book by ID
  async deleteBook(id: string): Promise<Book> {
    return this.prisma.book.delete({ where: { id } });
  }
}
