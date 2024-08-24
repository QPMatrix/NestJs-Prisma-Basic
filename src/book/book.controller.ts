import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Prisma } from '@prisma/client';

@Controller('api/v1/books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getAllBooks() {
    return this.bookService.getAllBooks();
  }

  @Get(':id')
  async getBook(@Param('id') id: string) {
    return this.bookService.getBook(id);
  }

  @Post()
  async createBook(@Body() data: Prisma.BookCreateInput) {
    return this.bookService.createBook(data);
  }

  @Put(':id')
  async updateBook(
    @Param('id') id: string,
    @Body() data: Prisma.BookUpdateInput,
  ) {
    return this.bookService.updateBook(id, data);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string) {
    return this.bookService.deleteBook(id);
  }
}
