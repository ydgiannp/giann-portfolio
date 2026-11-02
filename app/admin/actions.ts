'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { isAdmin } from '@/lib/supabase/env'

export async function signIn(formData: FormData) {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithPassword({
    email: String(formData.get('email') ?? ''),
    password: String(formData.get('password') ?? ''),
  })

  if (error || !isAdmin(data.user?.email)) {
    await supabase.auth.signOut()
    redirect('/admin/login?error=1')
  }

  redirect('/admin')
}

export async function signOut() {
  await (await createClient()).auth.signOut()
  redirect('/admin/login')
}
