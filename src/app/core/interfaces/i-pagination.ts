export interface IPagination<T> {
  count: number;
  next: number;
  previous: number;
  results: T[];
}
