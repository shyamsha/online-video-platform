
  export interface SeoMeta {
      title: string;
      description: string;
  }

  export interface Section3 {
      subSecDesc: string;
      offSetMicroSeconds: string;
  }

  export interface Section2 {
      endTime: string;
      section: Section3[];
      startTime: string;
      sectionDesc: string;
  }

  export interface Section {
      sections: Section2[];
  }

  export interface Meta {
      test: string;
  }

  export interface Instructor {
      id: number;
      name: string;
      user_id: number;
      photo_url: string;
      description: string;
      style: string;
      youtube_url: string;
      facebook_url: string;
      instagram_url: string;
      thumbnail_url: string;
      gif_url?: any;
      is_active: number;
      meta: Meta;
      createdAt: Date;
      updatedAt: Date;
  }

  export interface Video {
      id: number;
      song_name: string;
      instructor_id: number;
      video_code: string;
      url: string;
      front_url: string;
      back_url: string;
      level: string;
      style: string;
      length: number;
      video_type: string;
      youtube_url: string;
      thumbnail_url: string;
      gif_url: string;
      meta?: any;
      seo_meta: SeoMeta;
      is_active: number;
      section: Section;
      release_date?: any;
      order: number;
      createdAt: Date;
      updatedAt: Date;
      instructor: Instructor;
  }

  export enum VideoActionTypes {
    VIDEO_REQUEST = "@@video/video/VIDEO_REQUEST",
    VIDEO_SUCCESS = "@@video/video/VIDEO_SUCCESS",
    VIDEO_ERROR = "@@video/video/VIDEO_ERROR",
  }

  export interface VideoState {
    readonly loading: boolean;
    readonly video: Video | null;
    readonly errors: {
      video?:string
    };
  }

