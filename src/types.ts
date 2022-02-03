export interface Image {
  type: string
  file: File
  [x: string | number | symbol]: unknown
}

export interface File {
  url: string
  expiry_time: string
  [x: string | number | symbol]: unknown
}

export interface VideoFile {
  type: 'file'
  file: File
  [x: string | number | symbol]: unknown
}

export interface VideoEmbed {
  type: 'external'
  file: File
  external?: {
    url: string
  }
  [x: string | number | symbol]: unknown
}

export interface Block {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  has_children: boolean
  archived: boolean
  type: string
  image?: Image | null
  video?: VideoEmbed | VideoFile | null
  [x: string | number | symbol]: unknown
}
