import { Controller, Get } from '@nestjs/common';

@Controller({ host: 'admin.localhost:3000' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}
