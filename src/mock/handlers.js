import { http } from 'msw'
import { mockData } from './mockData';
import { HttpResponse } from 'msw'
export const handlers = [
    http.get('/api/items', () => {
        return HttpResponse.json({ data: mockData })
    })
]