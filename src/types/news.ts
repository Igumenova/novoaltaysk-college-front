export interface ImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface NewsImage {
  id: number;
  name: string;
  url: string;
  width: number;
  height: number;
  formats?: {
    small?: ImageFormat;
    medium?: ImageFormat;
    thumbnail?: ImageFormat;
  };
}

export interface NewsItem {
  id: number;
  documentId: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: NewsImage[]; // именно массив, а не StrapiImage
}
