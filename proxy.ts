import { createServerClient, type SetAllCookies } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { supabaseUrl, supabaseAnonKey, supabaseConfigured, isAdmin } from '@/lib/supabase/env'

const LOGIN = '/admin/login'

export async function proxy(request: NextRequest) {
  const onLogin = request.nextUrl.pathname === LOGIN

  // Without Supabase keys nobody can sign in, so everything but the login page stays shut
  if (!supabaseConfigured) {
    return onLogin ? NextResponse.next() : NextResponse.redirect(new URL(LOGIN, request.url))
  }

  let response = NextResponse.next({ request })

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet: Parameters<SetAllCookies>[0]) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
        response = NextResponse.next({ request })
        cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options))
      },
    },
  })

  const { data: { user } } = await supabase.auth.getUser()
  const signedIn = Boolean(user) && isAdmin(user?.email)

  if (!signedIn && !onLogin) return NextResponse.redirect(new URL(LOGIN, request.url))
  if (signedIn && onLogin) return NextResponse.redirect(new URL('/admin', request.url))

  return response
}

export const config = {
  matcher: ['/admin/:path*'],
}
