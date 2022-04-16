import { IoClipboard } from 'react-icons/io5'

export default {
    name: 'team',
    title: 'Teams',
    type: 'document',
    icon: IoClipboard,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'belongsTo',
            title: 'User',
            type: 'reference',
            to: [ { type: 'webUser' } ]
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'belongsTo.username'
        }
    }
}