import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanitymedium',

  projectId: '169omu8q',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

// import {defineConfig, isDev} from 'sanity'
// import {schemaTypes} from './schemas'


// export default defineConfig({
//   name: 'default',
//   title: 'sanityexpress',

//   projectId: '169omu8q',
//   dataset: 'production',

//   schema: {
//     types: schemaTypes,
//   },
// })
