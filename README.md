Demonstrates breaking ts-jest sourcemap line numbers with long function header comments.

```sh
$ yarn
$ yarn test

...

    ReferenceError: thisIsNotDefinedAndWillThrow is not defined

      33 |   };
      34 |
    > 35 |   return "whatever";
      36 | }
      37 |

      at request (src/module.ts:35:21)
      at Test.doStuff (src/index.ts:5:25)
      at Object.it (src/__tests__/sourcemap.test.ts:6:10)
```
