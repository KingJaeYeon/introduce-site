export type MetadataConfig = {
  title: string;
  description: string;
  image?: string;
  keywords?: string[];
};

export type MetadataRegistry = Record<string, MetadataConfig>;
