```
git clone git@github.com:brillout/vps-mui
cd vps-mui/
pnpm install
pnpm run build
pnpm run server:prod
```
Same as single line (copy-paste me):
```
git clone git@github.com:brillout/vps-mui && cd vps-mui/ && pnpm install && pnpm run build && pnpm run server:prod
```

Then go to [localhost:3000](https://localhost:3000) and observe error:

```
~/tmp/vite-ssr-project (main*) p server:prod

> @ server:prod /home/rom/tmp/vite-ssr-project
> cross-env NODE_ENV=production ts-node ./server/index.ts

Server running at http://localhost:3000
MenuIcon {
  default: {
    '$$typeof': Symbol(react.memo),
    type: { '$$typeof': Symbol(react.forward_ref), render: [Function] },
    compare: null
  }
}
Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.
    at Ib (/home/rom/tmp/vite-ssr-project/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js:72:155)
    at W (/home/rom/tmp/vite-ssr-project/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js:73:89)
    at Jb (/home/rom/tmp/vite-ssr-project/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js:76:98)
    at Kb (/home/rom/tmp/vite-ssr-project/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js:75:140)
    at W (/home/rom/tmp/vite-ssr-project/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js:73:345)
    at Ib (/home/rom/tmp/vite-ssr-project/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js:68:479)
    at W (/home/rom/tmp/vite-ssr-project/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js:73:89)
    at Ib (/home/rom/tmp/vite-ssr-project/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js:67:482)
    at W (/home/rom/tmp/vite-ssr-project/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js:73:89)
  at Jb (/home/rom/tmp/vite-ssr-project/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js:76:98)
```
