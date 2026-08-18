# geshu-rsbuild-shadcn-t3-template

格数科技的 Rsbuild + React SPA 项目模板，由 `geshu-rsbuild-shadcn-template` 降级迁移到 Tailwind CSS 3，并使用 shadcn/ui new-york / Radix 与 Chrome 102 浏览器基线。

## 创建新项目

```bash
git clone <repository-url> my-new-project
cd my-new-project
git remote rename origin template
git remote set-url --push template no_push://template
```

当前模板以上游 Shadcn 模板作为同步来源：

```text
template  https://github.com/1adybug/geshu-rsbuild-shadcn-template.git (fetch)
template  no_push://template (push)
```

## 开发端口

开发服务读取进程环境变量 `PORT`，未设置时使用 `5173`。PowerShell 中可这样指定端口：

```powershell
$env:PORT = "5174"
pnpm dev
```
