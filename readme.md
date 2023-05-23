```
git clone git@github.com:brillout/vps-mui
cd vps-mui/
git switch reprod-2
pnpm install
pnpm run dev
```
Same as single line (copy-paste me):
```
git clone git@github.com:brillout/vps-mui && cd vps-mui/ && git switch reprod-2 && pnpm install && pnpm run dev
```

Then go to [localhost:3000](https://localhost:3000) and observe error:

```
5:11:31 PM [vite] Error when evaluating SSR module /node_modules/.pnpm/@mui+icons-material@5.11.16_@mui+material@5.13.2_@types+react@18.2.6_react@18.2.0/node_modules/@mui/icons-material/Menu.js:
|- TypeError: require is not a function
    at eval (/home/rom/tmp/vps-mui/node_modules/.pnpm/@mui+icons-material@5.11.16_@mui+material@5.13.2_@types+react@18.2.6_react@18.2.0/node_modules/@mui/icons-material/Menu.js:5:30)
    at instantiateModule (file:///home/rom/tmp/vps-mui/node_modules/.pnpm/vite@4.3.8_@types+node@18.16.14/node_modules/vite/dist/node/chunks/dep-4d3eff22.js:54399:15)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)

5:11:31 PM [vite] Error when evaluating SSR module /pages/index/index.page.tsx: failed to import "/node_modules/.pnpm/@mui+icons-material@5.11.16_@mui+material@5.13.2_@types+react@18.2.6_react@18.2.0/node_modules/@mui/icons-material/Menu.js"
|- TypeError: require is not a function
    at eval (/home/rom/tmp/vps-mui/node_modules/.pnpm/@mui+icons-material@5.11.16_@mui+material@5.13.2_@types+react@18.2.6_react@18.2.0/node_modules/@mui/icons-material/Menu.js:5:30)
    at instantiateModule (file:///home/rom/tmp/vps-mui/node_modules/.pnpm/vite@4.3.8_@types+node@18.16.14/node_modules/vite/dist/node/chunks/dep-4d3eff22.js:54399:15)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)

TypeError: require is not a function
    at /home/rom/tmp/vps-mui/node_modules/.pnpm/@mui+icons-material@5.11.16_@mui+material@5.13.2_@types+react@18.2.6_react@18.2.0/node_modules/@mui/icons-material/Menu.js:3:30
    at instantiateModule (file:///home/rom/tmp/vps-mui/node_modules/.pnpm/vite@4.3.8_@types+node@18.16.14/node_modules/vite/dist/node/chunks/dep-4d3eff22.js:54399:15)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
```
