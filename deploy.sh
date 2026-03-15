#!/bin/bash
# Cloudflare Pages 部署脚本

echo "🚀 开始部署到 Cloudflare Pages..."

# 检查是否登录
echo "检查 Cloudflare 登录状态..."
wrangler whoami 2>/dev/null
if [ $? -ne 0 ]; then
    echo "⚠️  未登录 Cloudflare，请先登录："
    echo "   wrangler login"
    exit 1
fi

# 构建项目
echo "📦 构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败"
    exit 1
fi

echo "✅ 构建成功"
echo ""
echo "📤 部署方法："
echo ""
echo "方法 1：通过 GitHub（推荐）"
echo "  1. 在 GitHub 创建仓库"
echo "  2. git push 推送代码"
echo "  3. Cloudflare Pages 连接 GitHub 自动部署"
echo ""
echo "方法 2：使用 Wrangler 直接部署"
echo "  wrangler pages deploy .next --project-name=feiyu-website"
echo ""
echo "方法 3：在 Cloudflare Dashboard 手动上传"
echo "  1. 访问 https://dash.cloudflare.com"
echo "  2. Workers & Pages → Create application → Pages"
echo "  3. 选择 'Direct Upload' 上传 .next 文件夹"
echo ""
