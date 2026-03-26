import { NextResponse } from "next/server";

const BOT_USER_AGENT_PATTERN =
  /(bot|crawler|spider|slurp|archiver|facebookexternalhit|embedly|outbrain|pinterest|whatsapp|slackbot|discordbot|telegrambot|applebot|semrushbot|ahrefsbot|mj12bot|dotbot|bytespider|petalbot|gptbot|chatgpt-user|oai-searchbot|ccbot|anthropic-ai|claudebot|perplexitybot|yandex|baiduspider|duckduckbot|bingbot|googlebot)/i;

function isBotUserAgent(userAgent) {
  const ua = userAgent?.trim() ?? "";
  if (!ua) return true;
  return BOT_USER_AGENT_PATTERN.test(ua);
}

export function middleware(request) {
  const userAgent = request.headers.get("user-agent");

  if (isBotUserAgent(userAgent)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const response = NextResponse.next();
  response.headers.set(
    "X-Robots-Tag",
    "noindex, nofollow, noarchive, nosnippet, noimageindex"
  );

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt).*)"],
  runtime: "experimental-edge",
};
