import { defaultConfig } from '@formkit/vue'
import { createMultiStepPlugin } from '@formkit/addons'
import '@formkit/addons/css/multistep'

export default defaultConfig({
  theme: 'genesis',
  plugins: [
    createMultiStepPlugin(),
  ],
})
