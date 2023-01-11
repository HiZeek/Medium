export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Name',
    },
    {
        name: 'approved',
        type: 'boolean',
        title: 'Approved',
        description: "Comments won't show on the site without approval",
      },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'comment',
      type: 'string',
      title: 'Comment',
    },
  ],
};
