# Babel 7, eslint and webpack example configuration

This is example configuration for webpack, babel 7 and eslint.

Created to reproduce problem with `eslint-plugin-import`: https://github.com/benmosher/eslint-plugin-import/issues/1001

## How to reproduce the problem

First install dependencies (node >= 6, npm >= 5)
> npm install

### Using base webpack config

Run lint:
> npm run lint

And you will see the error:
```
1:1   error  Resolve error: Unexpected token import                                                    import/no-unresolved
```


### Use single file webpack config

In `.eslintrc` change line 19 to

`"config": "./internals/webpack/webpack.eslint.js"`
and everything is just working fine.
