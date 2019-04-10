import {Thumbnail} from './Thumbnail';

export interface Book {
  isbn: string;
  title: string;
  subtitle: string;
  description: string;
  rating: number;
  firstThumbnailUrl: string;
  thumbnails: Thumbnail[];
}
