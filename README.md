# Reproduction of FormKit multi-step validation bug

1. `yarn install`
2. `yarn serve`
3. In the sandbox, open the dev console and reload the page.

You will see a few Vue warnings like this:

> [Vue warn]: Maximum recursive updates exceeded in component <FormKitSchema>. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.

To "fix" the bug, open App.vue and replace `{ validPhone }` with `rules`. Or remove the multi-step features.

When using larger forms with multiple validations, this bug causes form rendering to be slow.
