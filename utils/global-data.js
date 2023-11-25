export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Chris Lynch';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Data Collection';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '2023 - ∞';

  return {
    name,
    blogTitle,
    footerText,
  };
};
