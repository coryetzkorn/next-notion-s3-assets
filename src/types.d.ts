interface Image {
  caption?: TextEntity[] | null
  type: string
  file: File
  [x: string | number | symbol]: unknown
}

interface File {
  url: string
  expiry_time: string
  [x: string | number | symbol]: unknown
}

interface VideoFile {
  caption?: TextEntity[] | null
  type: 'file'
  file: File
  [x: string | number | symbol]: unknown
}

interface VideoEmbed {
  caption?: TextEntity[] | null
  type: 'external'
  file: File
  external?: {
    url: string
  }
  [x: string | number | symbol]: unknown
}
interface Paragraph {
  text?: TextEntity[] | null
}
interface TextEntity {
  type: string
  text: Text
  plain_text: string
  href?: null
  [x: string | number | symbol]: unknown
}

interface Block {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  has_children: boolean
  archived: boolean
  type: string
  paragraph?: Paragraph | null
  image?: Image | null
  video?: VideoEmbed | VideoFile | null
  [x: string | number | symbol]: unknown
}
