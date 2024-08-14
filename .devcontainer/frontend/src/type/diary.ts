export interface Diary {
  title: string;
  content: string;
  imageUrl: string;
}

export interface KarloResponse {
  imageUrl: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
