export const mockBlock = {
  object: 'block',
  id: '9d1084f6-03d7-4aac-8275-8d65102d2cbd',
  created_time: '2022-01-22T15:19:00.000Z',
  last_edited_time: '2022-01-22T16:01:00.000Z',
  has_children: false,
  archived: false,
  type: 'image',
  image: {
    caption: [
      {
        type: 'text',
        text: {
          content: 'The Notion database powering my new blog.',
          link: null,
        },
        annotations: {
          bold: false,
          italic: false,
          strikethrough: false,
          underline: false,
          code: false,
          color: 'default',
        },
        plain_text: 'The Notion database powering my new blog.',
        href: null,
      },
    ],
    type: 'file',
    file: {
      url:
        'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3622ccb4-cb71-4cc7-8a77-6345e43bec24/notion-blog-database.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220203T023212Z&X-Amz-Expires=3600&X-Amz-Signature=019513aab04e84fb12ef74fbbc16c843425641a8d6f5497fde78a6df8045ebbe&X-Amz-SignedHeaders=host&x-id=GetObject',
      expiry_time: '2022-02-03T03:32:12.340Z',
    },
  },
}

export const mockBlocks = [mockBlock, mockBlock, mockBlock]
