import { IPagination } from '../interfaces/i-pagination';

export class Pagination<T> implements IPagination<T> {
  results!: T[];
  next: number = 0;
  previous: number = 0;
  count: number = 0;
}
