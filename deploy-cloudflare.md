# 🚀 部署到 Cloudflare Pages 完整指南

## 方案选择

### ✅ 方案 A：Cloudflare Pages（推荐）
- 适合：静态网站
- 费用：免费
- 优点：自动部署、全球 CDN、自动 HTTPS

### 🔄 方案 B：Cloudflare Tunnel
- 适合：本地开发环境直接暴露
- 费用：免费
- 优点：无需构建、实时预览

---

## 方案 A：Cloudflare Pages 部署

### 步骤 1：初始化 Git 仓库

```bash
cd "/Users/flyfish/Library/Mobile Documents/com~apple~CloudDocs/Documents/飞鱼的个人网站"

# 初始化 Git
git init

# 创建 .gitignore（如果还没有）
cat > .gitignore << EOF
node_modules
.next
.DS_Store
*.log
.env
EOF

# 添加文件
git add .

# 提交
git commit -m "Initial commit: Feiyu personal website"
```

### 步骤 2：推送到 GitHub

1. 在 GitHub 创建新仓库（例如：`feiyu-website`）
2. 推送代码：

```bash
# 替换为你的 GitHub 用户名
git remote add origin https://github.com/YOUR_USERNAME/feiyu-website.git
git branch -M main
git push -u origin main
```

### 步骤 3：在 Cloudflare 部署

1. **登录 Cloudflare Dashboard**
   - 访问：https://dash.cloudflare.com

2. **创建 Pages 项目**
   - 左侧菜单 → **Workers & Pages** → **Create application**
   - 选择 **Pages** → **Connect to Git**

3. **选择仓库**
   - 选择你的 `feiyu-website` 仓库
   - 点击 **Begin setup**

4. **配置构建设置**
   - **Project name**: `feiyu-website`（或自定义）
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `.next` 或 `out`
   - **Environment variables**（可选）: 无需设置

5. **点击 Save and Deploy**

### 步骤 4：绑定自定义域名

1. 在 Pages 项目页面 → **Custom domains**
2. 点击 **Add custom domain**
3. 输入你的域名（例如：`feiyu.com`）
4. 点击 **Add domain**
5. Cloudflare 会自动配置 DNS

### 步骤 5：验证部署

- 访问：`https://feiyu-website.pages.dev`（临时域名）
- 或访问：`https://你的域名.com`（绑定后）

---

## 方案 B：Cloudflare Tunnel（本地直接发布）

### 步骤 1：安装 cloudflared

```bash
# macOS (Homebrew)
brew install cloudflared

# 或下载二进制文件
# https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/
```

### 步骤 2：登录 Cloudflare

```bash
cloudflared tunnel login
```

这会打开浏览器让你登录 Cloudflare 账号。

### 步骤 3：创建 Tunnel

```bash
# 创建 tunnel（替换 feiyu-tunnel 为你喜欢的名字）
cloudflared tunnel create feiyu-tunnel
```

会生成一个 tunnel ID 和凭证文件。

### 步骤 4：配置 Tunnel

```bash
# 创建配置文件
mkdir -p ~/.cloudflared
cat > ~/.cloudflared/config.yml << EOF
tunnel: feiyu-tunnel
credentials-file: /Users/flyfish/.cloudflared/feiyu-tunnel.json

ingress:
  - hostname: 你的域名.com
    service: http://localhost:3000
  - service: http_status:404
EOF
```

### 步骤 5：启动网站和 Tunnel

```bash
# 终端 1：启动 Next.js
cd "/Users/flyfish/Library/Mobile Documents/com~apple~CloudDocs/Documents/飞鱼的个人网站"
npm run dev

# 终端 2：启动 Tunnel
cloudflared tunnel run feiyu-tunnel
```

### 步骤 6：配置 DNS

在 Cloudflare Dashboard → DNS → 添加 CNAME 记录：
- **Name**: `www`（或 `@`）
- **Target**: `你的-tunnel-id.cfargotunnel.com`
- **Proxy**: Enabled (橙色云朵)

---

## 🔧 本地测试构建

在部署前，建议本地测试构建：

```bash
cd "/Users/flyfish/Library/Mobile Documents/com~apple~CloudDocs/Documents/飞鱼的个人网站"

# 安装依赖
npm install

# 构建
npm run build

# 本地预览
npm start
```

访问 `http://localhost:3000` 确认一切正常。

---

## 📊 方案对比

| 特性 | Pages | Tunnel |
|------|-------|--------|
| 部署方式 | Git 推送 | 本地运行 |
| 服务器 | Cloudflare 托管 | 你的电脑 |
| 可用性 | 99.9% | 依赖你的电脑 |
| 适合场景 | 生产环境 | 开发测试 |
| 推荐度 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

---

## ✅ 推荐方案

**使用 Cloudflare Pages（方案 A）**，原因：
1. 无需保持电脑开机
2. 自动全球 CDN 加速
3. 自动 HTTPS 证书
4. Git 推送自动部署
5. 完全免费

---

## 🆘 常见问题

### Q: 构建失败怎么办？
A: 检查 `.next` 目录是否正确，或尝试导出为纯静态：
```bash
# 修改 next.config.ts
const nextConfig = {
  output: 'export'
}
```

### Q: 域名解析不生效？
A: DNS 传播需要时间，通常 5-30 分钟，最长 24 小时。

### Q: 如何查看部署日志？
A: Cloudflare Dashboard → Pages → 你的项目 → **Deployments** → 点击具体部署查看日志。

---

## 📞 需要帮助？

遇到问题可以：
1. 查看 Cloudflare 文档：https://developers.cloudflare.com/pages/
2. 检查部署日志
3. 联系 Cloudflare 支持
