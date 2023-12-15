export interface IOneImage {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at: unknown;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  breadcrumbs: unknown[];
  urls: Urls;
  links: Links;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: unknown[];
  sponsorship: Sponsorship;
  topic_submissions: TopicSubmissions;
  user: User;
  exif: Exif;
  location: Location;
  meta: Meta;
  public_domain: boolean;
  tags: Tag[];
  tags_preview: TagsPreview[];
  views: number;
  downloads: number;
  topics: unknown[];
  related_collections: RelatedCollections;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Sponsorship {
  impression_urls: string[];
  tagline: string;
  tagline_url: string;
  sponsor: Sponsor;
}

export interface Sponsor {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: unknown;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: Links2;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

export interface Links2 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email: unknown;
}

export interface TopicSubmissions {}

export interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: unknown;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: Links3;
  profile_image: ProfileImage2;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social2;
}

export interface Links3 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage2 {
  small: string;
  medium: string;
  large: string;
}

export interface Social2 {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email: unknown;
}

export interface Exif {
  make: string;
  model: string;
  name: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

export interface Location {
  name: string;
  city: unknown;
  country: unknown;
  position: Position;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface Meta {
  index: boolean;
}

export interface Tag {
  type: string;
  title: string;
  source?: Source;
}

export interface Source {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: CoverPhoto;
}

export interface Ancestry {
  type: Type;
  category?: Category;
  subcategory?: Subcategory;
}

export interface Type {
  slug: string;
  pretty_slug: string;
}

export interface Category {
  slug: string;
  pretty_slug: string;
}

export interface Subcategory {
  slug: string;
  pretty_slug: string;
}

export interface CoverPhoto {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  breadcrumbs: Breadcrumb[];
  urls: Urls2;
  links: Links4;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: unknown[];
  sponsorship: unknown;
  topic_submissions: TopicSubmissions2;
  premium: boolean;
  plus: boolean;
  user: User2;
}

export interface Breadcrumb {
  slug: string;
  title: string;
  index: number;
  type: string;
}

export interface Urls2 {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface Links4 {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface TopicSubmissions2 {
  animals?: Animals;
  nature?: Nature;
  wallpapers?: Wallpapers;
  "architecture-interior"?: ArchitectureInterior;
  "color-of-water"?: ColorOfWater;
}

export interface Animals {
  status: string;
  approved_on: string;
}

export interface Nature {
  status: string;
  approved_on: string;
}

export interface Wallpapers {
  status: string;
  approved_on: string;
}

export interface ArchitectureInterior {
  status: string;
  approved_on: string;
}

export interface ColorOfWater {
  status: string;
  approved_on: string;
}

export interface User2 {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username?: string;
  portfolio_url?: string;
  bio?: string;
  location?: string;
  links: Links5;
  profile_image: ProfileImage3;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social3;
}

export interface Links5 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage3 {
  small: string;
  medium: string;
  large: string;
}

export interface Social3 {
  instagram_username: string;
  portfolio_url?: string;
  twitter_username?: string;
  paypal_email: unknown;
}

export interface TagsPreview {
  type: string;
  title: string;
  source?: Source2;
}

export interface Source2 {
  ancestry: Ancestry2;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: CoverPhoto2;
}

export interface Ancestry2 {
  type: Type2;
  category: Category2;
  subcategory?: Subcategory2;
}

export interface Type2 {
  slug: string;
  pretty_slug: string;
}

export interface Category2 {
  slug: string;
  pretty_slug: string;
}

export interface Subcategory2 {
  slug: string;
  pretty_slug: string;
}

export interface CoverPhoto2 {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  breadcrumbs: Breadcrumb2[];
  urls: Urls3;
  links: Links6;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: unknown[];
  sponsorship: unknown;
  topic_submissions: TopicSubmissions3;
  premium: boolean;
  plus: boolean;
  user: User3;
}

export interface Breadcrumb2 {
  slug: string;
  title: string;
  index: number;
  type: string;
}

export interface Urls3 {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface Links6 {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface TopicSubmissions3 {
  nature?: Nature2;
}

export interface Nature2 {
  status: string;
  approved_on: string;
}

export interface User3 {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: Links7;
  profile_image: ProfileImage4;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social4;
}

export interface Links7 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage4 {
  small: string;
  medium: string;
  large: string;
}

export interface Social4 {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email: unknown;
}

export interface RelatedCollections {
  total: number;
  type: string;
  results: Result[];
}

export interface Result {
  id: string;
  title: string;
  description: unknown;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  featured: boolean;
  total_photos: number;
  private: boolean;
  share_key: string;
  tags: Tag2[];
  links: Links10;
  user: User5;
  cover_photo: CoverPhoto4;
  preview_photos: PreviewPhoto[];
}

export interface Tag2 {
  type: string;
  title: string;
  source?: Source3;
}

export interface Source3 {
  ancestry: Ancestry3;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: CoverPhoto3;
}

export interface Ancestry3 {
  type: Type3;
  category?: Category3;
  subcategory?: Subcategory3;
}

export interface Type3 {
  slug: string;
  pretty_slug: string;
}

export interface Category3 {
  slug: string;
  pretty_slug: string;
}

export interface Subcategory3 {
  slug: string;
  pretty_slug: string;
}

export interface CoverPhoto3 {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at?: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description?: string;
  alt_description: string;
  breadcrumbs: Breadcrumb3[];
  urls: Urls4;
  links: Links8;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: unknown[];
  sponsorship: unknown;
  topic_submissions: TopicSubmissions4;
  premium: boolean;
  plus: boolean;
  user: User4;
}

export interface Breadcrumb3 {
  slug: string;
  title: string;
  index: number;
  type: string;
}

export interface Urls4 {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface Links8 {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface TopicSubmissions4 {
  "textures-patterns"?: TexturesPatterns;
  "color-of-water"?: ColorOfWater2;
  nature?: Nature3;
  wallpapers?: Wallpapers2;
  animals?: Animals2;
  "current-events"?: CurrentEvents;
}

export interface TexturesPatterns {
  status: string;
  approved_on: string;
}

export interface ColorOfWater2 {
  status: string;
  approved_on: string;
}

export interface Nature3 {
  status: string;
  approved_on: string;
}

export interface Wallpapers2 {
  status: string;
  approved_on: string;
}

export interface Animals2 {
  status: string;
  approved_on: string;
}

export interface CurrentEvents {
  status: string;
  approved_on: string;
}

export interface User4 {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username?: string;
  portfolio_url?: string;
  bio?: string;
  location?: string;
  links: Links9;
  profile_image: ProfileImage5;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social5;
}

export interface Links9 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage5 {
  small: string;
  medium: string;
  large: string;
}

export interface Social5 {
  instagram_username: string;
  portfolio_url?: string;
  twitter_username?: string;
  paypal_email: unknown;
}

export interface Links10 {
  self: string;
  html: string;
  photos: string;
  related: string;
}

export interface User5 {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: unknown;
  portfolio_url: unknown;
  bio: unknown;
  location: unknown;
  links: Links11;
  profile_image: ProfileImage6;
  instagram_username: unknown;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social6;
}

export interface Links11 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage6 {
  small: string;
  medium: string;
  large: string;
}

export interface Social6 {
  instagram_username: unknown;
  portfolio_url: unknown;
  twitter_username: unknown;
  paypal_email: unknown;
}

export interface CoverPhoto4 {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at?: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  breadcrumbs: unknown[];
  urls: Urls5;
  links: Links12;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: unknown[];
  sponsorship: unknown;
  topic_submissions: TopicSubmissions5;
  user: User6;
}

export interface Urls5 {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface Links12 {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface TopicSubmissions5 {}

export interface User6 {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name?: string;
  twitter_username?: string;
  portfolio_url?: string;
  bio?: string;
  location: string;
  links: Links13;
  profile_image: ProfileImage7;
  instagram_username?: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social7;
}

export interface Links13 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage7 {
  small: string;
  medium: string;
  large: string;
}

export interface Social7 {
  instagram_username?: string;
  portfolio_url?: string;
  twitter_username?: string;
  paypal_email: unknown;
}

export interface PreviewPhoto {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  blur_hash: string;
  urls: Urls6;
}

export interface Urls6 {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}
