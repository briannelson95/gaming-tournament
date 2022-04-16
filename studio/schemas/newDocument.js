export default {
    name: 'newDocument',
    title: 'Document',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Keep titles short'
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        }
    ],
}