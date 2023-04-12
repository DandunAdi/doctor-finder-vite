export interface Photo {
  size_formatted: string;
  url: string;
  formats: PhotoFormats;
}

export interface PhotoFormats {
  thumbnail: string;
  large: string;
  medium: string;
  small: string;
}
