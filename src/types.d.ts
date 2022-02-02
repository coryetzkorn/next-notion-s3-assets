interface Image {
  caption?: TextEntity[] | null
  type: string
  file: File
}

interface File {
  url: string
  expiry_time: string
}

interface VideoFile {
  caption?: TextEntity[] | null
  type: 'file'
  file: File
}

interface VideoEmbed {
  caption?: TextEntity[] | null
  type: 'external'
  file: File
  external?: {
    url: string
  }
}
interface Paragraph {
  text?: TextEntity[] | null
}
interface TextEntity {
  type: string
  text: Text
  plain_text: string
  href?: null
}

interface PostContent {
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
}
