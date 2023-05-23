Example of using [vite-plugin-ssr](https://vite-plugin-ssr.com/) with [MUI](https://mui.com/).

```bash
git clone git@github.com:brillout/vps-mui
cd vps-mui/
pnpm install
pnpm run dev
# Or
pnpm run prod
```

It uses [this workaround](https://github.com/brillout/vps-mui/commit/89dd9925276ad8dab2238761332fb5f8e5efb407) for [mui/material-ui#37375](https://github.com/mui/material-ui/issues/37375). (See [this conversation](https://github.com/brillout/vite-plugin-ssr/discussions/901) if you're curious why the workaround works.)
