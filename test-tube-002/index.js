require('module-alias/register')

import { s } from '@/other'

s.add('you').add('me')

console.log(s, s.size, s.has('you'))
