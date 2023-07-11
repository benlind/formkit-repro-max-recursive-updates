# Reproduction of FormKit validation bug

1. `yarn install`
2. `yarn serve`
3. In the sandbox, open the dev console and reload the page.

You will see a few Vue warnings like this:

> [Vue warn]: Maximum recursive updates exceeded in component <FormKitSchema>. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.
