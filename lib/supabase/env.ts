export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

export const supabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

// Public sign-ups are turned off in Supabase, so any signed-in user is the admin.
// ADMIN_EMAIL is a second lock in case sign-ups are ever switched back on.
export function isAdmin(email: string | undefined) {
  const allowed = process.env.ADMIN_EMAIL
  if (!allowed) return Boolean(email)
  return email?.toLowerCase() === allowed.toLowerCase()
}
